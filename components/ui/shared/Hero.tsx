import React from "react";

interface Props {
  isHeroVideo?: boolean;
  isHomePage?: boolean;
  heroFileName: string;
  heroContent: { title: string; description: string };
}

const Hero: React.FC<Props> = ({ isHeroVideo = false, isHomePage = false, heroFileName, heroContent }) => {
  return (
    <>
      <div className="hero">
        <span className="hero-overlay" />
        <div className="hero-content">
          <h1 className="hero-title">{heroContent.title}</h1>
          <p className="hero-description">{heroContent.description}</p>
          {isHomePage && (
            <div className="index-sign-up">
              <a
                href="https://docs.google.com/forms/d/15kOPHlDh8Xzlc0HCOGPunm35Z3fuHIxDjzM5Cq3sbzg/edit"
                target="_blank"
              >
                SIGN UP
              </a>
            </div>
          )}
        </div>
        {isHeroVideo ? (
          <video loop muted autoPlay preload={"auto"} src={`/heroes/${heroFileName}`} />
        ) : (
          <img src={`/heroes/${heroFileName}`} />
        )}
      </div>

      <style jsx>{`
        .hero {
          width: 100%;
          height: 100vh;
          min-height: 700px;
          overflow: hidden;
          position: relative;
        }

        .hero * {
          color: #fff;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #000;
          opacity: 40%;
        }

        .hero video,
        .hero img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: -1;
        }

        .hero-content {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-80%, -10%);
          font-size: 1.5rem;
          text-shadow: 2px 2px 4px #000;
        }

        .index-sign-up a {
          text-shadow: none;
        }

        .hero-title {
          font-weight: 900;
          text-transform: uppercase;
          font-family: "Archivo", serif;
        }

        .hero-description {
          margin-top: 20px;
          width: 50vw;
          text-align: justify;
        }

        .index-sign-up {
          /* margin calc same as padding in a */
          margin: calc(10px + 30px) 0;
        }

        .index-sign-up a {
          color: #fff;
          padding: 15px;
          font-family: Archivo, serif;
          letter-spacing: 0.1em;
          font-weight: 600;
          background: var(--primaryColor);
          box-shadow: inset 0 0 0 0.09px var(--primaryTextColor);
          transition: all ease-out 0.3s;
        }

        .index-sign-up a:hover {
          box-shadow: inset 300px 0 0 0 var(--primaryTextColor);
          color: var(--primaryColor);
        }

        @media screen and (max-width: 1000px) {
          .hero-content {
            font-size: 1.25rem;
            transform: translate(-60%, -10%);
            width: 70%;
          }

          .hero-description {
            width: 100%;
          }
        }

        @media screen and (max-width: 600px) {
          .hero-content {
            font-size: 0.95rem;
            transform: translate(-50%, -40%);
            width: 80%;
          }

          .hero-content * {
            text-align: center;
          }

          .hero-description {
            width: 100%;
            line-height: 1.6em;
          }
        }
      `}</style>
    </>
  );
};

export default Hero;
