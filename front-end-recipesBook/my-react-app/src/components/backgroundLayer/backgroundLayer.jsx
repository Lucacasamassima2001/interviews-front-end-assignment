import styled from "styled-components";

const BackgroundLayer = styled.div`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height};
  position: ${(props) => props.position};
  top: 0;
  background-color: ${(props) => props.background || "rgba(0, 0, 0, 0.5)"};
  z-index: ${(props) => props.zIndex || "9"};
  border-radius: ${(props) => props.borderRadius || "none"};
`;

export default BackgroundLayer;