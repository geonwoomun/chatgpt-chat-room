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
    date: new Date(),
    userId: '1234',
  },
  {
    id: '2',
    message: '오키도키요',
    date: new Date(),
    userId: 'zzzz',
  },
  {
    id: '3',
    message: '하이하히히히',
    date: new Date(),
    userId: 'gzgz',
  },
  {
    id: '4',
    message: '하이하히히히',
    date: new Date(),
    userId: 'gzgz',
  },
  {
    id: '5',
    message: '하이하히히히',
    date: new Date(),
    userId: 'gzgz',
  },
  {
    id: '6',
    message: '하이하히히히',
    date: new Date(),
    userId: 'gzgz',
  },
  {
    id: '7',
    message: '하이하히히히',
    date: new Date(),
    userId: 'gzgz',
  },
  {
    id: '8',
    message: '하이하히히히',
    date: new Date(),
    userId: 'gzgz',
  },
  {
    id: '9',
    message: '하이하히히히',
    date: new Date(),
    userId: 'gzgz',
  },
  {
    id: '10',
    message: '하이하히히히',
    date: new Date(),
    userId: 'gzgz',
  },
  {
    id: '11',
    message: '하이하히히히',
    date: new Date(),
    userId: 'gzgz',
  },
  {
    id: '12',
    message: '하이하히히히',
    date: new Date(),
    userId: 'gzgz',
  },
  {
    id: '13',
    message: '하이하히히히',
    date: new Date(),
    userId: 'gzgz',
  },
  {
    id: '14',
    message: '하이하히히히',
    date: new Date(),
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
      <StyledFlex flexDirection='column'>
        {dummyMessages.map((messageInfo) => (
          <PositionChatMessage
            key={messageInfo.id}
            id={messageInfo.id}
            content={messageInfo.message}
            date={messageInfo.date}
            tailPosition={messageInfo.userId === profile ? 'right' : 'left'}
            position={messageInfo.userId === profile ? 'end' : 'start'}
          />
        ))}
      </StyledFlex>

      <StyledChatInput onSend={handleSendMessage} />
    </>
  );
};

export default ChatRoom;

const PositionChatMessage = styled(ChatMessage)<{ position: 'start' | 'end' }>`
  display: flex;
  flex-direction: column;
  align-items: ${({ position }) => (position === 'start' ? 'flex-start' : 'flex-end')};
  align-self: ${({ position }) => (position === 'start' ? 'flex-start' : 'flex-end')};

  &:not(:first-of-type) {
    margin-top: 12px;
  }
`;

const StyledFlex = styled(Flex)`
  height: calc(100vh - 150px);
  overflow-y: auto;
`;

const StyledChatInput = styled(ChatInput)`
  position: absolute;
  bottom: 12px;
  width: 100%;
  max-width: 428px;
`;
