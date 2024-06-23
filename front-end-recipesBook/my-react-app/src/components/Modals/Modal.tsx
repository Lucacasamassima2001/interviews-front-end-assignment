import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { createPortal } from "react-dom";
import Wrapper from "../../UI/Wrapper/wrapper.tsx";
import Title from "../../UI/titles/title.tsx";
import Paragraph from "../../UI/paragraph/paragraph.tsx";
import Button from "../../UI/Button/button.tsx";
import Flex from "../../UI/Flex/Flex.tsx";
import { ModalBackDrop } from "./modalBackDrop.jsx";

interface ModalProps {
  isOpen: boolean;
  isSuccess: boolean;
}

const Modal = forwardRef<{ open: () => void }, ModalProps>(function Modal(
  { isOpen, isSuccess },
  ref
) {
  const dialog = useRef<HTMLDialogElement>(null);
  const navigate = useNavigate();

  useImperativeHandle(ref, () => ({
    open: () => {
      dialog.current?.showModal();
    },
  }));

  const closeModal = () => {
    dialog.current?.close();
    navigate("/Homepage");
  };

  return createPortal(
    <ModalBackDrop isOpen={isOpen} onClick={closeModal}>
      <dialog ref={dialog}>
        <Wrapper width="450px" height="200px" padding="20px">
          <Title fontSize="30px" margin="0 0 50px 0" aligntext="center">
            {isSuccess
              ? "Congratulations!"
              : "It wasnt't possible to create recipe!"}
          </Title>
          <Paragraph fontSize="20px" margin="0 0 50px 0" aligntext="center">
            Your recipe has been created successfully!
          </Paragraph>
        </Wrapper>
        <Flex justify="center">
          <Button onClick={closeModal}>Close</Button>
        </Flex>
      </dialog>
    </ModalBackDrop>,
    document.body
  );
});

export default Modal;
