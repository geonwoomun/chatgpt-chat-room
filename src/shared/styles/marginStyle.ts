import { css } from '@emotion/react';

export const createMarginCss = ({
  top,
  bottom,
  right,
  left,
}: {
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
}) => css`
  ${top &&
  css`
    margin-top: ${top}px;
  `}

  ${bottom &&
  css`
    margin-bottom: ${bottom}px;
  `}

  ${left &&
  css`
    margin-left: ${left}px;
  `}

  ${right &&
  css`
    margin-right: ${right}px;
  `}
`;
