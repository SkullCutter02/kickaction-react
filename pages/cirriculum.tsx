import React from "react";

import CirriculumTable from "../components/ui/cirriculum/CirriculumTable";
import Hero from "../components/ui/shared/Hero";
import heroes from "../data/heroes";
import Layout from "../components/layouts/Layout";

const CirriculumPage: React.FC = () => {
  return (
    <>
      <Layout>
        <Hero heroFileName={"about-us-hero.jpg"} heroContent={heroes.cirriculum} />
        <CirriculumTable />
      </Layout>
    </>
  );
};

export default CirriculumPage;
