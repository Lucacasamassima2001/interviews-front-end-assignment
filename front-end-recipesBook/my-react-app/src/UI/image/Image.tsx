import styled from "styled-components";
export interface ImageProps {
  width?: string;
  height?: string;
  radius?: string;
  src?: string;
}
const Image = styled.img<ImageProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.radius || "none"};
  src: ${(props) => props.src};
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
