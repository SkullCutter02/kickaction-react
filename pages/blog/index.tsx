import React from "react";
import { GetServerSideProps } from "next";
import { dehydrate, QueryClient } from "react-query";

import Hero from "../../components/ui/shared/Hero";
import Blogs from "../../components/ui/blog/Blogs";
import getBlogs from "../../queries/getBlogs";
import heroes from "../../data/heroes";
import Layout from "../../components/layouts/Layout";

const BlogsPage: React.FC = () => {
  return (
    <>
      <Layout>
        <Hero heroContent={heroes.blog} heroFileName={"blog-hero.png"} />
        <Blogs />
      </Layout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery("blogs", getBlogs);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default BlogsPage;
