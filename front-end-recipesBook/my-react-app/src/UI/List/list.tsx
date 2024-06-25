import styled from "styled-components";
export interface ListProps {
  liststyle?: string;
  wrap?: string;
  direction?: string;
  gap?: string;
  width?: string;
  align?: string;
}
const List = styled.ul<ListProps>`
  list-style: ${(props) => props.liststyle || "none"};
  display: flex;
  align-items: ${(props) => props.align || "none"};
  flex-wrap: ${(props) => props.wrap || "nowrap"};
  flex-direction: ${(props) => props.direction || "column"};
  gap: ${(props) => props.gap || "10px"};
  width: ${(props) => props.width || "100%"};
`;

export default List;
