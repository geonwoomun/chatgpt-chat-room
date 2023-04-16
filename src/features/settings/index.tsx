import React, { useEffect, useId } from 'react';
import { Input, Button } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { createMarginCss } from '@/shared/styles/marginStyle';
import OpenAiInstance from '@/shared/api/openApi';
import { useRouter } from 'next/router';

const Settings = () => {
  const inputId = useId();
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!(event.target instanceof HTMLFormElement)) {
      return;
    }

    const inputValue = event.target[`${inputId}-api-key`].value;
    OpenAiInstance.setInstance(inputValue);

    router.push('/');
  };

  return (
    <SettingsContainer>
      <form onSubmit={handleSubmit}>
        <Input
          id={`${inputId}-api-key`}
          css={createMarginCss({ bottom: 20 })}
          placeholder='Input your ChatGPT Api Key'
        />
        <Button type='submit' colorScheme='blue'>
          Submit
        </Button>
      </form>
    </SettingsContainer>
  );
};

export default Settings;

const SettingsContainer = styled.section`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
