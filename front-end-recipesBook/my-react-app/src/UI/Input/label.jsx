import styled from "styled-components";

const Label = styled.label`
  color: ${(props) => props.color || "#74512D"};
  font-size: ${(props) => props.fontSize || "15px"};
  text-align: ${(props) => props.align || "left"};
  font-weight: ${(props) => props.fontWeight || "normal"};
`;

export default Label;
