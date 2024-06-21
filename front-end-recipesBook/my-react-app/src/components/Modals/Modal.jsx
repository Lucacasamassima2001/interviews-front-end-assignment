/* eslint-disable react/prop-types */
import { forwardRef, useImperativeHandle, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { createPortal } from "react-dom";
import Wrapper from "../../UI/Wrapper/wrapper";
import Title from "../../UI/titles/title";
import Paragraph from "../../UI/paragraph/paragraph";
import Button from "../../UI/Button/button";
import Flex from "../../UI/Flex/Flex";
import { ModalBackDrop } from "./modalBackDrop";
const Modal = forwardRef(function Modal({ isOpen, isSuccess }, ref) {
  const dialog = useRef();
  const navigate = useNavigate();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  const CloseModal = () => {
    dialog.current.close();
    navigate("/Homepage");
  };
  return createPortal(
    <ModalBackDrop isOpen={isOpen} onClick={CloseModal}>
      <dialog id="modal" className="modal" ref={dialog}>
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
          <Button onClick={CloseModal}>Close</Button>
        </Flex>
      </dialog>
    </ModalBackDrop>,
    document.getElementById("modal")
  );
});

export default Modal;
