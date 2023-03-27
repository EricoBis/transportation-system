import { useState, useContext, React } from "react";
import { DataContext } from "../../contexts/DataContext";

import { MdAdd } from "react-icons/md";
import { TbLocation, TbPackageExport } from "react-icons/tb";
import { SlLocationPin } from "react-icons/sl";
import {
  Flex,
  SubContainer,
  SubContainerTitle,
  ContentContainer,
} from "../../styles";
import {
  ContainerSelect,
  StyledSelect,
  StyledInput,
  StyledLabel,
  FlexInput,
  StyledBtn,
  ContainerAddDest,
} from "./style";

function CitiesRegister({ products }) {
  const { distanceBetween, handleTransport, print } = useContext(DataContext);
  const [destinationList, setDestinationList] = useState([]);

  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");

  const [unloadProducts, setUnloadProducts] = useState([]);
  const [unloadQuantity, setUnloadQuantity] = useState(0);
  const [unloadName, setUnloadName] = useState("");

  const { cities } = useContext(DataContext);

  const handleUnloadQuantity = (e) => {
    if (isNaN(e.target.value)) return;
    if (e.target.value < 0) return;
    setUnloadQuantity(e.target.value);
  };
  const handleUnloadName = (e) => {
    setUnloadName(e.target.value);
  };

  const handleAddUnload = (e) => {
    console.log(unloadProducts);
    if (!unloadQuantity || !unloadName) return;

    const { weight } = products.find((prod) => prod.name === unloadName);
    const unload = {
      name: unloadName,
      quantity: unloadQuantity,
      weight,
    };

    setUnloadProducts([unload, ...unloadProducts]);
    setUnloadName("");
    setUnloadQuantity(0);
  };

  const handleAddDest = (e) => {
    if (!origin || !destination || unloadProducts.length == 0) return;

    const distance = distanceBetween(origin, destination);
    const result = {
      city: destination,
      distance_from_origin: distance,
      unload_products: unloadProducts,
    };

    setDestinationList(orderByDistance([result, ...destinationList]));
    setUnloadProducts([]);
    setDestination("");
  };

  const handleForm = (e) => {
    e.preventDefault();
    handleTransport({
      origin: origin,
      destination: destinationList,
    });
  };

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
    <SubContainer>
      <form onSubmit={handleForm}>
        <SubContainerTitle>
          <Flex dir="row" align="center">
            <TbLocation />
            <h3>Envio</h3>
          </Flex>
        </SubContainerTitle>
        <ContentContainer>
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
          <hr />
          <Flex dir="row" align="center">
            <FlexInput>
              <StyledLabel>Cidade de Destino</StyledLabel>
              <ContainerSelect>
                <StyledSelect
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                >
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
                </StyledSelect>
              </ContainerSelect>
            </FlexInput>
            <FlexInput>
              <StyledLabel>Descarregar na cidade:</StyledLabel>
              <ContainerSelect>
                <StyledSelect value={unloadName} onChange={handleUnloadName}>
                  <option value="">Selecione</option>
                  {products.map((product, index) => {
                    return (
                      <option value={product.name} key={index}>
                        {product.name}
                      </option>
                    );
                  })}
                </StyledSelect>
              </ContainerSelect>
            </FlexInput>
            <FlexInput>
              <StyledLabel>Quantidade de {unloadName}</StyledLabel>
              <StyledInput
                type="text"
                value={unloadQuantity}
                onChange={handleUnloadQuantity}
                placeholder={"0"}
              />
            </FlexInput>
            <StyledBtn type="button" onClick={handleAddUnload}>
              <MdAdd />
            </StyledBtn>
          </Flex>
          {destination !== "" && (
            <ContainerAddDest>
              <Flex dir="row" align="center">
                <SlLocationPin />
                <p>{destination}</p>
              </Flex>
              <p>Produtos descarregados:</p>
              <>
                {unloadProducts.map((product, index) => {
                  return (
                    <p key={index}>
                      - {product.quantity}x {product.name}
                    </p>
                  );
                })}
              </>
              <StyledBtn type="button" onClick={handleAddDest}>
                Adicionar Destino
              </StyledBtn>
            </ContainerAddDest>
          )}

          <hr />
          {destinationList &&
            destinationList.map((dest, index) => {
              return (
                <p key={index}>
                  {dest.city}-{dest.distance_from_origin}
                </p>
              );
            })}
          <StyledBtn type="submit">Cadastrar Transporte</StyledBtn>
        </ContentContainer>
      </form>
    </SubContainer>
  );
}

export default CitiesRegister;
