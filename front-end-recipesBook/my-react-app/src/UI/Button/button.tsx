import styled from "styled-components";

export interface ButtonProps {
  width?: string;
  height?: string;
  borderRadius?: string;
  bgColor?: string;
  color?: string;
  fontSize?: string;
  selected?: boolean;
  border?: string;
  padding?: string;
  hoverColor?: string;
  hoverTextColor?: string;
  disabled?: boolean;
  hoverTextDecoration?: string;
  activeColor?: string;
  activeTextColor?: string;
}

const Button = styled.button<ButtonProps>`
  width: ${(props) => props.width || "100px"};
  height: ${(props) => props.height || "40px"};
  border-radius: ${(props) => props.borderRadius || "10px"};
  background-color: ${(props) =>
    props.bgColor || props.selected ? "#74512d" : "transparent"};
  color: ${(props) => (props.color || props.selected ? "white" : "black")};
  font-size: ${(props) => props.fontSize || "20px"};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${(props) => props.border || "none"};
  padding: ${(props) => props.padding || "0"};
  disabled: (props) => props.disabled || false;
  &:hover {
    background-color: ${(props) => props.hoverColor || "none"};
    color: ${(props) => props.hoverTextColor || "none"};
    text-decoration: ${(props) => props.hoverTextDecoration || "none"};
  }
  &:active {
    background-color: ${(props) => props.activeColor || "none"};
    color: ${(props) => props.activeTextColor || "none"};
  }
`;

export default Button;
