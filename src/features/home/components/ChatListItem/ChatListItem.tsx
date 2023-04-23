import { createMarginCss } from '@/shared/styles/marginStyle';
import { RoomModel } from '@/shared/types/schema';
import { Flex, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { ReactNode } from 'react';

type ChatListProps = {
  rightComponent?: ReactNode;
} & RoomModel;

const ChatListItem = ({ name, occupancy, id, rightComponent }: ChatListProps) => {
  const router = useRouter();

  const handleClickListItem = () => {
    router.push(`/chat/${id}`);
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
        <Text fontSize='xl'>{name}</Text>
        <Text fontSize='sm' color='gray'>
          인원수: {occupancy}명
        </Text>
      </Flex>

      {rightComponent}
    </Flex>
  );
};

export default ChatListItem;
