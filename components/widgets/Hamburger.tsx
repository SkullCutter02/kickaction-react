import React, { Dispatch, SetStateAction } from "react";

interface Props {
  isMobileNavActive: boolean;
  setIsMobileNavActive: Dispatch<SetStateAction<boolean>>;
}

const Hamburger: React.FC<Props> = ({
  isMobileNavActive,
  setIsMobileNavActive,
}) => {
  return (
    <>
      <button className="divided-hamburger" id="hamburger">
        <input
          type="checkbox"
          className="trigger"
          checked={isMobileNavActive}
          onClick={() => setIsMobileNavActive((prev) => !prev)}
        />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </button>

      <style jsx>{`
        .divided-hamburger {
          background-color: transparent;
          width: calc(25px * 1.2);
          height: 25px;
          position: relative;
          border: none;
          display: none;
          margin-right: 30px;
        }

        .divided-hamburger > .trigger:checked ~ span:nth-of-type(1) {
          left: calc(25px / 8);
          top: calc(25px / 6);
        }

        .divided-hamburger > .trigger:checked ~ span:nth-of-type(2) {
          left: calc(50% - (25px / 8));
          top: calc(25px / 6);
        }

        .divided-hamburger > .trigger:checked ~ span:nth-of-type(3) {
          left: -50%;
          opacity: 0;
        }

        .divided-hamburger > .trigger:checked ~ span:nth-of-type(4) {
          left: 100%;
          opacity: 0;
        }

        .divided-hamburger > .trigger:checked ~ span:nth-of-type(5) {
          left: calc(25px / 8);
          top: calc(25px / 2);
        }

        .divided-hamburger span:nth-of-type(even) {
          left: 50%;
          border-radius: 0 10px 10px 0;
        }

        .divided-hamburger > .trigger:checked ~ span:nth-of-type(6) {
          left: calc(50% - (25px / 8));
          top: calc(25px / 2);
        }

        .divided-hamburger span:nth-of-type(odd) {
          left: 0;
          border-radius: 10px 0 0 10px;
        }

        .divided-hamburger > span:nth-of-type(1),
        .divided-hamburger > span:nth-of-type(2) {
          top: 0;
        }

        .divided-hamburger > .trigger:checked ~ span:nth-of-type(2),
        .divided-hamburger > .trigger:checked ~ span:nth-of-type(5) {
          transform: rotate(-45deg);
        }

        .divided-hamburger > span:nth-of-type(5),
        .divided-hamburger > span:nth-of-type(6) {
          top: calc((25px / 3) * 2);
        }

        .divided-hamburger > span:nth-of-type(3),
        .divided-hamburger > span:nth-of-type(4) {
          top: calc(25px / 3);
        }

        .divided-hamburger > .trigger:checked ~ span:nth-of-type(1),
        .divided-hamburger > .trigger:checked ~ span:nth-of-type(6) {
          transform: rotate(45deg);
        }

        .divided-hamburger > span {
          background-color: #fff;
          display: block;
          position: absolute;
          height: 4px;
          width: 50%;
          border-radius: 10px;
          transition: 0.25s ease-in-out;
        }

        .divided-hamburger > .trigger {
          position: absolute;
          z-index: 3;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          cursor: pointer;
        }

        @media screen and (max-width: 950px) {
          .divided-hamburger {
            display: block;
          }
        }
      `}</style>
    </>
  );
};

export default Hamburger;
