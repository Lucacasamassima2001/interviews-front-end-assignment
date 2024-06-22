import styled from "styled-components";

const Wrapper = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.background || "white"};
  padding: ${(props) => props.padding || "0px"};
  background-size: cover;
  margin: ${(props) => props.margin || "none"};
  background-repeat: no-repeat;
  background-image: ${(props) => props.backgroundImage || "none"};
  border-radius: ${(props) => props.borderRadius || "0"};
`;

export default Wrapper;
