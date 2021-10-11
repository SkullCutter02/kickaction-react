import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import Hamburger from "../widgets/Hamburger";
import pages from "../../data/pages";
import NavbarTabs from "./NavbarTabs";

const Navbar: React.FC = () => {
  const [currentTabValue, setCurrentTabValue] = useState<number>(1);
  const [isMobileNavActive, setIsMobileNavActive] = useState<boolean>(false);
  const [zIndex, setZIndex] = useState<-1 | 10000>(-1);

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

  useEffect(() => {
    if (isMobileNavActive) setZIndex(10000);
    else {
      setTimeout(() => {
        setZIndex(-1);
      }, 600);
    }
  }, [isMobileNavActive]);

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
          <NavbarTabs currentTabValue={currentTabValue} />
        </ul>

        <Hamburger isMobileNavActive={isMobileNavActive} setIsMobileNavActive={setIsMobileNavActive} />
      </nav>

      <div className={`mobile-nav${isMobileNavActive ? " enabled" : ""}`}>
        <div
          className="overlay"
          onClick={() => {
            if (isMobileNavActive) setIsMobileNavActive(false);
          }}
        />
        <ul id="mobile-nav-content">
          <NavbarTabs
            currentTabValue={currentTabValue}
            isMobile={true}
            isMobileNavActive={isMobileNavActive}
            setIsMobileNavActive={setIsMobileNavActive}
          />
        </ul>
      </div>

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

        .logo {
          cursor: pointer;
        }

        .logo img {
          max-width: 70px;
        }

        .mobile-nav {
          position: fixed;
          display: none;
          transition: opacity var(--hamburgerTransitionTime);
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          opacity: 0;
          z-index: ${zIndex};
        }

        .mobile-nav.enabled {
          opacity: 100%;
        }

        .mobile-nav .overlay {
          position: absolute;
          inset: 0;
          background: #000;
          opacity: 70%;
        }

        .mobile-nav #mobile-nav-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
        }

        @media screen and (max-width: 950px) {
          #nav-content {
            display: none;
          }

          .mobile-nav {
            display: block;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
