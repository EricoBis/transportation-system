import React from "react";
import {
  Container,
  ContentContainer,
  Flex,
  SubContainer,
  SubContainerTitle,
} from "../../styles";
import { TbMapSearch } from "react-icons/tb";
import ConsultInput from "../../components/Consult/ConsultInput";

function Consult() {
  return (
    <Container>
      <SubContainer>
        <SubContainerTitle>
          <Flex dir="row" align="center">
            <TbMapSearch />
            <h3>Consultar</h3>
          </Flex>
        </SubContainerTitle>
        <ContentContainer>
            <ConsultInput/>
        </ContentContainer>
      </SubContainer>
    </Container>
  );
}

export default Consult;
