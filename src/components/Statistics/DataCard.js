import { useState, React } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { CardContainer } from "./style";
import {  Flex } from "../../styles";
import { ContainerInfo } from "../TransportRegister/style";

function DataCard({ transport }) {
  const [fullContent, setFullContent] = useState(false);

  const showContent = () => {
    if (fullContent) return;
    setFullContent(!fullContent);
  };

  return (
    <CardContainer isFull={fullContent} onClick={showContent}>
      <h2>{transport.origin}</h2>
      {fullContent && 
      (<>
        <p>Custo Total - R${transport.total_cost}</p>
        <ContainerInfo>
        <p>Caminhões Deslocados:</p>
        <p>{transport.trucks_needded[1]}</p>
        </ContainerInfo>
        
      </>)}
      <Flex dir="row" justify="center" align="center">
        <button onClick={() => setFullContent(!fullContent)}>
          {fullContent ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
        </button>
      </Flex>
    </CardContainer>
  );
}

export default DataCard;
