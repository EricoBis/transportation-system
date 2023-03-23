import React from "react";
import { useState } from "react";

function ProductRegister() {
  const [input, setInput] = useState({
    name: "",
    weight: null,
    quantity: 0,
  });

  const getAux = () => {
    return {
      name: input.name,
      weight: input.weight,
      quantity: input.quantity,
    };
  }

  const handleProduct = (e) => {
    let aux = getAux();
    aux.name = e.target.value;
    setInput(aux);
  };
  const handleWeight = (e) => {
    //TODO REGEX
    let aux = getAux();
    aux.weight = e.target.value;
    setInput(aux);
  };
  const handleQuantity = (e) => {
    //TODO REGEX
    let aux = getAux();
    aux.quantity = e.target.value;
    setInput(aux);
  };

  return (
    <>
      <h2>Cadastrar Produtos</h2>
      <div>
        <input
          type="text"
          value={input.name}
          onChange={handleProduct}
          placeholder={"Nome do Produto"}
        />
        <input
          type="number"
          value={input.weight}
          onChange={handleWeight}
          placeholder={"Peso p/unidade"}
        />

          <input
            type="number"
            value={input.quantity}
            onChange={handleQuantity}
            placeholder={"0"}
          />
        
      </div>
    </>
  );
}

export default ProductRegister;
