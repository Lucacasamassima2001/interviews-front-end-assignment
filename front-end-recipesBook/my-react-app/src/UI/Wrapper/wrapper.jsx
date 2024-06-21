import styled from "styled-components";

const Wrapper = styled.div`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "100%"};
  background-color: ${(props) => props.background || "white"};
  padding: ${(props) => props.padding || "0px"};
  background-size: cover;
  margin: ${(props) => props.margin || "none"};
  background-repeat: no-repeat;
  background-image: ${(props) => props.backgroundImage || "none"};
`;

export default Wrapper;
