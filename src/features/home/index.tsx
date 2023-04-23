import OpenAiInstance from '@/shared/api/openApi';
import { useIndexedDBStore } from '@/shared/hooks/indexedDB';
import { useRoomsState } from '@/shared/modules/RoomsContext';
import { RoomModel } from '@/shared/types/schema';
import { useDisclosure } from '@chakra-ui/react';
import React, { useEffect, useMemo, useState } from 'react';
import ChatInfoModal from './components/ChatInfoModal';
import ChatList from './components/ChatList/ChatList';

const Home = () => {
  const { getAll, getManyByKey, update, deleteByID } = useIndexedDBStore<RoomModel>('rooms');
  const [rooms, setRooms] = useRoomsState();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [initialState, setInitialState] = useState<RoomModel | undefined>(undefined);

  const updatedInitialState = useMemo(() => {
    if (!initialState) return undefined;

    return { name: initialState.name, occupancy: initialState.occupancy };
  }, [initialState]);

  const handleOpenUpdateModal = (selectedRoom: RoomModel) => {
    setInitialState(selectedRoom);
    onOpen();
  };

  const handleDeleteRoom = async (roomId: number) => {
    await deleteByID(roomId);
    setRooms((prev) => prev.filter((room) => room.id !== roomId));
  };

  const handleUpdateRoom = (value: Pick<RoomModel, 'name' | 'occupancy'>) => {
    if (!initialState) {
      return;
    }

    const updatedRoomInfo = { ...initialState, name: value.name, occupancy: value.occupancy };

    update(updatedRoomInfo).then(() => {
      onClose();
      setInitialState(undefined);
      setRooms((prev) => prev.map((prevRoom) => (prevRoom.id === updatedRoomInfo.id ? updatedRoomInfo : prevRoom)));
    });
  };

  useEffect(() => {
    if (!OpenAiInstance.apiKey) {
      return;
    }

    getManyByKey('apiKey', OpenAiInstance.apiKey).then((result) => setRooms(result));
  }, [getAll]);

  return (
    <>
      <ChatList items={rooms} onDelete={handleDeleteRoom} onSelectUpdate={handleOpenUpdateModal} />
      <ChatInfoModal
        isOpen={isOpen}
        onClose={onClose}
        onConfirm={handleUpdateRoom}
        initialState={updatedInitialState}
      />
    </>
  );
};

export default Home;
