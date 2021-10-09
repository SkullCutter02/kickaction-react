import React from "react";

import Member from "./Member";
import members from "../../../data/members";

const Members: React.FC = () => {
  return (
    <>
      <div className="members">
        {members.map((member) => (
          <Member member={member} key={member.id} />
        ))}
      </div>

      <style jsx>{`
        .members {
          margin: 100px auto;
          width: 75%;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-row-gap: 70px;
          grid-column-gap: 90px;
        }

        @media screen and (max-width: 1200px) {
          .members {
            grid-template-columns: repeat(3, 1fr);
            grid-row-gap: 40px;
            grid-column-gap: 60px;
          }

          .member-name {
            font-size: 1.5rem;
          }

          .member-position {
            font-size: 1rem;
          }

          .view-profile {
            font-size: 13px;
          }
        }

        @media screen and (max-width: 900px) {
          .member-name {
            font-size: 1.3rem;
          }

          .member-position {
            font-size: 0.9rem;
          }
        }

        @media screen and (max-width: 750px) {
          .members {
            margin: 60px auto;
            grid-template-columns: repeat(2, 1fr);
            grid-column-gap: 40px;
          }

          .member-name {
            font-size: 1.15rem;
          }

          .member-position {
            font-size: 0.8rem;
          }
        }
      `}</style>
    </>
  );
};

export default Members;
