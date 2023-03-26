import { useState, React } from "react";
import CitiesRegister from "../../components/TransportRegister/CitiesRegister";
import ProductRegister from "../../components/TransportRegister/ProductRegister";

function TransportRegister() {
  const [products, setProducts] = useState([]);

  return (
    <div>
      <ProductRegister products={products} setProducts={setProducts} />
      <CitiesRegister products={products} />
    </div>
  );
}

export default TransportRegister;

