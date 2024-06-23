import styled from "styled-components";
export interface ParagraphProps {
  color?: string;
  fontSize?: string;
  aligntext?: string;
  fontWeight?: string;
  fontStyle?: string;
  width?: string;
  margin?: string;
  animation?: string;
}
const Paragraph = styled.p<ParagraphProps>`
  color: ${(props) => props.color || "black"};
  font-size: ${(props) => props.fontSize || "20px"};
  text-align: ${(props) => (props.aligntext ? props.aligntext : "left")};
  margin: ${(props) => props.margin || "5px"};
  width: ${(props) => props.width || "100%"};
  font-weight: ${(props) => props.fontWeight || "normal"};
  font-style: ${(props) => props.fontStyle || "normal"};
  animation: ${(props) =>
    props.animation === "not-found" ? "bounce 2s infinite" : "none"};
`;

export default Paragraph;
