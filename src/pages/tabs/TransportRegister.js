import { useState, React } from "react";
import CitiesRegister from "../../components/TransportRegister/CitiesRegister";
import ProductRegister from "../../components/TransportRegister/ProductRegister";

function TransportRegister() {
  const [products, setProducts] = useState([]);
  const [data, setData] = useState({});
  return (
    <div>
      <ProductRegister products={products} setProducts={setProducts} />
      <CitiesRegister products={products} />
    </div>
  );
}

export default TransportRegister;
/*
data=
{
  origin: "";
  products: [];
  destination: [
    { city: "" 
      unload_products: [
        {id:
         quantity:
        }
      ]
    },
    {}
  ];
}
*/