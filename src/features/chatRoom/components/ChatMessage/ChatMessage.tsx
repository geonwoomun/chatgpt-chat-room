import { createMarginCss } from '@/shared/styles/marginStyle';
import { MessageModel } from '@/shared/types/schema';
import { transToMessageFormat } from '@/shared/utils/dateFormat';
import { Avatar, Flex, Text, Wrap } from '@chakra-ui/react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';

type TailPosition = 'left' | 'right';
type ChatMessageProps = {
  isUserMessage: boolean;
  className?: string;
} & MessageModel;

const ChatMessage = ({ content, date, className, profileImage, userId, isUserMessage }: ChatMessageProps) => {
  return (
    <ChatMessageContainer className={className}>
      {!isUserMessage && <Avatar name={userId} src={profileImage || '/img/default.jpg'} />}
      <Flex
        flexDirection='column'
        css={createMarginCss({ left: isUserMessage ? 0 : 8 })}
        alignItems={isUserMessage ? 'flex-end' : 'flex-start'}
      >
        {!isUserMessage && <div>{userId}</div>}
        <ChatMessageWrapper tailPosition={isUserMessage ? 'right' : 'left'}>{content}</ChatMessageWrapper>
        <Text fontSize='sm' color='grey' paddingLeft={3} paddingRight={3}>
          {transToMessageFormat(date).join(' ')}
        </Text>
      </Flex>
    </ChatMessageContainer>
  );
};

export default ChatMessage;

const ChatMessageContainer = styled.div`
  display: flex;
  max-width: 350px;
`;

const ChatMessageWrapper = styled.div<{ tailPosition: TailPosition }>`
  position: relative;
  padding: 12px;
  background-color: #f1f1f1;
  border-radius: 5px;
  width: fit-content;
  max-width: 100%;

  ${(props) =>
    props.tailPosition === 'left'
      ? css`
          left: 10px;
        `
      : css`
          right: 10px;
        `}

  &:before {
    content: '';
    position: absolute;
    top: 15%;
    transform: translateY(-15%);

    ${(props) =>
      props.tailPosition === 'left'
        ? css`
            left: -10px;
            border-width: 0px 10px 8px 0px;
            border-style: solid;
            border-color: transparent #f1f1f1 transparent transparent;
          `
        : css`
            right: -10px;
            border-width: 0px 0px 8px 10px;
            border-style: solid;
            border-color: transparent transparent transparent #f1f1f1;
          `}
  }
`;
