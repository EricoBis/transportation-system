import styled from "styled-components";
import { Link } from "react-router-dom";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
  }
`;

export default GlobalStyle;


export const StyledLink = styled(Link)`
  width: fit-content;
  text-decoration: none;
  color: #fff;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export const Flex = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${(props) => props.dir};
  align-items: ${(props) => props.align};
  justify-content: ${(props) => props.justify};
`;

export const Container = styled.div`
  width: 80%;
  margin-top: 2rem;
  border: 1px solid black;
`