import React from 'react';
import { Input, Button } from '@chakra-ui/react';
import useInputChange from '@/shared/hooks/useInputChange';
import styled from '@emotion/styled';
import { createMarginCss } from '@/shared/styles/marginStyle';

const Settings = () => {
  const [value, handleChange] = useInputChange('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // ToDo: ChatGPT API Check 로직 있으면 체크,
    // 그 후 chat 페이지로 보내기
  };

  return (
    <SettingsContainer>
      <form onSubmit={handleSubmit}>
        <Input
          css={createMarginCss({ y: 20 })}
          value={value}
          onChange={handleChange}
          placeholder='Input your ChatGPT Api Key'
        />
        <Button colorScheme='blue'>Submit</Button>
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
