import { useIndexedDBStore } from '@/shared/hooks/indexedDB';
import {
  Button,
  IconButton,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Portal,
  Icon,
} from '@chakra-ui/react';
import React from 'react';
import { AiOutlineMore } from 'react-icons/ai';

type ChatItemPopOverProps = {
  onSelectUpdate: () => void;
  onDelete: () => void;
};

const ChatItemPopover = ({ onSelectUpdate, onDelete }: ChatItemPopOverProps) => {
  return (
    <Popover>
      <PopoverTrigger>
        <IconButton variant='ghost' aria-label='more-icon' minWidth='max-content' icon={<Icon as={AiOutlineMore} />} />
      </PopoverTrigger>
      <Portal>
        <PopoverContent bg='whitesmoke' width='100px' top={-3}>
          <PopoverBody paddingLeft='4px'>
            <Button
              onClick={onSelectUpdate}
              width='100%'
              size='sm'
              variant='ghost'
              cursor='pointer'
              justifyContent='flex-start'
            >
              수정
            </Button>
            <Button
              onClick={onDelete}
              width='100%'
              size='sm'
              variant='ghost'
              color='red'
              cursor='pointer'
              justifyContent='flex-start'
            >
              나가기
            </Button>
          </PopoverBody>
        </PopoverContent>
      </Portal>
    </Popover>
  );
};

export default ChatItemPopover;
