import React from "react";

import {
  Container,
  GrayText,
  GreenText,
  ProductList,
  RowLine,
  ContainerDiv,
  Section,
  TextFabriactionColum,
  TextFabriactionSection,
  WidgetContainer,
  ElementoDiv,
  ElementoDivSpan,
  ElementoWrapDiv,
  ElementoWrapButton,
  ElementoWrapButtonLink,
  ElementoWrapButtonSpan,
  TextTitle,
  Separator,
} from "./styles";

import { Product } from "@/shared/types";
import ProductCard from "../Product-Card";

const Fabrications = ({ product }: Product) => {
  return (
    <Section>
      <ContainerDiv>
        <Container>
          <RowLine>
            <GrayText>
              VIVENCIE A EXPERIÊNCIA USANDO NOSSAS JOIAS EM PRATA
            </GrayText>
            <WidgetContainer>
              <GreenText>a arte que acompanha sua conquista</GreenText>
            </WidgetContainer>
          </RowLine>
        </Container>
        <TextFabriactionSection>
          <TextFabriactionColum>
            <Separator>
              <TextTitle>fabricações</TextTitle>
              <ElementoDiv>
                <ElementoDivSpan />
              </ElementoDiv>
            </Separator>

            <Separator>
              <ElementoWrapDiv>
                <ElementoWrapButton>
                  <ElementoWrapButtonLink>
                    <ElementoWrapButtonSpan>Ver Mais</ElementoWrapButtonSpan>
                  </ElementoWrapButtonLink>
                </ElementoWrapButton>
              </ElementoWrapDiv>
            </Separator>
          </TextFabriactionColum>
        </TextFabriactionSection>
        <ProductList>
          {product.map((data) => (
            <ProductCard key={data.id} product={data} />
          ))}
        </ProductList>
      </ContainerDiv>
    </Section>
  );
};

export default Fabrications;
