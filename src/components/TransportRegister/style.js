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
  width: 2em;

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
