import React from "react";
import { GetServerSideProps } from "next";
import { dehydrate, QueryClient, useQuery } from "react-query";
import { useRouter } from "next/router";
import ReactMarkdown from "react-markdown";

import getBlog from "../../queries/getBlog";
import { format, parseISO } from "date-fns";

const BlogPage: React.FC = () => {
  const router = useRouter();
  const blogId = parseInt(router.query.id as string);

  const { data: blog } = useQuery<IBlog>(["blog", blogId], () => getBlog(blogId));

  return (
    <>
      <main>
        <h1 className="blog-title">{blog.title}</h1>
        <p className="blog-date">{format(parseISO(blog.created_at), "MMM. d, yyyy")}</p>
        <ReactMarkdown className="blog-body" children={blog.body} />
      </main>

      <style jsx>{`
        main {
          min-height: 100vh;
          padding-top: var(--navHeight);
          width: 65%;
          margin: 0 auto 100px;
        }

        .blog-title {
          margin-top: 60px;
        }

        .blog-date {
          margin-top: 4px;
        }

        @media screen and (max-width: 800px) {
          main {
            width: 80%;
          }
        }
      `}</style>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const queryClient = new QueryClient();

  const blogId = parseInt(ctx.query.id as string);

  await queryClient.prefetchQuery(["blog", blogId], () => getBlog(blogId));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default BlogPage;
