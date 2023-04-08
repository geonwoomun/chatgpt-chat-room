import type { AppProps } from 'next/app';

import { ChakraProvider } from '@chakra-ui/react';
import Head from 'next/head';
import styled from '@emotion/styled';
import GlobalStyles from '@/shared/styles/GlobalStyles';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Head>
        <title>A.I Chat</title>
        <meta name='description' content='A.I Chat Service' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <GlobalStyles />
      <GlobalLayout>
        <Component {...pageProps} />
      </GlobalLayout>
    </ChakraProvider>
  );
}

const GlobalLayout = styled.main`
  max-width: 428px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;
