import styled from "styled-components";

export const CardContainer = styled.div`
  width: 100%;
  padding: 0.6rem;
  margin-bottom: 1rem;
  border-radius: 5px;
  border: 1px solid #fff;
  box-sizing: border-box;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  background: #fff;
  color: black;
  transition: 0.4s;
  cursor: ${(props) => (props.isFull ? "default" : "pointer")};
  &:hover {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    transform: translate(0px, -2px);
    border: 1px solid #6a5acd;
  }
  h2 {
    font-size: 18px;
  }
  button {
    width: 100%;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    ${(props) =>
      props.isFull
        ? "padding: 8px; background: #e4e4e4; color: #000; margin-top: 16px;"
        : "background: transparent;"}
    ${(props) => props.isFull && "&:hover{ background: #6a5acd; color: #fff;}"}
  }
`;