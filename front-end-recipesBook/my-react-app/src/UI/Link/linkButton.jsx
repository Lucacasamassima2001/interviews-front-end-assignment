import styled from "styled-components";
import { Link } from "react-router-dom";

const LinkButton = styled(Link)`
  width: ${(props) => props.width || "100px"};
  height: ${(props) => props.height || "40px"};
  border-radius: ${(props) => props.borderRadius || "10px"};
  background-color: ${(props) => props.bgColor || "transparent"};
  color: ${(props) => props.color || "black"};
  font-size: ${(props) => props.textsize || "20px"};
  margin: ${(props) => props.margin || "0"};
  cursor: pointer;
  text-decoration: none;
  border: ${(props) => props.border || "none"};
  padding: ${(props) => props.padding || "0"};
  position: ${(props) => props.position || "none"};
  top: ${(props) => props.top || "none"};
  left: ${(props) => props.left || "none"};
  right: ${(props) => props.right || "none"};
  bottom: ${(props) => props.bottom || "none"};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #74512d;
    color: white;
  }
`;

export default LinkButton;
