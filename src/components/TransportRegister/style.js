import styled from "styled-components";

export const FlexInput = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-right: 2em;

  span {
    position: absolute;
    right: 15px;
    bottom: 8px;
  }
`;

export const StyledInput = styled.input`
  width: 250px;
  border: none;
  border-bottom: 2px solid #ccc;
  font-size: 1em;
  padding: 5px;
  padding-left: 0;
  outline: none;

  &:focus {
    border-bottom-color: #6a5acd;
  }
`;

export const StyledLabel = styled.label`
  font-size: 0.9rem;
  margin-bottom: 5px;
`;

export const StyledBtn = styled.button`
  

  border-radius: 5px;
  border: 2px solid #6a5acd;
  cursor: pointer;
  background-color: #6a5acd;
  color: #fff;
  font-size: large;

  &:hover {
    background-color: #fff;
    color: #6a5acd;
    transition: 0.4s;
  }
`;
export const ProductList = styled.div`
  p {
    margin-top: 0;
  }
`;

export const ContainerSelect = styled.div`
  position: relative;
  display: inline-block;
`;

export const StyledSelect = styled.select`
  min-width: 180px;
  border: 2px solid #ccc;
  border-radius: 10px;
  background: transparent;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  color: #333;
  cursor: pointer;

  option {
    font-size: 1rem;
    color: #333;
  }
`;

export const ContainerAddDest = styled.div`
  background-color: #EDEDF1;
  color: #2c2c2d;
  border-radius: 10px;
  margin-top: 1rem;
  padding: 1rem;
  padding-top: 0.1rem;
`
