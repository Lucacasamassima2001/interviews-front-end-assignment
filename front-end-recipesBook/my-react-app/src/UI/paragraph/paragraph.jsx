import styled from "styled-components";

const Paragraph = styled.p`
  color: ${(props) => props.color || "black"};
  font-size: ${(props) => props.fontSize || "20px"};
  margin: ${(props) => props.margin || "5px"};
  width: ${(props) => props.width || "100%"};
  font-weight: ${(props) => props.fontWeight || "normal"};
  font-style: ${(props) => props.fontStyle || "normal"};
`;

export default Paragraph;
