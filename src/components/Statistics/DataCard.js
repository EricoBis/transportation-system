import { useState, React } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { CardContainer } from "./style";
import { Flex } from "../../styles";
import { ContainerInfo } from "../TransportRegister/style";
import { Size } from "../../contexts/DataContext";

function DataCard({ transport }) {
  const [fullContent, setFullContent] = useState(false);

  const showContent = () => {
    if (fullContent) return;
    setFullContent(!fullContent);
  };

  return (
    <CardContainer isFull={fullContent} onClick={showContent}>
      <h2>
        Origem: {transport.origin} - Destino Final:{" "}
        {transport.destination[transport.destination.length - 1].city}
      </h2>
      {fullContent && (
        <>
          <h4>Custo Total - R${transport.total_cost}</h4>
          <p>Custo Médio por Km - R${transport.average_cost_km}</p>
          <ContainerInfo>
            <h4>Trechos:</h4>
            {transport.routes_distances.map((route, index) => {
              return (
                <p key={index}>
                  {route.origin} - {route.destination} | {route.distance}km | R$
                  {route.route_cost}
                </p>
              );
            })}
          </ContainerInfo>
          <ContainerInfo>
            <h4>Caminhões Deslocados:</h4>
            <p>Pequeno Porte: {transport.trucks_needded[Size.small]}</p>
            <p>Médio Porte: {transport.trucks_needded[Size.medium]}</p>
            <p>Grande Porte: {transport.trucks_needded[Size.large]}</p>
          </ContainerInfo>
          <ContainerInfo>
            <h4>Produtos:</h4>
            <p>Total de produtos transportados: {transport.total_products}</p>
          </ContainerInfo>
        </>
      )}
      <Flex dir="row" justify="center" align="center">
        <button onClick={() => setFullContent(!fullContent)}>
          {fullContent ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
        </button>
      </Flex>
    </CardContainer>
  );
}

export default DataCard;
