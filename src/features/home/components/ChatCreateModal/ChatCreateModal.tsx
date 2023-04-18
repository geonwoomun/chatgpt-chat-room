import { createMarginCss } from '@/shared/styles/marginStyle';
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
import React from 'react';

type ChatCreateModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const ChatCreateModal = ({ isOpen, onClose }: ChatCreateModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />

      <ModalContent>
        <ModalHeader>방 생성하기</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Input css={createMarginCss({ bottom: 16 })} minLength={2} maxLength={10} placeholder='Room Name' />

          <Input type='number' min={2} max={5} placeholder='Room Occupancy' />
        </ModalBody>

        <ModalFooter>
          <Button variant='ghost'>방 생성하기</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ChatCreateModal;
