import { Container, IconButton } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { PropsWithChildren } from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { BaseHeader } from './components/BaseHeader';

type ChatLayoutProps = {};

const ChatLayout = ({ children }: PropsWithChildren<ChatLayoutProps>) => {
  const router = useRouter();

  const handleBackClick = () => {
    router.push('/');
  };

  return (
    <>
      <BaseHeader>
        <IconButton
          variant='ghost'
          size='md'
          aria-label='back'
          icon={<AiOutlineArrowLeft />}
          onClick={handleBackClick}
        />
      </BaseHeader>

      <Container as='main' marginTop={6} padding={0}>
        {children}
      </Container>
    </>
  );
};

export default ChatLayout;
