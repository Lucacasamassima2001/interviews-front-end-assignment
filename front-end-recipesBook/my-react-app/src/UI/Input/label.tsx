import styled from "styled-components";
export interface LabelProps {
  color?: string;
  fontSize?: string;
  align?: string;
  fontWeight?: string;
}
const Label = styled.label<LabelProps>`
  color: ${(props) => props.color || "#74512D"};
  font-size: ${(props) => props.fontSize || "15px"};
  text-align: ${(props) => props.align || "left"};
  font-weight: ${(props) => props.fontWeight || "normal"};
`;

export default Label;
