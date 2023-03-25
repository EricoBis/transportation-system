import { useState, useContext, React } from "react";
import { DataContext } from "../../contexts/DataContext";

import { StyledContainer } from "./style";
import { MdAdd } from "react-icons/md";

function CitiesRegister({ products }) {
  const { distanceBetween } = useContext(DataContext);
  const [destinationList, setDestinationList] = useState([]);

  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");

  const [unloadProducts, setUnloadProducts] = useState([]);
  const [unloadQuantity, setUnloadQuantity] = useState(0);
  const [unloadName, setUnloadName] = useState("");

  const { cities } = useContext(DataContext);

  const handleSelectOrigin = (e) => {
    setOrigin(e.target.value);
  };
  const handleSelectDest = (e) => {
    setDestination(e.target.value);
  };
  const handleUnloadQuantity = (e) => {
    setUnloadQuantity(e.target.value);
  };
  const handleUnloadName = (e) => {
    setUnloadName(e.target.value);
  };

  const handleAddUnload = (e) => {
    if (!unloadQuantity || !unloadName) return;
    const unload = {
      name: unloadName,
      quantity: unloadQuantity,
    };
    setUnloadProducts([unload, ...unloadProducts]);
    setUnloadName("");
    setUnloadQuantity(0);
  };

  const handleAddDest = (e) => {
    if (!origin && !destination && !unloadProducts) return;

    const distance = distanceBetween(origin, destination);
    const result = {
      city: destination,
      distance_from_origin: distance,
      unload_products: unloadProducts,
    };
    setDestinationList(orderByDistance([result, ...destinationList]));
  };

  const handleForm = (e) => {
    //TODO
  }

  const orderByDistance = (destinationList) => {
    const ordered = destinationList.sort(function (city1, city2) {
      if (city1.distance_from_origin < city2.distance_from_origin) {
        return -1;
      }
      return true;
    });
    return ordered;
  };

  return (
    <form onSubmit={handleForm}>
      <h3>Envio</h3>
      <div>
        <h4>Cidade de Origem</h4>
        <select value={origin} onChange={handleSelectOrigin}>
          <option value="">Selecione</option>
          {cities.map((city, index) => {
            return (
              <option value={city} key={index}>
                {city}
              </option>
            );
          })}
        </select>
      </div>
      <StyledContainer>
        <h4>Cidades de Destino</h4>
        <select value={destination} onChange={handleSelectDest}>
          <option value="">Selecione</option>
          {cities
            .filter((city) => city !== origin)
            .map((city, index) => {
              return (
                <option value={city} key={index}>
                  {city}
                </option>
              );
            })}
        </select>
        <div>
          {destination !== "" ? (
            <h5>Descarregar em {destination}:</h5>
          ) : (
            <h5>Descarregar nessa cidade:</h5>
          )}
          <div>
            <select value={unloadName} onChange={handleUnloadName}>
              <option value="">Selecione</option>
              {products.map((product, index) => {
                return (
                  <option value={product.name} key={index}>
                    {product.name}
                  </option>
                );
              })}
            </select>
            <input
              type="number"
              value={unloadQuantity}
              onChange={handleUnloadQuantity}
              placeholder={"0"}
            />
            <button type="button" onClick={handleAddUnload}>
              <MdAdd />
            </button>
          </div>
        </div>
        <button type="button" onClick={handleAddDest}>
          ADICIONAR CIDADE DE DESTINO
        </button>
        {destinationList &&
          destinationList.map((dest, index) => {
            return (
              <p key={index}>
                {dest.city}-{dest.distance_from_origin}
              </p>
            );
          })}
      </StyledContainer>
    </form>
  );
}

export default CitiesRegister;
