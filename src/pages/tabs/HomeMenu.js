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
          <BottomCard>Consultar</BottomCard>
        </Card>
      </StyledLink>
      <StyledLink to="/?tab=register">
        <Card>
          <TbPackage />
          <BottomCard>Cadastrar</BottomCard>
        </Card>
      </StyledLink>
      <StyledLink to="/?tab=statistics">
        <Card>
          <TbGraph />
          <BottomCard>Estatísticas</BottomCard>
        </Card>
      </StyledLink>
    </CardList>
  );
}

export default HomeMenu;
