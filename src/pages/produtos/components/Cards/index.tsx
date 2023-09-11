import React from "react";
import {
  Container,
  SectionContainer,
  NavContainer,
  NavContainerInfoA,
  NavContainerTitle,
  ContainerGridProduct,
  NavContainerAllResults,
  NavContainerSelect,
  NavContainerSpaceContent,
  NavContainerSelectOption,
} from "./styles";
import CardProduct from "../CardProduct";

export default function Cards({ stock }: any) {
  const pages = [
    { number: 1, current: true },
    { number: 2, link: "https://diojoiasemprata.com.br/produtos/page/2/" },
    { number: 3, link: "https://diojoiasemprata.com.br/produtos/page/3/" },
    { number: 4, link: "https://diojoiasemprata.com.br/produtos/page/4/" },
  ];
  return (
    <Container>
      <SectionContainer>
        <NavContainer>
          <NavContainerInfoA>Início / Produtos</NavContainerInfoA>
        </NavContainer>
        <NavContainerTitle>Produtos</NavContainerTitle>
        <NavContainerSpaceContent>
          <NavContainerAllResults>
            Exibindo 1-{stock.length} de {stock.length} resultados
          </NavContainerAllResults>
          <NavContainerSelect>
            <NavContainerSelectOption value="">
              Ordenar por popularidade
            </NavContainerSelectOption>
            <NavContainerSelectOption value="popularidade">
              Ordenar por mais recente
            </NavContainerSelectOption>
            <NavContainerSelectOption value="preco">
              Ordenar por preço: menor para maior
            </NavContainerSelectOption>
            <NavContainerSelectOption value="nome">
              Ordenar por preço: maior para menor
            </NavContainerSelectOption>
          </NavContainerSelect>
        </NavContainerSpaceContent>
        <ContainerGridProduct>
          {stock.map((data: any) => (
            <CardProduct key={data.id} data={data} />
          ))}
        </ContainerGridProduct>
      </SectionContainer>
      <PageNumbers pages={pages} />
    </Container>
  );
}

import styled from "styled-components";

const PageNumbersContainer = styled.ul`
  border-color: rgb(113, 106, 93);
  box-sizing: border-box;
  color: #c2bcb3;
  flex-wrap: wrap;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 100%;
  font-style: inherit;
  font-weight: inherit;
  justify-content: center;
  line-height: 27.8571px;
  list-style: disc;
  list-style-image: initial;
  margin: 1px;
  margin-left: 0px;
  vertical-align: baseline;
  white-space: normal;

  ::after {
    clear: both;
    content: "";
    display: table;
  }

  ::before {
    content: " ";
    display: table;
  }
`;

const PageNumberItem = styled.li`
  border: 1px solid #4d734f;
  box-sizing: inherit;
  color: #c2bcb3;
  display: inline-block;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 100%;
  font-style: inherit;
  font-weight: inherit;
  line-height: 27.8571px;
  margin: 0px 2px 2px 0px;
  outline-color: initial;
  overflow: hidden;
  padding: 0px;
  margin: 0 6px;
  vertical-align: baseline;
`;

const PageNumberLink = styled.a`
  background-color: transparent;
  box-sizing: inherit;
  color: #4d734f;
  cursor: pointer;
  display: block;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 1em;
  font-weight: 400;
  line-height: 1;
  margin: 0px;
  min-width: 2.5em;
  padding: 0.75em;
  text-align: center;
  text-decoration: none;
  text-decoration-color: initial;
  transition: all 0.2s linear 0s;

  &:hover {
    background: #4D734F;
    background-image: none;
    border-color: rgb(82, 119, 83);
    box-shadow: none;
    color: #fff;
    outline: 0px;
    text-decoration: none;
  }
`;

const PageNumbers = ({ pages }: any) => {
  return (
    <PageNumbersContainer>
      {pages.map((page: any, index: any) => (
        <PageNumberItem key={index}>
          {page.current ? (
            <PageNumberLink
              style={{
                background: "#4d734f",
                color: "#fff",
              }}
            >
              {page.number}
            </PageNumberLink>
          ) : (
            <PageNumberLink href={page.link}>{page.number}</PageNumberLink>
          )}
        </PageNumberItem>
      ))}
    </PageNumbersContainer>
  );
};
