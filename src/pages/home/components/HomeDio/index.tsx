import React from "react";
import {
  Container,
  CoverContent,
  StyledSVG,
  CoverText,
  Button,
  StyledContainer,
  CoverInfo,
  StyledSVGContainer,
  StyledSVGContainerWrapper,
} from "./styles";
import SvgDio from "@/assets/svg/dio.svg";

export default function HomeDio() {
  return (
    <Container>
      <CoverContent>
        <StyledContainer>
          <StyledSVGContainer>
            <StyledSVGContainerWrapper>
              <StyledSVG src={SvgDio} alt="diô" />
            </StyledSVGContainerWrapper>
          </StyledSVGContainer>

          <CoverInfo>
            <CoverText>
              joias em prata personalizadas para o seu gosto
            </CoverText>
            <Button>FAÇA AGORA SEU PEDIDO!</Button>
          </CoverInfo>
        </StyledContainer>
      </CoverContent>
    </Container>
  );
}
