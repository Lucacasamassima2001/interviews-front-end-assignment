import styled from "styled-components";
export interface FlexProps {
  width?: string;
  height?: string;
  minheight?: string;
  direction?: string;
  justify?: string;
  align?: string;
  gap?: string;
  position?: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  padding?: string;
  wrap?: string;
  border?: string;
  radius?: string;
  background?: string;
  margin?: string;
  animation?: string;
}
const Flex = styled.div<FlexProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  min-height: ${(props) => props.minheight};
  display: flex;
  flex-direction: ${(props) => props.direction};
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
  gap: ${(props) => props.gap || "none"};
  position: ${(props) => props.position || "none"};
  top: ${(props) => props.top || "none"};
  left: ${(props) => props.left || "none"};
  right: ${(props) => props.right || "none"};
  bottom: ${(props) => props.bottom || "none"};
  padding: ${(props) => props.padding};
  flex-wrap: ${(props) => props.wrap || "nowrap"};
  border: ${(props) => props.border || "none"};
  border-radius: ${(props) => props.radius || "none"};
  background-color: ${(props) => props.background || "none"};
  margin: ${(props) => props.margin || "none"};
  animation: ${(props) => props.animation || "fadeIn"} 0.8s;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes slideFromTop {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

export default Flex;
