import type { AppProps } from "next/app";
import Head from "next/head";

import Navbar from "../components/layouts/Navbar";
import Footer from "../components/layouts/Footer";

import "../styles/global.css";
import "../styles/variables.css";

import "aos/dist/aos.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Kick Action</title>
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
