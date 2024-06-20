import styled from "styled-components";

const Wrapper = styled.div`
  height: ${(props) => props.height || "100%"};
  background-color: ${(props) => props.background || "white"};
  padding: ${(props) => props.padding || "0px"};
  background-size: cover;
  background-repeat: no-repeat;
  background-image: ${(props) => props.backgroundImage || "none"};
`;

export default Wrapper;
