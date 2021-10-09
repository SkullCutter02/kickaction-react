import React from "react";

import Sdg from "./Sdg";

const Sdgs: React.FC = () => {
  return (
    <>
      <section className="sdgs-container home">
        <Sdg sdgNumber={3} />
        <Sdg sdgNumber={10} />
        <Sdg sdgNumber={5} />
      </section>

      <style jsx>{`
        .sdgs-container {
          width: 100%;
          display: grid;
          grid-template-columns: repeat(auto-fit, 300px);
          grid-gap: 50px;
          justify-content: center;
          margin-top: 100px;
        }
      `}</style>
    </>
  );
};

export default Sdgs;
