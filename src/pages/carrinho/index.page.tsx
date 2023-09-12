"use client";
import React from "react";

import { useRouter } from "next/router";
import { parseCookies, destroyCookie } from "nookies";
import { XCircle } from "@phosphor-icons/react";
import { GetStaticProps } from "next";

import {
  Article,
  Container,
  ContainerArticleTitle,
  ContainerDiv,
  BackButton,
  DivCart,
  DivTH,
  DivTableTd,
  DivTableTh,
  FinalizationBuy,
  ImageCarrinho,
  NavContainerInputSelect,
  ValorTotal,
  ValorTotalTitulo,
  TableRow,
  TableContainer,
  TableLabel,
  TableValue,
  TableValueA,
  DivResponsive,
} from "./styles";

const Cart = ({ cartItems }: any) => {
  const router = useRouter();

  const handleRemoveFromCart = () => {
    destroyCookie(null, "@diojoiasemprata-cart-test");
    router.reload();
  };

  return (
    <Container>
      <ContainerDiv>
        <Article>
          <ContainerArticleTitle>Carrinho</ContainerArticleTitle>
          {cartItems.length === 0 ? (
            <div>
              <div>Carrinho vazio</div>
              <FinalizationBuy>
                <BackButton onClick={() => router.push("/")}>
                  Retornar para loja
                </BackButton>
              </FinalizationBuy>
            </div>
          ) : (
            <>
              <DivResponsive>
                <DivTableTh>
                  <DivTH>Excluir</DivTH>
                  <DivTH>Image</DivTH>
                  <DivTH>Produto</DivTH>
                  <DivTH>Preço</DivTH>
                  <DivTH>Quantidade</DivTH>
                  <DivTH>Subtotal</DivTH>
                </DivTableTh>
                {cartItems.map((item: any, index: number) => (
                  <DivTableTd key={index}>
                    <DivTH>
                      <XCircle
                        cursor={"pointer"}
                        onClick={() => handleRemoveFromCart()}
                        size={32}
                      />
                    </DivTH>
                    <DivTH>
                      <ImageCarrinho
                        alt="Carrrinho Produto"
                        height={300}
                        width={300}
                        src={
                          "https://diojoiasemprata.com.br/wp-content/uploads/2023/05/WhatsApp-Image-2023-05-28-at-08.44.03-2-300x300.jpeg"
                        }
                      />
                    </DivTH>
                    <DivTH>{item.title}</DivTH>
                    <DivTH>R${item.value}</DivTH>
                    <DivTH>
                      <NavContainerInputSelect />
                    </DivTH>
                    <DivTH>R${item.value}</DivTH>
                  </DivTableTd>
                ))}
              </DivResponsive>

              <DivCart>
                {cartItems && (
                  <ValorTotal>
                    <ValorTotalTitulo>Total no carrinho</ValorTotalTitulo>
                    <TransparentTable />
                  </ValorTotal>
                )}
                <FinalizationBuy>
                  <BackButton onClick={() => router.push("/")}>
                    Retornar para loja
                  </BackButton>
                </FinalizationBuy>
              </DivCart>
            </>
          )}
        </Article>
      </ContainerDiv>
    </Container>
  );
};

const TransparentTable = () => {
  return (
    <TableContainer>
      <TableRow>
        <TableLabel>SUBTOTAL</TableLabel>
        <TableValue>R$59.99</TableValue>
      </TableRow>
      <TableRow>
        <TableLabel>ENTREGA</TableLabel>
        <TableValue>
          <TableValueA>CALCULAR ENTREGA</TableValueA>
        </TableValue>
      </TableRow>
      <TableRow>
        <TableLabel>TOTAL</TableLabel>
        <TableValue>R$59.99</TableValue>
      </TableRow>
    </TableContainer>
  );
};

export const getServerSideProps: GetStaticProps = async (context: any) => {
  const cookies = parseCookies(context);
  const cartItems = cookies["@diojoiasemprata-cart-test"];
  let item = [];

  if (cartItems) {
    const view = JSON.parse(cartItems);

    item.push(view);

    return {
      props: {
        cartItems: item,
      },
    };
  } else {
    return {
      props: {
        cartItems: [],
      },
    };
  }
};

export default Cart;
