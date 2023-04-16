import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';

type TailPosition = 'left' | 'right';
type ChatMessageProps = {
  id: string;
  content: string;
  tailPosition: TailPosition;
  className?: string;
};

const ChatMessage = ({ id, content, tailPosition, className }: ChatMessageProps) => {
  return (
    <ChatMessageWrapper className={className} tailPosition={tailPosition}>
      {content}
    </ChatMessageWrapper>
  );
};

export default ChatMessage;

const ChatMessageWrapper = styled.div<{ tailPosition: TailPosition }>`
  position: relative;
  padding: 10px;
  background-color: #f1f1f1;
  border-radius: 5px;
  width: 200px;
  height: auto;

  &:before {
    content: '';
    position: absolute;
    top: 70%;
    transform: translateY(-70%);

    ${(props) =>
      props.tailPosition === 'left'
        ? css`
            right: -8px;
            border-width: 6px 0 6px 8px;
            border-style: solid;
            border-color: transparent transparent transparent #f1f1f1;
          `
        : css`
            left: -8px;
            border-width: 6px 8px 6px 0px;
            border-style: solid;
            border-color: transparent #f1f1f1 transparent transparent;
          `}
  }
`;
