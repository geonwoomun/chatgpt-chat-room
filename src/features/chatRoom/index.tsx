import OpenAiInstance from '@/shared/api/openApi';
import { useIndexedDBStore } from '@/shared/hooks/indexedDB';
import { CreatedMessageModel, MessageModel, RoomModel } from '@/shared/types/schema';
import { getAIProfileImageURL } from '@/shared/utils/getAIProfileImage';
import { Flex } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
import ChatInput from './components/ChatInput';
import ChatMessage from './components/ChatMessage';

const ChatRoom = () => {
  const { query } = useRouter();
  const roomId = Number(query.roomId || 0);
  const [roomOccupancy, setRoomOccupancy] = useState(0);
  const currentUserId = OpenAiInstance.apiKey?.slice(0, 5) || '';

  const chatListRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<MessageModel[]>([]);

  const { add, getManyByKey } = useIndexedDBStore<MessageModel>('message');
  const { getByID } = useIndexedDBStore<RoomModel>('rooms');

  const messageToAI = async (value: string) => {
    const response = await fetch('/api/chat', {
      method: 'POST',
      body: JSON.stringify({
        text: value,
        apiKey: OpenAiInstance.apiKey,
      }),
    });

    const result = await response.json();
    const randomGptId = Math.floor(Math.random() * (roomOccupancy - 1));

    const nextMessageInfo: CreatedMessageModel = {
      content: result.text,
      date: new Date(),
      roomId,
      userId: `chat-gpt-${randomGptId}`,
      profileImage: getAIProfileImageURL(randomGptId),
    };
    const resultId = await add(nextMessageInfo);
    setMessages((prev) => [...prev, { id: resultId, ...nextMessageInfo }]);
  };

  const handleSendMessage = async (value: string) => {
    const nextMessageInfo: CreatedMessageModel = {
      content: value,
      date: new Date(),
      roomId,
      userId: currentUserId,
    };

    const createdMessageId = await add(nextMessageInfo);
    setMessages((prev) => [...prev, { id: createdMessageId, ...nextMessageInfo }]);
    messageToAI(value);
  };

  useEffect(() => {
    if (!chatListRef.current) {
      return;
    }

    chatListRef.current.scrollTo({ top: chatListRef.current.scrollHeight, behavior: 'auto' });
  }, [messages]);

  useEffect(() => {
    getManyByKey('roomId', roomId).then((storedMessages) => setMessages(storedMessages));
  }, []);

  useEffect(() => {
    getByID(roomId).then((value) => {
      setRoomOccupancy(value?.occupancy || 0);
    });
  }, [roomId]);

  return (
    <>
      <StyledFlex flexDirection='column' ref={chatListRef}>
        {messages.map((messageInfo) => (
          <PositionChatMessage
            key={messageInfo.id}
            {...messageInfo}
            isUserMessage={messageInfo.userId === currentUserId}
            position={messageInfo.userId === currentUserId ? 'end' : 'start'}
            profileImage={messageInfo.profileImage}
          />
        ))}
      </StyledFlex>

      <StyledChatInput onSend={handleSendMessage} />
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
