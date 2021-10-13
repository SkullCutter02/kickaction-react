import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons";

import pages from "../../data/pages";

const Footer: React.FC = () => {
  return (
    <>
      <footer>
        <div className="footer-credits">
          <p>
            <FontAwesomeIcon icon={faCode} /> Designed and built by{" "}
            <a href="https://webforge.space" target="_blank">
              Webforge
            </a>
          </p>
        </div>
        <div className="footer-text">
          <div className="footer-signup footer-info">
            <h3>Sign Up</h3>
            <div className="footer-button">
              <a
                className="signup-btn"
                href="https://docs.google.com/forms/d/15kOPHlDh8Xzlc0HCOGPunm35Z3fuHIxDjzM5Cq3sbzg/edit"
                target="_blank"
              >
                Signup Form
              </a>
            </div>
          </div>
          <div className="footer-links footer-info">
            <h3>Quick Links</h3>
            {pages.map((page) => (
              <Link href={`/${page.slug}`} key={page.id}>
                <a>{page.name}</a>
              </Link>
            ))}
          </div>
          <div className="footer-contact-us footer-info">
            <h3>Contact Us</h3>
            <p>
              <FontAwesomeIcon icon={faWhatsapp} /> +852 9667 5373
            </p>
            <p>
              <FontAwesomeIcon icon={faWhatsapp} /> +852 6880 1308
            </p>
            <p>
              <FontAwesomeIcon icon={faEnvelope} /> kickaction.hk@gmail.com
            </p>
            <p>
              <a href="https://www.instagram.com/kickaction.hk/" target="_blank">
                <FontAwesomeIcon icon={faInstagram} /> kickaction.hk
              </a>
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        footer {
          background: var(--footerColor);
          width: 100%;
          padding-top: 60px;
          padding-bottom: 30px;
          display: flex;
          flex-direction: column-reverse;
        }

        .footer-credits {
          width: 100%;
          margin-top: 40px;
        }

        .footer-credits p {
          text-align: center;
          color: var(--quaternaryTextColor);
        }

        .footer-credits a {
          color: #d26267;
        }

        .footer-info {
          height: 100%;
        }

        .footer-info h3 {
          margin-bottom: 20px;
          color: var(--secondaryTextColor);
        }

        .footer-info a,
        .footer-info p {
          margin-bottom: 10px;
          color: var(--tertiaryTextColor);
        }

        .footer-links a {
          display: block;
        }

        .footer-line {
          width: 100px;
          height: 2px;
          background: var(--primaryColor);
          margin: 15px 0;
        }

        .footer-text {
          display: flex;
          width: 100%;
          justify-content: space-evenly;
        }

        .signup-btn {
          padding: 10px;
          margin-top: 10px;
          display: inline-block;
          border: 2px solid var(--tertiaryTextColor);
          text-transform: uppercase;
          font-family: Archivo, serif;
          font-weight: 600;
          letter-spacing: 0.1em;
          box-shadow: inset 0 0 0 0 var(--tertiaryTextColor);
          transition: all ease-out 0.3s;
        }

        .signup-btn:hover {
          box-shadow: inset 300px 0 0 0 var(--tertiaryTextColor);
          color: var(--footerColor) !important;
        }

        @media screen and (max-width: 650px) {
          .footer-text {
            flex-direction: column;
            align-items: center;
          }

          .footer-text > * {
            width: 100%;
            text-align: center;
          }

          .footer-line {
            margin: 15px auto;
          }

          .footer-info {
            margin-bottom: 40px;
          }
        }
      `}</style>
    </>
  );
};

export default Footer;
