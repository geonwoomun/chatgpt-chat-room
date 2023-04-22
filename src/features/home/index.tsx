import OpenAiInstance from '@/shared/api/openApi';
import { useIndexedDBStore } from '@/shared/hooks/indexedDB';
import { useRoomsState } from '@/shared/modules/RoomsContext';
import { RoomModel } from '@/shared/types/schema';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import ChatList from './components/ChatList/ChatList';

const Home = () => {
  const router = useRouter();
  const { getAll, getManyByKey } = useIndexedDBStore<RoomModel>('rooms');
  const [rooms, setRooms] = useRoomsState();

  useEffect(() => {
    if (!OpenAiInstance.apiKey) {
      return;
    }

    getManyByKey('apiKey', OpenAiInstance.apiKey).then((result) => setRooms(result));
  }, [getAll]);

  useEffect(() => {
    if (!OpenAiInstance.apiKey) {
      router.push('/settings');
    }
  }, []);

  return <ChatList items={rooms} />;
};

export default Home;
