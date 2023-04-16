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

const ChatItemPopover = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <IconButton variant='ghost' aria-label='more-icon' minWidth='max-content' icon={<Icon as={AiOutlineMore} />} />
      </PopoverTrigger>
      <Portal>
        <PopoverContent bg='whitesmoke' width='100px' top={-3}>
          <PopoverBody paddingLeft='4px'>
            <Button width='100%' size='sm' variant='ghost' color='red' cursor='pointer' justifyContent='flex-start'>
              삭제
            </Button>
          </PopoverBody>
        </PopoverContent>
      </Portal>
    </Popover>
  );
};

export default ChatItemPopover;
