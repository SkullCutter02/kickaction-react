import React, { Dispatch, SetStateAction } from "react";
import Link from "next/link";

import pages from "../../data/pages";

interface Props {
  isMobile?: boolean;
  isMobileNavActive?: boolean;
  setIsMobileNavActive?: Dispatch<SetStateAction<boolean>>;
  currentTabValue: number;
}

const NavbarTabs: React.FC<Props> = ({
  isMobile = false,
  isMobileNavActive,
  setIsMobileNavActive,
  currentTabValue,
}) => {
  return (
    <>
      {pages.map((page) => (
        <li
          className={isMobile ? "mobile" + (isMobileNavActive ? " enabled" : "") : ""}
          key={page.id}
          onClick={() => {
            if (isMobile) {
              setIsMobileNavActive(false);
            }
          }}
        >
          <Link href={page.slug}>
            <a className={`tab tab-${page.id}`}>{page.name}</a>
          </Link>
        </li>
      ))}

      <style jsx>{`
        li:not(.mobile) {
          margin-right: 30px;
          height: 100%;
          display: flex;
          align-items: center;
        }

        li a {
          font-weight: 500;
          color: #fff;
          font-size: 1.2rem;
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

        li.mobile {
          opacity: 0;
          padding: 20px 0;
          transition: all var(--hamburgerTransitionTime);
        }

        li.mobile:nth-child(odd) {
          transform: translate(-100vw, 0);
        }

        li.mobile:nth-child(even) {
          transform: translate(100vw, 0);
        }

        li.mobile.enabled {
          transform: translate(0, 0);
          opacity: 100%;
        }

        li.mobile a {
          font-size: 23px;
        }
      `}</style>
    </>
  );
};

export default NavbarTabs;
