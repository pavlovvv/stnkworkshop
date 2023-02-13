import Head from "next/head";
import React from "react";
import "../styles/styles.scss";
import { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>STNK</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link rel="icon" href="/images/favicon.jpg" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
