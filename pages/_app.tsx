import { AppProps } from 'next/app';
import Head from 'next/head';
import { wrapper } from '@/store/store';
import { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import '../styles/globals.css';

type NextPageWithLayout<P = Record<string, unknown>, IP = P> = NextPage<
  P,
  IP
> & {
  getLayout?: () => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function CustomApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page: ReactElement) => page);

  return (
    <>
      <Head>
        <title>E-commerce</title>
      </Head>
      <main className="app">{getLayout(<Component {...pageProps} />)}</main>
    </>
  );
}

export default wrapper.withRedux(CustomApp);
