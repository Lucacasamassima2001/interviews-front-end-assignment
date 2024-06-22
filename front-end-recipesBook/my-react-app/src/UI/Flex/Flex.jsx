import styled from "styled-components";

const Flex = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  min-height: ${(props) => props.minHeight};
  display: flex;
  flex-direction: ${(props) => props.direction};
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
  gap: ${(props) => props.gap || "none"};
  position: ${(props) => props.position || "none"};
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
