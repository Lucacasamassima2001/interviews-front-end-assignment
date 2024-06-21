import styled from "styled-components";

const Paragraph = styled.p`
  color: ${(props) => props.color || "black"};
  font-size: ${(props) => props.fontSize || "20px"};
  margin: ${(props) => props.margin || "5px"};
  width: ${(props) => props.width || "100%"};
  font-weight: ${(props) => props.fontWeight || "normal"};
  font-style: ${(props) => props.fontStyle || "normal"};
  // make a pop animation
  animation: ${(props) =>
    props.animation === "not-found" ? "fadeIn 1s infinite" : "none"};
  keyframes: {
    fadeIn {
      0% {
        opacity: 0;
      }
      50% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
  }
`;

export default Paragraph;
