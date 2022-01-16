import React from "react";

import Hero from "../components/ui/shared/Hero";
import Partners from "../components/ui/ourPartners/Partners";
import heroes from "../data/heroes";
import Layout from "../components/layouts/Layout";

const OurPartnersPage: React.FC = () => {
  return (
    <>
      <Layout>
        <Hero heroFileName={"our-partners-hero.jpg"} heroContent={heroes.ourPartners} />
        <Partners />
      </Layout>
    </>
  );
};

export default OurPartnersPage;
