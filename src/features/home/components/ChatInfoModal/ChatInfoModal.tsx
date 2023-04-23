import useInputChange from '@/shared/hooks/useInputChange';
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
import React, { useEffect, useId, useRef, useState } from 'react';

export type CreateRoomModel = {
  name: string;
  occupancy: number;
};

type ChatInfoModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm?: (value: Pick<RoomModel, 'name' | 'occupancy'>) => void;
  initialState?: {
    name: string;
    occupancy: number;
  };
};

const ChatInfoModal = ({ isOpen, onClose, onConfirm, initialState }: ChatInfoModalProps) => {
  const {
    inputValue: roomName,
    handleChange: onChangeName,
    setInputValue: setRoomName,
  } = useInputChange(initialState?.name);

  const {
    inputValue: occupancy,
    handleChange: onChangeOccupancy,
    setInputValue: setOccupancy,
  } = useInputChange(String(initialState?.occupancy || 0));

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!(event.target instanceof HTMLFormElement)) {
      return;
    }

    onConfirm?.({ name: roomName, occupancy: Number(occupancy) });
    onClose();
  };

  useEffect(() => {
    if (!initialState) {
      return;
    }

    setRoomName(initialState.name);
    setOccupancy(String(initialState.occupancy));
  }, [initialState]);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />

      <ModalContent>
        <ModalHeader>{initialState ? '방 수정하기' : '방 생성하기'}</ModalHeader>
        <ModalCloseButton />
        <form onSubmit={handleSubmit}>
          <ModalBody>
            <Input
              value={roomName}
              onChange={onChangeName}
              css={createMarginCss({ bottom: 16 })}
              minLength={2}
              maxLength={10}
              placeholder='Room Name'
            />

            <Input
              value={occupancy}
              onChange={onChangeOccupancy}
              type='number'
              maxLength={1}
              min={2}
              max={5}
              placeholder='Room Occupancy'
            />
          </ModalBody>

          <ModalFooter>
            <Button variant='ghost' type='submit'>
              {initialState ? '수정' : '생성'}
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};

export default ChatInfoModal;
