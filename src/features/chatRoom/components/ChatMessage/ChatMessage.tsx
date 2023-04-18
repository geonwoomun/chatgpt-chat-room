import { transToMessageFormat } from '@/shared/utils/dateFormat';
import { Text } from '@chakra-ui/react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';

type TailPosition = 'left' | 'right';
type ChatMessageProps = {
  id: string;
  content: string;
  tailPosition: TailPosition;
  className?: string;
  date: Date;
};

const ChatMessage = ({ id, content, date, tailPosition, className }: ChatMessageProps) => {
  return (
    <ChatMessageContainer className={className}>
      <ChatMessageWrapper tailPosition={tailPosition}>{content}</ChatMessageWrapper>
      <Text fontSize='sm' color='grey' paddingLeft={3} paddingRight={3}>
        {transToMessageFormat(date).join(' ')}
      </Text>
    </ChatMessageContainer>
  );
};

export default ChatMessage;

const ChatMessageContainer = styled.div`
  max-width: 300px;
`;

const ChatMessageWrapper = styled.div<{ tailPosition: TailPosition }>`
  position: relative;
  padding: 10px;
  background-color: #f1f1f1;
  border-radius: 5px;
  width: max-content;

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
