import React from "react";

import Hero from "../components/ui/shared/Hero";
import heroes from "../data/heroes";

const Blog: React.FC = () => {
  return (
    <>
      <Hero heroContent={heroes.blog} heroFileName={"blog-hero.png"} />
    </>
  );
};

export default Blog;
