import React, { useState } from "react";

import sdgs from "../../../data/sdgs";

interface Props {
  sdgNumber: number;
}

const Sdg: React.FC<Props> = ({ sdgNumber }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const sdg = sdgs.find((s) => s.number === sdgNumber);

  return (
    <>
      <div className={`sdg-card sdg-card-${sdg.number}`} onClick={() => setIsOpen((prev) => !prev)}>
        <img src={`/sdgs/sdg${sdg.number}.png`} alt={`SDG ${sdg.number}`} />
        <div className="sdg-card-info">
          <p>{sdg.description}</p>
        </div>
      </div>

      <style jsx>{`
        .sdg-card {
          width: 100%;
          height: 300px;
          position: relative;
          cursor: pointer;
          overflow: hidden;
        }

        .sdg-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: all 0.1s;
        }

        .sdg-card img:hover {
          transform: scale(1.05);
        }

        .sdg-card-info {
          opacity: ${isOpen ? "100%" : "0"};
          position: absolute;
          inset: 0;
          transition: all 0.2s;
          padding: 20px;
          text-align: justify;
          overflow-y: scroll;
          background: rgba(0, 0, 0, 0.6);
          z-index: ${isOpen ? "2" : "-1"};
        }

        .sdg-checkbox {
          display: none;
        }
      `}</style>
    </>
  );
};

export default Sdg;
