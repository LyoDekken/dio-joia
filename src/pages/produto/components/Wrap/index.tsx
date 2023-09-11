import React from "react";
import {
  ContainerWrap,
  WrapDivInfo,
  WrapDivInfoText,
  WrapUlTitle,
  WrapUlTitleA,
  WrapUlTitleLi,
} from "./styles";

export default function Wrap() {
  return (
    <ContainerWrap>
      <WrapUlTitle>
        <WrapUlTitleLi>
          <WrapUlTitleA
            style={{
              borderTop: "4px solid green",
              marginRight: "30px",
            }}
          >
            Descrição
          </WrapUlTitleA>
          <WrapUlTitleA>Informação Adicional</WrapUlTitleA>
        </WrapUlTitleLi>
      </WrapUlTitle>
      <WrapDivInfo>
        <WrapDivInfoText>
          Aliança Anny traz leveza e modernidade para o seu amor.
        </WrapDivInfoText>
        <WrapDivInfoText>
          Garanta já a sua. Para inserir gravação nas alianças basta seguir o
          exemplo abaixo no campo de “notas” ao finalizar a compra.
        </WrapDivInfoText>
        <WrapDivInfoText>Ex: “Numeração 1: ALINE 01/01/2000”</WrapDivInfoText>
        <WrapDivInfoText>“Numeração 2: LAVÍNIA 01/01/2000”</WrapDivInfoText>
        <WrapDivInfoText>Ou a frase desejada.</WrapDivInfoText>
        <WrapDivInfoText>
          Os nossos modelos de aliança são por encomenda, levando de 3 a 4 dias
          para serem produzidos por nós mesmo.
        </WrapDivInfoText>
      </WrapDivInfo>
    </ContainerWrap>
  );
}
