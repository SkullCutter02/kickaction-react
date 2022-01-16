import React from "react";

const Impact: React.FC = () => {
  return (
    <>
      <section>
        <article>
          <div>
            <h1>Current Impact</h1>
            <p>
              The martial arts was historically founded on combating oppression and spiritually leveraging
              practitioners. For example, Taekwondo was established and invented by Koreans during Japan’s
              annexation. Karate was born in the Okinawa Islands as a form of self-defense, at a time when
              weapons were banned by invading Japanese forces. Such spiritual empowerment is much needed by
              marginalised community members, who endure a dominant sense of inequality in the resources they
              can access and the level of discrimination they face. Kick Action democratises the resource of
              the martial arts, throughout technology, filmmaking, and engineering, and offers it in a way
              that emphasizes wellbeing, confidence, and self-learned empowerment.
            </p>
          </div>
          <img src={"/impacts/impact_2.jpg"} alt="Overview" />
        </article>

        <article>
          <div>
            <h1>Potential Impact</h1>
            <p>
              Kick Action aims to extrapolate its values to provide inequality-addressing spiritual
              empowerment to a wider community. Kick Action believes that, throughout the tight-knit community
              of domestic workers it has created, spiritually empowering activities or skills beyond the
              martial arts, such as visual arts or public speaking, can be democratised as well. Kick Action
              also aims to make such resources accessible for marginalised communities beyond the domestic
              worker community and start venturing out to refugees, other ethnic groups, and more.
            </p>
          </div>
          <img src={"/impacts/impact_1.jpg"} alt="Overview" />
        </article>
      </section>

      <style jsx>{`
        section {
          width: 85%;
          margin: 80px auto;
        }

        article {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          grid-column-gap: 60px;
          align-items: center;
        }

        article:not(:first-child) {
          margin: 100px 0;
        }

        article:nth-child(even) {
          grid-template-columns: 1fr 1.5fr;
          text-align: right;
        }

        article:nth-child(even) img {
          grid-row-start: 1;
        }

        article p {
          text-align: justify;
          line-height: 1.5em;
        }

        article img {
          width: 100%;
        }

        @media screen and (max-width: 900px) {
          article,
          article:nth-child(even) {
            grid-template-columns: 1fr;
            text-align: justify;
          }

          article img {
            grid-row-start: 1;
            margin-bottom: 50px;
          }
        }
      `}</style>
    </>
  );
};

export default Impact;
