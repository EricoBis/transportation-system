import { useState, React } from "react";
import CitiesRegister from "../../components/TransportRegister/CitiesRegister";
import ProductRegister from "../../components/TransportRegister/ProductRegister";
import { Container } from "../../styles";

function TransportRegister() {
  const [products, setProducts] = useState([]);

  return (
    <Container>
      <ProductRegister products={products} setProducts={setProducts} />
      <CitiesRegister products={products} />
    </Container>
  );
}

export default TransportRegister;

