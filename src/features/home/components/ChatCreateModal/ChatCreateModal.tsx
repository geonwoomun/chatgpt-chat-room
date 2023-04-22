import { createMarginCss } from '@/shared/styles/marginStyle';
import { RoomModel } from '@/shared/types/schema';
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import React, { useId } from 'react';

export type CreateRoomModel = {
  name: string;
  occupancy: number;
};

type ChatCreateModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm?: (value: Pick<RoomModel, 'name' | 'occupancy'>) => void;
};

const ChatCreateModal = ({ isOpen, onClose, onConfirm }: ChatCreateModalProps) => {
  const roomNameId = useId();
  const occupancyId = useId();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!(event.target instanceof HTMLFormElement)) {
      return;
    }

    const roomNameValue = event.target[roomNameId].value;
    const occupancyValue = event.target[occupancyId].value;

    onConfirm?.({ name: roomNameValue, occupancy: occupancyValue });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />

      <ModalContent>
        <ModalHeader>방 생성하기</ModalHeader>
        <ModalCloseButton />
        <form onSubmit={handleSubmit}>
          <ModalBody>
            <Input
              id={roomNameId}
              css={createMarginCss({ bottom: 16 })}
              minLength={2}
              maxLength={10}
              placeholder='Room Name'
            />

            <Input id={occupancyId} type='number' maxLength={1} min={2} max={5} placeholder='Room Occupancy' />
          </ModalBody>

          <ModalFooter>
            <Button variant='ghost' type='submit'>
              방 생성하기
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};

export default ChatCreateModal;
