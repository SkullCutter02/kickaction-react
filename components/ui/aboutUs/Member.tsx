import React, { useState } from "react";
import Modal from "react-modal";

interface Props {
  member: IMember;
}

const Member: React.FC<Props> = ({ member }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        closeTimeoutMS={400}
        style={{
          content: {
            transform: "translate(-50%, -50%)",
            width: "60%",
            height: "66%",
            zIndex: 100000000000,
            position: "absolute",
            top: "50%",
            left: "50%",
            background: "var(--modalColor)",
            border: "none",
            cursor: "initial",
          },
          overlay: {
            background: "rgba(0, 0, 0, 0.4)",
            cursor: "pointer",
          },
        }}
      >
        <div className={`member-modal-content`}>
          <img className="member-modal-content-img" src={`/members/member_${member.id}.png`} alt="hero" />
          <div className="close-btn" onClick={() => setIsModalOpen(false)}>
            +
          </div>
          <div className="member-modal-content-text">
            <h1 className="member-modal-name">{member.name}</h1>
            <p className="member-modal-role">{member.role}</p>
            <span className="line" />
            <p className="member-modal-description">{member.description}</p>
          </div>
        </div>
      </Modal>

      <div className="member" id={`member-${member.id}`} key={member.id} onClick={() => setIsModalOpen(true)}>
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

        /* modal */

        .member-modal-content {
          display: flex;
        }

        .member-modal-content * {
          color: #fff;
        }

        .member-modal-content-img {
          width: 40%;
          object-fit: cover;
        }

        .member-modal-content-text {
          width: 60%;
          padding: 40px;
          overflow-y: scroll;
          scrollbar-base-color: var(--modalColor);
          scrollbar-face-color: var(--modalColor);
        }

        .member-modal-name {
          margin-bottom: 4px;
          font-size: 2.7rem;
        }

        .member-modal-description {
          line-height: 1.7em;
        }

        .member-modal-content-text .line {
          display: block;
          margin: 15px 0;
          background: var(--primaryColor);
          width: 100%;
          min-width: 150px;
          height: 2px;
        }

        .close-btn {
          position: absolute;
          top: 0;
          right: 20px;
          color: var(--primaryColor);
          font-size: 50px;
          transform: rotate(45deg);
          cursor: pointer;
        }

        @media screen and (max-width: 1050px) {
          .member-modal-name {
            font-size: 2.3rem;
          }

          .member-modal-description {
            font-size: 13px;
          }
        }

        @media screen and (max-width: 800px) {
          .member-modal-content {
            flex-direction: column;
            overflow-y: scroll;
          }

          .member-modal-content-img {
            width: 100%;
            max-height: 300px;
          }

          .member-modal-content-text {
            font-size: 14px;
            width: 100%;
            overflow: scroll;
          }
        }
      `}</style>
    </>
  );
};

export default Member;
