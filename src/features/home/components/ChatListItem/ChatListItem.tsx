import { createMarginCss } from '@/shared/styles/marginStyle';
import { Flex, IconButton, Icon, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { ReactNode } from 'react';
import { AiOutlineMore } from 'react-icons/ai';

type ChatListProps = {
  chatId: string;
  title: string;
  userCount: number;
  rightComponent?: ReactNode;
};

const ChatListItem = ({ chatId, title, userCount, rightComponent }: ChatListProps) => {
  const router = useRouter();

  const handleClickListItem = () => {
    router.push(`/chat/${chatId}`);
  };

  return (
    <Flex border='1px' borderRadius='lg' padding='3'>
      <Flex
        width='100%'
        direction='column'
        cursor='pointer'
        onClick={handleClickListItem}
        css={createMarginCss({ right: 8 })}
      >
        <Text fontSize='xl'>{title}</Text>
        <Text fontSize='sm' color='gray'>
          인원수: {userCount}명
        </Text>
      </Flex>

      {rightComponent}
    </Flex>
  );
};

export default ChatListItem;
