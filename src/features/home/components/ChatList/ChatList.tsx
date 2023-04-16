import { Flex } from '@chakra-ui/react';
import styled from '@emotion/styled';
import React from 'react';
import ChatItemPopover from '../ChatItemPopover';
import ChatListItem from '../ChatListItem';

type ChatListProps = {
  items: { chatId: string; title: string; userCount: number }[];
};

const ChatList = ({ items }: ChatListProps) => {
  return (
    <CustomFlexContainer direction='column'>
      {items.map((item) => (
        <ChatListItem key={item.chatId} {...item} rightComponent={<ChatItemPopover />} />
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
