import styled from "styled-components";
export interface TitleProps {
  width?: string;
  color?: string;
  fontSize?: string;
  aligntext?: string;
  fontWeight?: string;
  fontStyle?: string;
  margin?: string;
  background?: string;
}
const Title = styled.h1<TitleProps>`
  width: ${(props) => props.width};
  color: ${(props) => props.color || "#74512D"};
  font-size: ${(props) => props.fontSize || "50px"};
  text-align: ${(props) => (props.aligntext ? props.aligntext : "left")};
  font-weight: ${(props) => props.fontWeight || "normal"};
  font-style: ${(props) => props.fontStyle || "normal"};
  margin: ${(props) => props.margin || "none"};
  background-color: ${(props) => props.background || "none"};
`;

export default Title;
