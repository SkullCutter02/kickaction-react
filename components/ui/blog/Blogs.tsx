import React from "react";
import { useQuery } from "react-query";

import getBlogs from "../../../queries/getBlogs";

const Blogs: React.FC = () => {
  const { data: blogs } = useQuery<IBlog[]>("blogs", getBlogs);

  return (
    <>
      {blogs.map((blog) => (
        <div className="blog" key={"blog_" + blog.id}>
          <p>{blog.title}</p>
          <p>{blog.body}</p>
        </div>
      ))}
    </>
  );
};

export default Blogs;
