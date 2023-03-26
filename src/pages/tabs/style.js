import styled from "styled-components";

export const CardList = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin: 50px 0;
`;

export const Card = styled.div`
  width: 20%;
  min-width: 300px;
  margin: 15px;
  box-sizing: border-box;
  text-align: center;
  border-radius: 20px;
  cursor: pointer;

  svg {
    font-size: 8em;
    padding-top: 0.2em;
    padding-bottom: 0.2em;
  }

  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  transition: 0.4s;
  background-color: #6a5acd;
  color: #fff;


  &:hover {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    transform: translate(0px, -8px);
  }

  @media (max-width: 750px) {
    width: 100%;
  }

  @media (max-width: 1000px) {
    width: 45%;
  }
`;

export const CardTitle = styled.p`
  font-size: 2em;
`;

export const BottomCard = styled.div`
  width: 100%;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  background-color: #fff;
  color: black;
  text-align: center;
  border-radius: 20px;
`;
