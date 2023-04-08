import { css, Global } from '@emotion/react';

const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        html,
        body,
        #__next {
          height: 100%;
        }

        ul,
        li {
          margin: 0;
          list-style: none;
        }
      `}
    />
  );
};

export default GlobalStyles;
