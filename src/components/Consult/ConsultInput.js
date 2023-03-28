import { useState, useEffect, useContext, React } from "react";
import { Flex } from "../../styles";
import {
  StyledLabel,
  ContainerSelect,
  StyledSelect,
  FlexInput,
  ContainerInfo,
} from "../TransportRegister/style";
import { StyledIcon } from "./style";
import { TbArrowsDiff } from "react-icons/tb";
import { FaTruck } from "react-icons/fa";
import { DataContext, truckTypes } from "../../contexts/DataContext";

const initial_result = {
  distance: 0,
  cost: 0,
};

function ConsultInput() {
  const { cities, distanceBetween, transpCost } = useContext(DataContext);
  const trucks = Object.values(truckTypes);

  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [truckType, setTruckType] = useState(3);

  const [result, setResult] = useState(initial_result);

  useEffect(() => {
    let distance = distanceBetween(origin, destination);
    let cost = transpCost(distance, truckType);
    setResult({ distance, cost });
  }, [origin, destination, truckType, distanceBetween, transpCost]);

  return (
    <>
      <Flex dir="row" align="center">
        <FlexInput>
          <StyledLabel>Cidade de Origem</StyledLabel>
          <ContainerSelect>
            <StyledSelect
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
            >
              <option value="">Selecione</option>
              {cities.map((city, index) => {
                return (
                  <option value={city} key={index}>
                    {city}
                  </option>
                );
              })}
            </StyledSelect>
          </ContainerSelect>
        </FlexInput>
        <StyledIcon>
          <TbArrowsDiff />
        </StyledIcon>
        <FlexInput>
          <StyledLabel>Cidade de Destino</StyledLabel>
          <ContainerSelect>
            <StyledSelect
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            >
              <option value="">Selecione</option>
              {cities.map((city, index) => {
                if (city === origin) return null;
                return (
                  <option value={city} key={index}>
                    {city}
                  </option>
                );
              })}
            </StyledSelect>
          </ContainerSelect>
        </FlexInput>
        <>
          <StyledIcon>
            <FaTruck />
          </StyledIcon>
          <FlexInput>
            <StyledLabel>Modalidade</StyledLabel>
            <ContainerSelect>
              <StyledSelect
                value={truckType}
                onChange={(e) => setTruckType(e.target.value)}
              >
                <option value={0}>Selecione</option>
                {trucks.map((truck, index) => {
                  return (
                    <option value={truck.id} key={index}>
                      {truck.type}
                    </option>
                  );
                })}
              </StyledSelect>
            </ContainerSelect>
          </FlexInput>
        </>
      </Flex>
      <hr />
      {origin && destination && truckType && (
        <ContainerInfo>
          <h4>
            {origin} - {destination}
          </h4>
          <p>Modalidade de Transporte: {truckTypes[truckType].type}</p>
          <p>Custo por Km: {truckTypes[truckType].price}</p>
          <p>Distância: {result.distance}km</p>
          <p>Custo Total: R${result.cost}</p>
        </ContainerInfo>
      )}
    </>
  );
}

export default ConsultInput;
