import React from "react";
import { useQuery } from "react-query";
import { format, parseISO } from "date-fns";
import Link from "next/link";

import getBlogs from "../../../queries/getBlogs";
import useAos from "../../../hooks/useAos";

const Blogs: React.FC = () => {
  const { data: blogs } = useQuery<IBlog[]>("blogs", getBlogs);

  useAos({ once: true });

  return (
    <>
      <section className="blogs">
        {/*{blogs.map((blog) => (*/}
        {/*  <Link href={`/blog/${blog.id}`} key={"blog_" + blog.id}>*/}
        {/*    <article className="blog" data-aos={"fade-left"}>*/}
        {/*      <p className="blog-article-date">{format(parseISO(blog.created_at), "MMM. d, yyyy")}</p>*/}
        {/*      <p className="blog-article-title">{blog.title}</p>*/}
        {/*    </article>*/}
        {/*  </Link>*/}
        {/*))}*/}
      </section>

      <style jsx>{`
        article.blog {
          background: #414141;
          box-shadow: 10px 10px 20px 5px #1f1f1f;
          border-radius: 5px;
          padding: 30px;
          margin: 30px 0;
          cursor: pointer;
        }

        .blog-article-date {
          font-style: italic;
        }

        .blog-article-title {
          font-weight: 500;
          white-space: nowrap;
          overflow: hidden;
          display: block;
          text-overflow: ellipsis;
          margin-top: 15px;
          font-size: 1.1rem;
        }
      `}</style>
    </>
  );
};

export default Blogs;
