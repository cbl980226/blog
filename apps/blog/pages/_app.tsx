import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';

import Navbar from '../app/components/Navbar/Navbar';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>cbl980226 blog</title>
      </Head>
      <div className="container mx-auto h-screen flex flex-col flex-nowrap bg-white text-black dark:bg-gray-800 dark:text-white">
        <header className="px-2">
          <Navbar></Navbar>
        </header>
        <main className="h-full px-2">
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}

export default CustomApp;
