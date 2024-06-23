import styled from "styled-components";
export interface ImageProps {
  width?: string;
  height?: string;
  radius?: string;
  src?: string;
  position?: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  opacity?: string;
  border?: string;
}
const Image = styled.img<ImageProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.radius || "none"};
  border: ${(props) => props.border || "none"};
  src: ${(props) => props.src};
  position: ${(props) => props.position || "none"};
  top: ${(props) => props.top || "none"};
  left: ${(props) => props.left || "none"};
  right: ${(props) => props.right || "none"};
  bottom: ${(props) => props.bottom || "none"};
  opacity: ${(props) => props.opacity || "none"};
  animation: fadeIn 0.8s;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export default Image;
