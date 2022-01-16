import React from "react";

import Hero from "../components/ui/shared/Hero";
import OurMission from "../components/ui/home/OurMission";
import Sdgs from "../components/ui/home/Sdgs";
import heroes from "../data/heroes";
import Impact from "../components/ui/home/Impact";
import Layout from "../components/layouts/Layout";

const HomePage: React.FC = () => {
  return (
    <>
      <Layout>
        <Hero
          isHeroVideo={true}
          heroFileName={"index-hero.mp4"}
          isHomePage={true}
          heroContent={heroes.home}
        />
        <OurMission />
        <Sdgs />
        <Impact />
      </Layout>
    </>
  );
};

export default HomePage;
