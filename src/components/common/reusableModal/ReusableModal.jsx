import React, { useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

const ReusableModal = ({ children, open, setOpen }) => {
  const onCloseModal = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={onCloseModal}
        center
        classNames={{
          modal: "customModal",
        }}
      >
        {children}
      </Modal>
    </div>
  );
};

export default ReusableModal;
