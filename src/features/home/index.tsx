import React from 'react';
import ChatList from './components/ChatList/ChatList';

// 채팅방 리스트 정보를 가지고 와서 리스트형식으로 보여주기
const dummyList = [
  {
    chatId: '123',
    title: 'test room',
    userCount: 4,
  },
  {
    chatId: '456',
    title: '테스트 룸 456',
    userCount: 3,
  },
];

const Home = () => {
  return (
    <>
      <ChatList items={dummyList} />
    </>
  );
};

export default Home;
