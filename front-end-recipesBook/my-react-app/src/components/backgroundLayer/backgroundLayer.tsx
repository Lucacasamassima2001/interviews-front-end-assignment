import styled from "styled-components";

export interface BackgroundLayerProps {
  width?: string;
  height?: string;
  position?: string;
  background?: string;
  zIndex?: string;
  radius?: string;
}

const BackgroundLayer = styled.div<BackgroundLayerProps>`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height};
  position: ${(props) => props.position};
  top: 0;
  background-color: ${(props) => props.background || "rgba(0, 0, 0, 0.5)"};
  z-index: ${(props) => props.zIndex || "9"};
  border-radius: ${(props) => props.radius || "none"};
`;

export default BackgroundLayer;
