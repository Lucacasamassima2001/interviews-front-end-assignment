import { Interface } from "readline";
import styled from "styled-components";

interface ModalBackDropProps {
  isOpen: boolean;
}
export const ModalBackDrop = styled.div<ModalBackDropProps>`
  width: 100%;
  z-index: 10;
`;
