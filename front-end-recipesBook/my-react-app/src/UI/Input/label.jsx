import styled from "styled-components";

const Label = styled.label`
  color: ${(props) => props.color || "#74512D"};
  font-size: ${(props) => props.fontSize || "15px"};
`;

export default Label;
