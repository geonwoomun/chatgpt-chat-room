import { createMarginCss } from '@/shared/styles/marginStyle';
import { Flex } from '@chakra-ui/react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';
import ChatInput from './components/ChatInput';
import ChatMessage from './components/ChatMessage';

const dummyMessages = [
  {
    id: '1',
    message: '안녕하세요. 하이요',
    date: '2023-04-04 21:21:00',
    userId: '1234',
  },
  {
    id: '2',
    message: '오키도키요',
    date: '2023-04-04 21:21:33',
    userId: 'zzzz',
  },
  {
    id: '3',
    message: '하이하히히히',
    date: '2023-04-04 21:22:11',
    userId: 'gzgz',
  },
];

const ChatRoom = () => {
  // 채팅방 아이디
  // 해당 채팅방 아이디에 맞는 채팅방 메시지 정보를 불러오기
  const profile = 'gzgz';

  const handleSendMessage = (value: string) => {
    console.log(value);
  };

  return (
    <>
      <Flex flexDirection='column'>
        {dummyMessages.map((messageInfo) => (
          <PositionChatMessage
            key={messageInfo.id}
            id={messageInfo.id}
            content={messageInfo.message}
            tailPosition={messageInfo.userId === profile ? 'right' : 'left'}
            position={messageInfo.userId === profile ? 'end' : 'start'}
          />
        ))}
      </Flex>

      <ChatInput css={createMarginCss({ top: 20 })} onSend={handleSendMessage} />
    </>
  );
};

export default ChatRoom;

const PositionChatMessage = styled(ChatMessage)<{ position: 'start' | 'end' }>`
  align-self: ${({ position }) => (position === 'start' ? 'flex-start' : 'flex-end')};

  &:not(:first-of-type) {
    margin-top: 12px;
  }
`;
