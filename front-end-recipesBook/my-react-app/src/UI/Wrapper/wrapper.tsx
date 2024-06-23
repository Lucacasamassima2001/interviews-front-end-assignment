import styled from "styled-components";
export interface WrapperProps {
  width?: string;
  height?: string;
  background?: string;
  padding?: string;
  margin?: string;
  backgroundImage?: string;
  radius?: string;
}
const Wrapper = styled.div<WrapperProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.background || "white"};
  padding: ${(props) => props.padding || "0px"};
  background-size: cover;
  margin: ${(props) => props.margin || "none"};
  background-repeat: no-repeat;
  background-image: ${(props) => props.backgroundImage || "none"};
  border-radius: ${(props) => props.radius || "0"};
`;

export default Wrapper;
