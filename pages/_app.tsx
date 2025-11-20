import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../src/styles/globals.css';
import '../src/index.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}