import React from "react";

import Hero from "../components/ui/shared/Hero";
import Videos from "../components/ui/media/Videos";
import heroes from "../data/heroes";

const MediasPage: React.FC = () => {
  return (
    <>
      <Hero heroFileName={"media-hero.jpg"} heroContent={heroes.media} />
      <Videos />
    </>
  );
};

export default MediasPage;
