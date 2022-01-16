import React from "react";
import { GetServerSideProps } from "next";
import { dehydrate, QueryClient } from "react-query";

import Hero from "../components/ui/shared/Hero";
import Videos from "../components/ui/media/Videos";
import heroes from "../data/heroes";
import getVideos from "../queries/getVideos";
import Layout from "../components/layouts/Layout";

const MediasPage: React.FC = () => {
  return (
    <>
      <Layout>
        <Hero heroFileName={"media-hero.jpg"} heroContent={heroes.media} />
        <Videos />
      </Layout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery("videos", getVideos);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default MediasPage;
