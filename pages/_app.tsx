import { AppProps } from 'next/app';
import Head from 'next/head';
// import { Provider } from 'react-redux';
// import { store } from '@/store/store';
import { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import './globals.css';

type NextPageWithLayout<P = Record<string, unknown>, IP = P> = NextPage<
  P,
  IP
> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function CustomApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <Head>
        <title>E-commerce MVP</title>
      </Head>
      <main className="app">
        {/* <Provider store={store}> */}
        {getLayout(<Component {...pageProps} />)}
        {/* </Provider> */}
      </main>
    </>
  );
}

export default CustomApp;
