import React from "react";
import { useState } from "react";

import { MdAdd } from "react-icons/md";
import {
  Flex,
  SubContainer,
  SubContainerTitle,
  ContentContainer,
} from "../../styles";
import {
  StyledInput,
  StyledLabel,
  FlexInput,
  StyledBtn,
  ProductList,
} from "./style";
import { TbPackage, TbPackages } from "react-icons/tb";

const initial_value = {
  name: "",
  weight: 0,
};

function ProductRegister({ products, setProducts }) {
  const [input, setInput] = useState(initial_value);

  const getAux = () => {
    return {
      name: input.name,
      weight: input.weight,
    };
  };

  const handleProduct = (e) => {
    let aux = getAux();
    aux.name = e.target.value;
    setInput(aux);
  };
  const handleWeight = (e) => {
    if (isNaN(e.target.value)) return;
    let aux = getAux();
    aux.weight = e.target.value;
    setInput(aux);
  };

  const handleForm = (e) => {
    e.preventDefault();
    if (products.find((product) => product.name == input.name)) return;
    if (!input.name || input.weight <= 0) return;
    setProducts([input, ...products]);
    setInput(initial_value);
  };

  return (
    <SubContainer>
      <form onSubmit={handleForm}>
        <SubContainerTitle>
          <Flex dir="row" align="center">
            <TbPackage />
            <h3>Cadastrar Produtos</h3>
          </Flex>
        </SubContainerTitle>
        <ContentContainer>
          <Flex dir="row" justify="start">
            <FlexInput>
              <StyledLabel>Nome do Produto</StyledLabel>
              <StyledInput
                type="text"
                value={input.name}
                onChange={handleProduct}
                placeholder={"Digite o nome do produto"}
              />
            </FlexInput>
            <FlexInput>
              <StyledLabel>Peso por unidade</StyledLabel>
              <div>
                <StyledInput
                  type="text"
                  value={input.weight}
                  onChange={handleWeight}
                  placeholder={"Digite o peso"}
                />
                <span>kg</span>
              </div>
            </FlexInput>
            <StyledBtn type="submit">
              <MdAdd />
            </StyledBtn>
          </Flex>
          <ProductList>
            {products.length > 0 && <h5>Lista de Produtos:</h5>}
            {products.map((product, index) => {
              return (
                <p key={index}>
                  {product.name} - {product.weight}kg
                </p>
              );
            })}
          </ProductList>
        </ContentContainer>
      </form>
    </SubContainer>
  );
}

export default ProductRegister;
