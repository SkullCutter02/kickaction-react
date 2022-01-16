import React from "react";

import Hero from "../components/ui/shared/Hero";
import Members from "../components/ui/aboutUs/Members";
import heroes from "../data/heroes";
import Layout from "../components/layouts/Layout";

const AboutUsPage: React.FC = () => {
  return (
    <>
      <Layout>
        <Hero heroContent={heroes.aboutUs} heroFileName={"about-us-hero.jpg"} />
        <Members />
      </Layout>
    </>
  );
};

export default AboutUsPage;
