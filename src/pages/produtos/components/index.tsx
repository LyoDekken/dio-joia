import React from "react";
import { Container, ContainerBar } from "./styles";
import SideBarProducts from "./SideBar";
import Cards from "./Cards";

export default function ProductsHoverify({ categorie, stock }: any) {
  return (
    <Container>
      <ContainerBar>
        <SideBarProducts categorie={categorie} />
        <Cards stock={stock} />
      </ContainerBar>
    </Container>
  );
}
