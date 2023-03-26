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
  
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${(props) => props.dir};
  align-items: ${(props) => props.align};
  justify-content: ${(props) => props.justify};
`;

export const Container = styled.div`
  width: 80%;
  margin-top: 2rem;
`;
export const SubContainer = styled.div`
  padding: 2rem 1rem;
  padding-bottom: 1em;
  margin-bottom: 2rem;
  border-radius: 10px;
  background-color: #0550a0;
  color: #fff;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;
export const SubContainerTitle = styled.div`
  svg {
    font-size: 1.5em;
    margin-right: 0.2em;
  }
  h3 {
    margin: 0;
    font-size: 1em;
  }
`;
export const ContentContainer = styled.div`
  margin-top: 0.5em;
  background-color: #fff;
  color: #000;
  border-radius: 10px;
  padding: 1em;
`
