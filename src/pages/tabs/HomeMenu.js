import React from "react";
import { BottomCard, Card, CardList } from "./style";
import { TbMapSearch } from "react-icons/tb";
import { TbPackage } from "react-icons/tb";
import { TbGraph } from "react-icons/tb";
import { StyledLink } from "../../styles";

function HomeMenu() {
  return (
    <CardList>
      <StyledLink to="/?tab=consult">
        <Card>
          <TbMapSearch />
          <BottomCard>Consultar Trechos x Modalidade</BottomCard>
        </Card>
      </StyledLink>
      <StyledLink to="/?tab=register">
        <Card>
          <TbPackage />
          <BottomCard>Cadastrar Transporte</BottomCard>
        </Card>
      </StyledLink>
      <StyledLink to="/?tab=statistics">
        <Card>
          <TbGraph />

          <BottomCard>Dados estatísticos</BottomCard>
        </Card>
      </StyledLink>
    </CardList>
  );
}

export default HomeMenu;
