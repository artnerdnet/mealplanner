import React, { ReactNode, useEffect, useState } from "react";
import Modal from "react-modal";
Modal.setAppElement("#__next");

const ModalComponent: React.FC<{
  children: ReactNode;
  isOpen: boolean;
}> = ({ children, isOpen }) => {
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    setIsOpen(isOpen);
  }, [isOpen]);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Modal"
    >
      <button onClick={closeModal}>close</button>
      {children}
    </Modal>
  );
};

export default ModalComponent;
