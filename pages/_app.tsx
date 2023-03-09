import Head from "next/head";
import React from "react";
import "../styles/styles.scss";
import { AppProps } from "next/app";
import "../other/firebase";
import { Provider } from "react-redux";
import store from "../redux/store";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>STNK Workshop</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link rel="icon" href="/images/titlelogo.svg" />
      </Head>
      <Provider store={store}>
      <Component {...pageProps} />
      </Provider>
    </>
  );
}
