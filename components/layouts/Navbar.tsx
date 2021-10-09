import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import Hamburger from "../widgets/Hamburger";
import pages from "../../data/pages";

const Navbar: React.FC = () => {
  const [currentTabValue, setCurrentTabValue] = useState<number>(1);
  const [isMobileNavActive, setIsMobileNavActive] = useState<boolean>(false);

  const mobileNavRef = useRef<HTMLDivElement>(null);

  const router = useRouter();
  const path = router.asPath.split("/");

  useEffect(() => {
    for (const page of pages) {
      if (page.slug === "/") {
        setCurrentTabValue(1);
      } else if (page.slug === path[1]) {
        setCurrentTabValue(page.id);
      }
    }
  }, [path]);

  return (
    <>
      <nav>
        <div className="logo-container">
          <a href="./index.html" className="logo">
            <img src="/logo.png" alt="logo" />
          </a>
          <h3>KickAction</h3>
        </div>
        <ul id="nav-content">
          {pages.map((page) => (
            <li key={page.id}>
              <Link href={page.slug}>
                <a className={`tab tab-${page.id}`}>{page.name}</a>
              </Link>
            </li>
          ))}
        </ul>

        <Hamburger
          isMobileNavActive={isMobileNavActive}
          setIsMobileNavActive={setIsMobileNavActive}
        />

        <div
          className={`mobile-nav${isMobileNavActive ? " enabled" : ""}`}
          ref={mobileNavRef}
          id="mobile-nav"
        >
          <div
            className="overlay"
            id="mobile-nav-overlay"
            onClick={() => {
              if (isMobileNavActive) setIsMobileNavActive((prev) => !prev);
            }}
          />
          <ul id="mobile-nav-content">
            {pages.map((page) => (
              <li key={page.id} onClick={() => setIsMobileNavActive(false)}>
                <Link href={page.slug}>
                  <a className={`tab tab-${page.id}`}>{page.name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <style jsx>{`
        nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: var(--navHeight);
          background: var(--bg);
          z-index: 1000;
          position: fixed;
          width: 100%;
          box-shadow: 0 1px 10px 10px rgba(0, 0, 0, 0.3);
        }

        .logo-container {
          width: var(--navPercentage);
          display: flex;
          align-items: center;
        }

        nav h3 {
          text-transform: uppercase;
          color: #fff;
          font-size: 1.4rem;
          font-family: Archivo, sans-serif;
          font-weight: 900;
        }

        #nav-content {
          display: flex;
          justify-content: flex-end;
          width: calc(100% - var(--navPercentage));
          list-style: none;
          height: 100%;
        }

        #nav-content li {
          margin-right: 30px;
          height: 100%;
          display: flex;
          align-items: center;
        }

        .logo {
          cursor: pointer;
        }
        .logo img {
          max-width: 70px;
        }

        .tab {
          position: relative;
        }

        .tab${currentTabValue ? "-" + currentTabValue : ""} {
          color: var(--primaryColor) !important;
        }

        .tab::after {
          content: "";
          position: absolute;
          left: 50%;
          top: 120%;
          width: 100%;
          height: 2px;
          background-color: var(--primaryColor);
          transform: translateX(-50%) scaleX(0);
          transition: all 0.3s;
        }

        .tab:hover {
          color: var(--primaryColor);
          transition: all 0.3s;
        }

        .tab:hover::after {
          transform: translateX(-50%) scaleX(1);
          transition: all 0.3s;
        }

        li a {
          font-weight: 500;
          color: #fff;
          font-size: 1.2rem;
        }

        .mobile-nav {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          opacity: 0;
          transition: opacity var(--hamburgerTransitionTime);
          z-index: -1;
        }

        .mobile-nav.enabled {
          opacity: 100%;
          z-index: 1;
        }

        .mobile-nav .overlay {
          transition: all 0.2s;
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          z-index: 0;
          background: #000;
          opacity: 70%;
        }

        .mobile-nav #mobile-nav-content li:nth-child(odd) {
          transform: translate(-100vw, 0);
        }

        .mobile-nav #mobile-nav-content li:nth-child(even) {
          transform: translate(100vw, 0);
        }

        .mobile-nav.enabled #mobile-nav-content li {
          transform: translate(0, 0);
        }

        .mobile-nav #mobile-nav-content li {
          z-index: 2;
          padding: 20px 0;
          transition: all var(--hamburgerTransitionTime);
        }

        .mobile-nav #mobile-nav-content li a {
          text-align: center;
          display: block;
          font-size: 23px;
        }

        @media screen and (max-width: 950px) {
          #nav-content {
            display: none;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;