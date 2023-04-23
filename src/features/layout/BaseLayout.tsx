import OpenAiInstance from '@/shared/api/openApi';
import { useIndexedDBStore } from '@/shared/hooks/indexedDB';
import { useRoomsState } from '@/shared/modules/RoomsContext';
import { BaseRoomModel, CreateRoomModel } from '@/shared/types/schema';
import { AddIcon } from '@chakra-ui/icons';
import { Container, IconButton, useDisclosure } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { PropsWithChildren } from 'react';
import { AiOutlineMessage } from 'react-icons/ai';
import ChatInfoModal from '../home/components/ChatInfoModal';
import { BaseHeader } from './components/BaseHeader';

type BaseLayoutProps = {};

const BaseLayout = ({ children }: PropsWithChildren<BaseLayoutProps>) => {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { add } = useIndexedDBStore<CreateRoomModel>('rooms');
  const [, setRooms] = useRoomsState();

  const handleClickLogo = () => {
    router.push('/');
  };

  const handleConfirm = async ({ name, occupancy }: BaseRoomModel) => {
    if (!OpenAiInstance.apiKey) {
      return;
    }

    const nextRoom = { name, occupancy, apiKey: OpenAiInstance.apiKey };

    const createdRoomId = await add(nextRoom);

    setRooms((prev) => [...prev, { id: createdRoomId, ...nextRoom }]);
  };

  return (
    <>
      <BaseHeader>
        <IconButton variant='ghost' size='md' aria-label='logo' icon={<AiOutlineMessage />} onClick={handleClickLogo} />
        <IconButton variant='ghost' size='md' aria-label='Add Chat Room' icon={<AddIcon />} onClick={onOpen} />
      </BaseHeader>

      <Container as='main' marginTop={6} padding={0}>
        {children}
      </Container>

      <ChatInfoModal isOpen={isOpen} onClose={onClose} onConfirm={handleConfirm} />
    </>
  );
};

export default BaseLayout;
