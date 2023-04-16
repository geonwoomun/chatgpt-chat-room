import { Container, IconButton, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import React, { useRef } from 'react';
import { AiOutlineSend } from 'react-icons/ai';

type ChatInputProps = {
  className?: string;
  onSend: (value: string) => void;
};

const ChatInput = ({ className, onSend }: ChatInputProps) => {
  const ref = useRef<HTMLInputElement>(null);

  const handleClickSend = () => {
    if (!ref.current) {
      return;
    }

    onSend(ref.current?.value);
  };

  return (
    <Container className={className}>
      <InputGroup>
        <Input ref={ref} placeholder='type user think' size='lg' />
        <InputRightElement>
          <IconButton aria-label='send' icon={<AiOutlineSend />} onClick={handleClickSend} />
        </InputRightElement>
      </InputGroup>
    </Container>
  );
};

export default ChatInput;
