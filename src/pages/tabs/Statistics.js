import { useContext, React } from "react";
import {
  Container,
  ContentContainer,
  Flex,
  SubContainer,
  SubContainerTitle,
} from "../../styles";
import { TbGraph } from "react-icons/tb";
import { DataContext } from "../../contexts/DataContext";
import DataCard from "../../components/Statistics/DataCard";

function Statistics() {
  const { registrationData } = useContext(DataContext);

  return (
    <Container>
      <SubContainer>
        <SubContainerTitle>
          <Flex dir="row" align="center">
            <TbGraph />
            <h3>Estatísticas</h3>
          </Flex>
        </SubContainerTitle>
        <ContentContainer>
          {registrationData.map((transport, index) => {
            return <DataCard key={index} transport={transport}/>
          })}
          {registrationData.length === 0 && (
            <Flex dir="column" justify="center" align="center">
              <h3>Não há dados para mostrar aqui!</h3>
            </Flex>
          )}
        </ContentContainer>
      </SubContainer>
    </Container>
  );
}

export default Statistics;
