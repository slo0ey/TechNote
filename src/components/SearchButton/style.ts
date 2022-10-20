import styled from "@emotion/styled";
import { BiSearch } from "react-icons/bi";

const SearchButton = styled.button`
  width: 2rem;
  height: 2rem;
  position: relative;
  padding: auto;
  align-self: center;
  text-align: center;
  background-color: rgba(0, 0, 0, 0);
  border: 0px;
  cursor: pointer;
`;

const SearchIcon = styled(BiSearch)`
  position: absolute;
  left: 0.25rem;
  top: 0.25rem;
`;

export { SearchButton, SearchIcon };