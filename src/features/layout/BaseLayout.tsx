import { AddIcon } from '@chakra-ui/icons';
import { Container, IconButton, useDisclosure } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import React, { PropsWithChildren } from 'react';
import { AiOutlineMessage } from 'react-icons/ai';
import ChatCreateModal from '../home/components/ChatCreateModal';

type BaseLayoutProps = {};

const BaseLayout = ({ children }: PropsWithChildren<BaseLayoutProps>) => {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClickLogo = () => {
    router.push('/');
  };

  return (
    <>
      <BaseHeader>
        <IconButton variant='ghost' size='md' aria-label='logo' icon={<AiOutlineMessage />} onClick={handleClickLogo} />
        <IconButton variant='ghost' size='md' aria-label='Add Chat Room' icon={<AddIcon />} onClick={onOpen} />
      </BaseHeader>

      <Container as='main' marginTop={8} padding={0}>
        {children}
      </Container>

      <ChatCreateModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default BaseLayout;

const BaseHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding-top: 8px;
`;
