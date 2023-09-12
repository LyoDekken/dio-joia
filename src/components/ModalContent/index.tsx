import React from "react";
import styled from "styled-components";

const ModalWrapper = styled.div`
  background: white;
  top: 150px;
  display: flex;
  left: 0;
  position: fixed;
  width: 100%;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  z-index: 1000; /* Garante que o modal esteja na frente de outros elementos */
`;

const ModalList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ModalListItem = styled.li`
  margin-bottom: 10px;
`;

const ModalLink = styled.a`
  display: block;
  font-size: 16px;
  color: green;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

function ModalContent() {
  return (
    <ModalWrapper>
      <ModalList>
        <ModalListItem>
          <ModalLink href="/">Home</ModalLink>
        </ModalListItem>
        <ModalListItem>
          <ModalLink href="/about">Sobre nós</ModalLink>
        </ModalListItem>
        <ModalListItem>
          <ModalLink href="/promotions">Promoções</ModalLink>
        </ModalListItem>
        <ModalListItem>
          <ModalLink href="/news">Novidades</ModalLink>
        </ModalListItem>
        <ModalListItem>
          <ModalLink href="/contact">Contato</ModalLink>
        </ModalListItem>
        <ModalListItem>
          <ModalLink href="/cart">Carrinho</ModalLink>
        </ModalListItem>
        <ModalListItem>
          <ModalLink href="/account">Minha conta</ModalLink>
        </ModalListItem>
      </ModalList>
    </ModalWrapper>
  );
}

export default ModalContent;
