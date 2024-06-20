import styled from "styled-components";

const Wrapper = styled.div`
  height: ${(props) => props.height || "100%"};
  background-color: ${(props) => props.background || "white"};
  padding: ${(props) => props.padding || "20px"};
`;

export default Wrapper;
