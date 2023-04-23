import type { AppProps } from 'next/app';

import { ChakraProvider } from '@chakra-ui/react';
import Head from 'next/head';
import styled from '@emotion/styled';
import GlobalStyles from '@/shared/styles/GlobalStyles';
import { NextPage } from 'next';
import { ReactElement, ReactNode, useEffect } from 'react';
import setupIndexedDB from '@/shared/hooks/indexedDB';
import { idbConfig } from '@/shared/config/dbConfig';
import { RoomsProvider } from '@/shared/modules/RoomsContext';
import { useRouter } from 'next/router';
import OpenAiInstance from '@/shared/api/openApi';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);
  const router = useRouter();

  useEffect(() => {
    setupIndexedDB(idbConfig)
      .then(() => console.log('success'))
      .catch((e) => console.error('error / unsupported', e));
  }, []);

  useEffect(() => {
    if (!OpenAiInstance.apiKey) {
      router.push('/settings');
    }
  }, []);

  return (
    <ChakraProvider>
      <Head>
        <title>A.I Chat</title>
        <meta name='description' content='A.I Chat Service' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <RoomsProvider>
        <GlobalStyles />
        <GlobalLayout>{getLayout(<Component {...pageProps} />)}</GlobalLayout>
      </RoomsProvider>
    </ChakraProvider>
  );
}

const GlobalLayout = styled.section`
  max-width: 428px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;
