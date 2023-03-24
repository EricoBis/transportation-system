import { useState, useContext, React } from "react";
import { DataContext } from "../../contexts/DataContext";

function CitiesRegister({products}) {
  //const [data, setData] = useState({});
  const [origin, setOrigin] = useState("");
  const { cities } = useContext(DataContext);

  const handleSelectOrigin = (e) => {
    setOrigin(e.target.value);
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
      <div>
      <h4>Cidades de Destino</h4>
      
      //TODO
      <select>
          <option value="">Selecione</option>
          {cities.map((city, index) => {
            return (
              <option value={city} key={index}>
                {city}
              </option>
            );
          })}
        </select>
        //TODO
        
      </div>
    </form>
  );
}

export default CitiesRegister;
