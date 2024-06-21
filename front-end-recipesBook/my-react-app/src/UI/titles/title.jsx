import styled from "styled-components";

const Title = styled.h1`
  width: ${(props) => props.width};
  color: ${(props) => props.color || "#74512D"};
  font-size: ${(props) => props.fontSize || "50px"};
  text-align: ${(props) => (props.aligntext ? props.aligntext : "left")};
  font-weight: ${(props) => props.fontWeight || "normal"};
  font-style: ${(props) => props.fontStyle || "normal"};
  margin: ${(props) => props.margin || "none"};
`;

export default Title;
