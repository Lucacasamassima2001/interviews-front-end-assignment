import styled from "styled-components";
export interface ListItemProps {
  color?: string;
  fontSize?: string;
}
const ListItem = styled.li<ListItemProps>`
  color: ${(props) => props.color || "black"};
  font-size: ${(props) => props.fontSize || "20px"};
`;

export default ListItem;
