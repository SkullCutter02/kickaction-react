import React from "react";

import partners from "../../../data/partners";
import useAos from "../../../hooks/useAos";

const Partners: React.FC = () => {
  useAos({ once: true });

  return (
    <>
      <div className="partners">
        {partners.map((partner) => (
          <div className="partner" key={partner.id}>
            <div className="partner-text-content" data-aos="fade-right">
              <h2>{partner.name}</h2>
              <p className="partner-description">{partner.description}</p>
              <div className="partner-website">
                <a href={partner.websiteUrl} target="_blank">
                  VIEW WEBSITE
                </a>
              </div>
            </div>
            <img src={`/partners/partner_${partner.id}.png`} alt="logo" data-aos="fade-left" />
          </div>
        ))}
      </div>

      <style jsx>{`
        .partners {
          margin: 0 auto;
          overflow: hidden;
        }

        .partner {
          display: flex;
          padding: 80px 40px;
        }

        .partner:nth-child(odd) {
          background: #373737;
        }

        .partner:nth-child(even) {
          background: var(--bg);
        }

        .partner > img {
          width: 60%;
          height: 400px;
          object-fit: contain;
          background: #fff;
        }

        .partner-text-content {
          width: 40%;
          margin: 30px 70px 0 2%;
        }

        .partner-text-content h2 {
          font-family: Archivo, serif;
          font-weight: 900;
          text-transform: uppercase;
          margin-bottom: 20px;
          margin-right: 30px;
        }

        .partner-description {
          line-height: 1.6em;
          color: var(--secondaryTextColor);
        }

        .partner-website {
          /* margin calc same as padding in a */
          margin: calc(10px + 30px) 0;
        }

        .partner-website a {
          color: #fff;
          padding: 15px;
          font-family: Archivo, serif;
          letter-spacing: 0.1em;
          font-weight: 600;
          background: var(--primaryColor);
          box-shadow: inset 0 0 0 0.09px var(--primaryTextColor);
          transition: all ease-out 0.3s;
        }

        .partner-website a:hover {
          box-shadow: inset 300px 0 0 0 var(--primaryTextColor);
          color: var(--primaryColor);
        }

        @media screen and (max-width: 1000px) {
          .partner {
            flex-direction: column-reverse;
          }

          .partner > img {
            width: 100%;
            height: 350px;
          }

          .partner-text-content {
            width: 100%;
            margin: 40px 0 0 0;
          }
        }

        @media screen and (max-width: 600px) {
          .partner > img {
            height: 200px;
          }
        }
      `}</style>
    </>
  );
};

export default Partners;
