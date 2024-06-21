import styled from "styled-components";

const List = styled.ul`
  list-style: ${(props) => props.liststyle || "none"};
  display: flex;
  flex-wrap: ${(props) => props.wrap || "nowrap"};
  flex-direction: ${(props) => props.direction || "column"};
  gap: ${(props) => props.gap || "10px"};
  width: ${(props) => props.width || "100%"};
`;

export default List;
