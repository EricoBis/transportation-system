import { useState, useContext, React } from "react";
import { DataContext } from "../../contexts/DataContext";

import { StyledContainer } from "./style";

function CitiesRegister({ products }) {
 
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");

  const { cities } = useContext(DataContext);

  const handleSelectOrigin = (e) => {
    setOrigin(e.target.value);
  };
  const handleSelectDest = (e) => {
    setDestination(e.target.value);
  };

  return (
    <form>
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
          <div>{}</div>
        </div>
       
      </StyledContainer>
    </form>
  );
}

export default CitiesRegister;
