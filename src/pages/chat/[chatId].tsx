import ChatRoom from '@/features/chatRoom';
import ChatLayout from '@/features/layout/ChatLayout';
import React, { ReactElement } from 'react';

const ChatRoomPage = () => {
  return <ChatRoom />;
};

export default ChatRoomPage;

ChatRoomPage.getLayout = (page: ReactElement) => {
  return <ChatLayout>{page}</ChatLayout>;
};
