import { useState, useEffect, useContext, React } from "react";
import CitiesRegister from "../../components/TransportRegister/CitiesRegister";
import ProductRegister from "../../components/TransportRegister/ProductRegister";
import { Container } from "../../styles";
import { DataContext } from "../../contexts/DataContext";

function TransportRegister() {
  const [products, setProducts] = useState([]);
  const [transport, setTransport] = useState({});

  const {registrationData, setRegistrationData} = useContext(DataContext);

  useEffect(() => {
    setRegistrationData(transport, ...registrationData);
  }, [transport, registrationData, setRegistrationData])

  return (
    <Container>
      <ProductRegister products={products} setProducts={setProducts} />
      <CitiesRegister
        products={products}
        transport={transport}
        setTransport={setTransport}
      />
    </Container>
  );
}

export default TransportRegister;
