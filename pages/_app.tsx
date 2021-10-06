import type { AppProps } from "next/app";
import Head from "next/head";

import "../styles/global.css";
import "../styles/variables.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Kick Action</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
