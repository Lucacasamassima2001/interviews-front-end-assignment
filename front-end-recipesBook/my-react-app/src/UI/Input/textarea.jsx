import styled from "styled-components";

const TextArea = styled.textarea`
  width: ${(props) => props.width || "100px"};
  height: ${(props) => props.height || "30px"};
  border-radius: ${(props) => props.radius || "10px"};
  background-color: ${(props) => props.backgroundColor || "lightgrey"};
  color: ${(props) => props.color || "black"};
  font-size: ${(props) => props.fontSize || "15px"};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${(props) => props.border || "none"};
  padding: ${(props) => props.padding || "5"};
`;

export default TextArea;
