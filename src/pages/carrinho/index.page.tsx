import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { XCircle } from "@phosphor-icons/react";

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
import { useCart } from "@/context/cart";

const Cart = () => {
  const router = useRouter();

  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("@diojoiasemprata-cart-test");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  const handleRemoveFromCart = (itemIndex: number) => {
    const updatedCart = [...cart];

    updatedCart.splice(itemIndex, 1);

    localStorage.setItem(
      "@diojoiasemprata-cart-test",
      JSON.stringify(updatedCart)
    );

    alert("Item Deletado");
    setCart(updatedCart);
  };

  return (
    <Container>
      <ContainerDiv>
        <Article>
          <ContainerArticleTitle>Carrinho</ContainerArticleTitle>
          {cart.length === 0 ? (
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
                {cart.map((item: any, index: number) => (
                  <DivTableTd key={index}>
                    <DivTH>
                      <XCircle
                        cursor={"pointer"}
                        onClick={() => handleRemoveFromCart(index)} // Passa o índice para a função
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
                {cart.length > 0 && (
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

export default Cart;
