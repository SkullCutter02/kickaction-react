import { QueryClient, QueryClientProvider, Hydrate } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import type { AppProps } from "next/app";
import { useState } from "react";
import Head from "next/head";

import Navbar from "../components/layouts/Navbar";
import Footer from "../components/layouts/Footer";

import "../styles/global.css";
import "../styles/variables.css";
import "../styles/blog.css";

import "aos/dist/aos.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Head>
            <title>Kick Action</title>
            <link rel="shortcut icon" href={"/images/favicon.ico"} />
          </Head>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </Hydrate>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
