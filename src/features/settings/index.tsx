import React, { useEffect, useId, useState } from 'react';
import { Input, Button, Container, Flex, Divider } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { createMarginCss } from '@/shared/styles/marginStyle';
import OpenAiInstance from '@/shared/api/openApi';
import { useRouter } from 'next/router';
import { useIndexedDBStore } from '../../shared/hooks/indexedDB';
import { ApiKeyModel } from '@/shared/types/schema';
import Text from '@/shared/components/Text';

const Settings = () => {
  const inputId = useId();
  const router = useRouter();

  const [apiKeyList, setApiKeyList] = useState<ApiKeyModel[]>([]);
  const { add, getAll } = useIndexedDBStore<ApiKeyModel>('api-keys');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!(event.target instanceof HTMLFormElement)) {
      return;
    }

    const inputValue = event.target[`${inputId}-api-key`].value;
    OpenAiInstance.setInstance(inputValue);
    add({ apiKey: inputValue });

    router.push('/');
  };

  const handleSelectApiKey = (selectedApiKey: string) => {
    OpenAiInstance.setInstance(selectedApiKey);
    router.push('/');
  };

  useEffect(() => {
    getAll().then((apiKeyListResult) => setApiKeyList(apiKeyListResult));
  }, []);

  return (
    <SettingsContainer>
      <Container
        width='100%'
        css={createMarginCss({ bottom: 40 })}
        padding='4'
        border='1px'
        borderColor='gray'
        borderRadius='lg'
      >
        <Text fontSize='xl'>저장된 Api Key list</Text>
        <Divider />
        {apiKeyList.map((v) => (
          <Flex
            key={v.apiKey}
            css={createMarginCss({ top: 12 })}
            justifyContent='space-between'
            alignItems='center'
            width='100%'
          >
            <Text lineClamp={2}>{v.apiKey}</Text>
            <Button minWidth='max-content' onClick={() => handleSelectApiKey(v.apiKey)}>
              선택하기
            </Button>
          </Flex>
        ))}
      </Container>
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
