import styled from "styled-components";

const Input = styled.input`
  width: ${(props) => props.width || "100px"};
  height: ${(props) => props.height || "30px"};
  border-radius: ${(props) => props.borderRadius || "10px"};
  background-color: ${(props) => props.backgroundColor || "#74512D"};
  color: ${(props) => props.color || "white"};
  font-size: ${(props) => props.fontSize || "15px"};
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${(props) => props.border || "none"};
  padding: ${(props) => props.padding || "5"};
  &::placeholder {
    color: lightgrey;
  }
`;

export default Input;
