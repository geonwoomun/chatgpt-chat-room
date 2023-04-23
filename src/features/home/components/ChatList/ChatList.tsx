import { RoomModel } from '@/shared/types/schema';
import { Flex } from '@chakra-ui/react';
import styled from '@emotion/styled';
import React from 'react';
import ChatItemPopover from '../ChatItemPopover';
import ChatListItem from '../ChatListItem';

type ChatListProps = {
  items: RoomModel[];
  onSelectUpdate: (selectedRoom: RoomModel) => void;
  onDelete: (roomId: number) => void;
};

const ChatList = ({ items, onDelete, onSelectUpdate }: ChatListProps) => {
  return (
    <CustomFlexContainer direction='column'>
      {items.map((item) => (
        <ChatListItem
          key={item.id}
          {...item}
          rightComponent={
            <ChatItemPopover onDelete={() => onDelete(item.id)} onSelectUpdate={() => onSelectUpdate(item)} />
          }
        />
      ))}
    </CustomFlexContainer>
  );
};

export default ChatList;

const CustomFlexContainer = styled(Flex)`
  & > div + div {
    margin-top: 12px;
  }
`;
