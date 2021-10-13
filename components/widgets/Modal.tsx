import React, { Dispatch, SetStateAction } from "react";
import ReactModal from "react-modal";

interface Props {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  width?: string;
  height?: string;
  padding?: string;
  closeTimeoutMS?: number;
}

const Modal: React.FC<Props> = ({
  children,
  isModalOpen,
  setIsModalOpen,
  width = "60%",
  height = "66%",
  padding = "0",
  closeTimeoutMS = 400,
}) => {
  return (
    <>
      <ReactModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        closeTimeoutMS={closeTimeoutMS}
        style={{
          content: {
            transform: "translate(-50%, -50%)",
            width: width,
            height: height,
            zIndex: 100000000000,
            position: "absolute",
            top: "50%",
            left: "50%",
            background: "var(--modalColor)",
            border: "none",
            cursor: "initial",
            padding: padding,
          },
          overlay: {
            background: "rgba(0, 0, 0, 0.4)",
            cursor: "pointer",
          },
        }}
      >
        {children}
      </ReactModal>
    </>
  );
};

export default Modal;
