import type { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';

import { ThemeProvider } from '@cbl980226/flowbite-react';
import { BaseLayout } from '../app/features/Layout/BaseLayout';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>cbl980226 blog</title>
      </Head>
      <ThemeProvider>
        <BaseLayout>
          <Component {...pageProps} />
        </BaseLayout>
      </ThemeProvider>
    </>
  );
}

export default CustomApp;
