import React from "react";

interface Props {
  member: IMember;
}

const Member: React.FC<Props> = ({ member }) => {
  return (
    <>
      <div className="member" id="member-${member.id}" key={member.id}>
        <div className="member-ratio">
          <svg viewBox="0 0 1 1" />
          <div className="member-image">
            <img
              src={`/members/member_${member.id}.png`}
              alt={member.name}
              style={{ objectPosition: member.imageOffsetHome ? member.imageOffsetHome : "initial" }}
            />
            <div className="member-overlay">
              <p className="view-profile">View Profile</p>
            </div>
          </div>
        </div>
        <h1 className="member-name">{member.name}</h1>
        <p className="member-position">{member.role}</p>
      </div>

      <style jsx>{`
        .member {
          cursor: pointer;
          width: 100%;
          text-align: center;
        }

        .member-ratio {
          display: grid;
          margin-bottom: 20px;
        }

        .member-ratio > * {
          grid-area: 1 / 1;
        }

        .member-image {
          position: relative;
          width: 100%;
        }

        .member img {
          object-fit: cover;
          border-radius: 50%;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .member-overlay {
          border-radius: 50%;
          position: absolute;
          top: 0;
          left: 0;
          background: rgba(0, 0, 0, 0.6);
          width: 100%;
          height: 100%;
          opacity: 0;
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: opacity 0.2s;
        }

        .member-overlay:hover {
          opacity: 100%;
        }

        .member-overlay:hover .view-profile {
          transform: translateY(0);
        }

        .view-profile {
          color: #fff;
          font-family: Archivo, serif;
          font-weight: 900;
          text-transform: uppercase;
          transform: translateY(20px);
          transition: transform 0.2s;
        }

        .member-name {
          margin-bottom: 10px;
        }

        .member-position {
          color: var(--secondaryTextColor);
        }

        @media screen and (max-width: 1200px) {
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

export default Member;
