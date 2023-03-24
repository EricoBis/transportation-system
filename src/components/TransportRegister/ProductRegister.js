import React from "react";
import { useState } from "react";

import { MdAdd } from "react-icons/md";

const initial_value = {
  name: "",
  weight: 0,
  quantity: 0,
};

function ProductRegister({products, setProducts}) {
  const [input, setInput] = useState(initial_value);
  

  const getAux = () => {
    return {
      name: input.name,
      weight: input.weight,
      quantity: input.quantity,
    };
  };

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
  
  const handleForm = (e) => {
    e.preventDefault();
    if (!input) return;
    setProducts([input, ...products]);
    setInput(initial_value);
  };

  return (
    <form onSubmit={handleForm}>
      <h3>Cadastrar Produtos</h3>
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
        <button type="submit">
          <MdAdd />
        </button>
      </div>
      <div>
        {products.map((product, index) => {
          return <p key={index}>{product.name}</p>;
        })}
      </div>
    </form>
  );
}

export default ProductRegister;
