import styled from "styled-components";
export interface ListItemProps {
  color?: string;
  fontSize?: string;
  width?: string;
}
const ListItem = styled.li<ListItemProps>`
  color: ${(props) => props.color || "black"};
  font-size: ${(props) => props.fontSize || "20px"};
  width: ${(props) => props.width || "100%"};
`;

export default ListItem;
