import React from "react";

const OurMission: React.FC = () => {
  return (
    <>
      <section className="home">
        <article className="overview">
          <div>
            <h1>Our Mission</h1>
            <p>
              Kick Action connects students’ passions in the martial arts, digital arts, filmmaking,
              engineering, and technology to democratise self-learned spiritual and social empowerment for
              marginalised communities. Notably, Kick Action initiated the first student-led self defence
              program, as well as the first domestic worker martial arts performance in Hong Kong.
            </p>
          </div>
          <img src="/overview.png" alt="Overview" />
        </article>
      </section>

      <style jsx>{`
        .overview {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-column-gap: 80px;
          align-items: center;
        }

        .overview img {
          width: 100%;
          object-fit: contain;
        }

        @media screen and (max-width: 1100px) {
          .overview {
            grid-column-gap: 35px;
          }
        }

        @media screen and (max-width: 800px) {
          .overview {
            grid-template-columns: 1fr;
          }

          .overview img {
            grid-row-start: 1;
            margin: 50px auto;
          }
        }
      `}</style>
    </>
  );
};

export default OurMission;
