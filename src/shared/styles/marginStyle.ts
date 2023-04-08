import { css } from '@emotion/react';

export const createMarginCss = ({ y, x }: { y?: number; x?: number }) => css`
  ${y &&
  css`
    margin-bottom: ${y}px;
  `}

  ${x &&
  css`
    margin-right: ${x}px;
  `}
`;
