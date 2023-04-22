import { Text as ChakraText, TextProps } from '@chakra-ui/react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';

type TextWithLineClampProps = {
  lineClamp?: number;
} & TextProps;

const Text = ({ lineClamp, children, ...rest }: TextWithLineClampProps) => {
  return (
    <CustomText lineClamp={lineClamp} {...rest}>
      {children}
    </CustomText>
  );
};

export default Text;

const CustomText = styled(ChakraText)<{ lineClamp?: number }>`
  ${({ lineClamp }) =>
    lineClamp &&
    css`
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: ${lineClamp};
      -webkit-box-orient: vertical;
    `}
`;
