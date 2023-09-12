import { X } from "@phosphor-icons/react";
import React, { useState } from "react";
import styled from "styled-components";

const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContentWrapper = styled.div`
  background: white;
  padding: 20px;
  max-width: 600px;
  display: flex;
`;

const CloseButton = styled.button`
  color: black;
  background: none;
  border: none;
  align-items: flex-start;
  align-self: start;
  cursor: pointer;
`;

const Column = styled.div`
  flex: 1;
  padding: 20px;
`;

const ColumnTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
  color: green;
`;

const Info = styled.div`
  margin-bottom: 10px;
`;

function ProductModalContent({ onClose }: any) {
  return (
    <ModalContainer>
      <ModalContentWrapper>
        <Column>
          <ColumnTitle>Aliança</ColumnTitle>
          <Info>Informação 1</Info>
          <Info>Informação 2</Info>
        </Column>
        <Column>
          <ColumnTitle>2 Masculino</ColumnTitle>
          <Info>Informação 1</Info>
          <Info>Informação 2</Info>
        </Column>
        <Column>
          <ColumnTitle>3 Seleção especial</ColumnTitle>
          <Info>Informação 1</Info>
          <Info>Informação 2</Info>
        </Column>
        <CloseButton onClick={onClose}>
          <X size={16} />
        </CloseButton>
      </ModalContentWrapper>
    </ModalContainer>
  );
}

export default ProductModalContent;
