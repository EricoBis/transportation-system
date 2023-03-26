import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #6a5acd;
  color: white;
  box-shadow: 0px 2px 10px 2px rgba(0, 0, 0, 0.342);

  svg {
    font-size: 36px;
    cursor: pointer;
  }

  nav {
    display: flex;
  }

  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    margin-right: 1rem;
  }

  @media (max-width: 600px) {
    nav {
      display: none;
    }
  }
`;