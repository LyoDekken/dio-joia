import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { useRouter } from "next/router";
import { parseCookies, destroyCookie } from "nookies";
import { XCircle } from "@phosphor-icons/react";

const Container = styled.div`
  box-sizing: inherit;
  color: #4a4a4a;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 15px;
  line-height: 27.8571px;
  width: 100%;
  background-color: #f2f2f2;
`;

const ContainerDiv = styled.div`
  @media (min-width: 544px) {
    max-width: 100%;
  }

  @media (min-width: 922px) {
    display: flex;
    max-width: 1240px;
  }

  @media (max-width: 921px) {
    flex-direction: column;
  }

  box-sizing: inherit;
  color: #4a4a4a;
  display: flex;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 15px;
  line-height: 27.8571px;
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
  padding-left: 20px;
  padding-right: 20px;
`;

const Article = styled.article`
  box-sizing: inherit;
  color: #4a4a4a;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 15px;
  line-height: 27.8571px;
  max-width: 1240px;
  width: 100%;
  padding-top: 80px;
`;

export const ContainerArticleTitle = styled.h1`
  box-sizing: inherit;
  clear: both;
  color: #3d3d3d;
  display: block;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 30px;
  font-style: inherit;
  font-weight: 400;
  line-height: 36px;
  margin: 0px;
  margin-bottom: 0.2em;
  padding: 0px;
  vertical-align: baseline;
  word-wrap: break-word;
`;

const CartItems = styled.div`
  width: 80%;
  max-width: 400px;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
  margin-top: 20px;
`;

const BackButton = styled.button`
  -webkit-font-smoothing: antialiased;
  background-color: #5c825d;
  background-image: none;
  border-color: rgb(92, 130, 93);

  border: 0px;
  border-radius: 0px;
  bottom: 0px;
  box-shadow: none;
  box-sizing: inherit;
  cursor: pointer;
  display: block;
  font-family: inherit;
  font-size: 16.5px;
  font-weight: 700;
  left: auto;
  line-height: 29.7px;
  margin: 0px;
  margin-bottom: 1em;
  outline: none;
  overflow: visible;
  padding: 10px 20px;
  position: relative;
  right: 0px;
  text-align: center;
  text-decoration: none;
  text-shadow: none;
  top: 0px;
  transition: all 0.2s linear 0s;
  vertical-align: baseline;
  word-wrap: break-word;
  color: #ffffff;

  &:hover {
    background: #e6e6e6;
    color: #000000;
    box-shadow: none;
    outline: 0px;
    text-decoration: none;
  }
`;

export const DivCart = styled.div`
  box-sizing: inherit;
  color: #4a4a4a;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 15px;
  line-height: 27.8571px;
  outline: none;

  word-wrap: break-word;

  &:last-child {
    margin-bottom: 0px;
  }
`;

export const DivTableTh = styled.table`
  @media (min-width: 544px) {
    max-width: 100%;
  }

  @media (min-width: 922px) {
    display: flex;
    max-width: 1240px;
  }

  @media (max-width: 921px) {
    width: 40%;
    display: flex;
    justify-content: left;
    background-color: transparent;
    flex-direction: column;
  }

  box-sizing: inherit;
  color: #4a4a4a;
  display: flex;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 15px;
  line-height: 27.8571px;
  margin-left: auto;
  justify-content: space-around;
  margin-right: auto;
  max-width: 100%;
  outline: none;
  padding-left: 20px;
  padding-right: 20px;
  background-color: #fbfbfb;
`;

export const DivResponsive = styled.div`
  @media (max-width: 921px) {
    max-width: 100%;
    display: flex;
    flex-direction: row;
  }
`;

export const DivTableTd = styled.table`
  @media (min-width: 544px) {
    max-width: 100%;
  }

  @media (min-width: 922px) {
    display: flex;
    max-width: 1240px;
  }

  @media (max-width: 921px) {
    width: 40%;
    display: flex;
    justify-content: left;
    flex-direction: column;
  }

  box-sizing: inherit;
  color: #4a4a4a;
  display: flex;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 15px;
  line-height: 27.8571px;
  margin-left: auto;
  justify-content: space-around;
  margin-right: auto;
  max-width: 100%;
  outline: none;
  margin-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
`;

export const DivTH = styled.th`
  border: 0px;
  box-sizing: inherit;
  color: #4a4a4a;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 15px;
  font-weight: 700;
  width: 100%;
  line-height: 27.8571px;
  outline: none;
  padding: 0.7em 1em;
  text-align: left;
  max-height: 150px;
  height: 100%;
  max-width: 250px;
  vertical-align: middle;
  word-wrap: break-word;
`;

export const DivTD = styled.th`
  border-bottom: 0px;
  border-left: 0px;
  width: 150px;
  max-width: 250px;
  border-right: 0px;
  border-top: 0.761905px solid #ebebeb;
  border-width: 0px;
  box-sizing: inherit;
  color: #4a4a4a;
  display: block;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 15px;
  font-weight: 700;
  line-height: 27.8571px;
  min-height: 3.25em;
  padding: 0.7em 1em;
  text-align: left;
  word-wrap: break-word;
`;

export const NavContainerInputSelect = styled.input.attrs({
  type: "number",
  min: 1,
  defaultValue: 1,
})`
  background: #ffffff;
  border-radius: 0px;
  align-items: center;
  margin-right: 10px;
  box-shadow: none;
  box-sizing: border-box;
  color: #666666;
  font: inherit;
  height: auto;
  line-height: 15px;
  margin: 0 auto;
  min-height: 35px;
  outline: none;
  text-align: center;
  transition: all 0.2s linear 0s;
  vertical-align: baseline;
  width: 50%;

  &:focus {
    border-color: rgb(221, 221, 221);
    box-shadow: none;
    outline: 0px;
  }
`;

export const ValorTotal = styled.div`
  border-radius: 0px;
  box-sizing: inherit;
  color: #4a4a4a;
  float: right;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 15px;
  line-height: 27.8571px;
  margin-bottom: 2em;
  outline: none;
  text-align: left;
  width: 100%;
  word-wrap: break-word;
`;

export const ValorTotalTitulo = styled.h2`
  background-color: #fbfbfb;
  border-bottom: 1px solid #ebebeb;
  box-sizing: inherit;
  clear: both;
  color: #3d3d3d;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 18px;
  font-style: inherit;
  font-weight: inherit;
  line-height: 23.4px;
  margin-bottom: 0.7em;
  outline: none;
  padding: 0.7em 1em;

  vertical-align: baseline;
  word-wrap: break-word;
`;

const ImageCarrinho = styled(Image)`
  box-shadow: none;
  box-sizing: inherit;
  color: #557a56;
  cursor: pointer;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 15px;
  height: auto;
  line-height: 27.8571px;
  max-width: 50px;
  outline: none;
  text-align: left;
  vertical-align: middle;
  width: 64px;
  word-wrap: break-word;
`;

export const FinalizationBuy = styled.div`
  box-sizing: inherit;
  color: #4a4a4a;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 15px;
  line-height: 27.8571px;
  outline: none;
  padding: 1em 0px;
  word-wrap: break-word;
`;

const Cart = ({ cartItems }: any) => {
  const router = useRouter();

  const update = cartItems ? JSON.parse(cartItems) : [];

  let itemArray = [];
  itemArray.push(update);

  const handleRemoveFromCart = () => {
    destroyCookie(null, "@diojoiasemprata-cart-test");
  };

  return (
    <Container>
      <ContainerDiv>
        <Article>
          <ContainerArticleTitle>Carrinho</ContainerArticleTitle>
          {update.length === 0 ? (
            <div>
              <div>Carrinho vazio</div>
              <FinalizationBuy>
                <BackButton onClick={() => router.push("/")}>
                  Retornar para loja
                </BackButton>
              </FinalizationBuy>
            </div>
          ) : (
            <DivResponsive>
              <DivTableTh>
                <DivTH>Excluir</DivTH>
                <DivTH>Image</DivTH>
                <DivTH>Produto</DivTH>
                <DivTH>Preço</DivTH>
                <DivTH>Quantidade</DivTH>
                <DivTH>Subtotal</DivTH>
              </DivTableTh>
              {itemArray.map(
                (
                  item: {
                    title: string;
                    value: number;
                  },
                  index: number
                ) => (
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
                    <DivTH>R${item?.value}</DivTH>
                    <DivTH>
                      <NavContainerInputSelect />
                    </DivTH>
                    <DivTH>R${item?.value}</DivTH>
                  </DivTableTd>
                )
              )}
              <DivCart>
                {itemArray && (
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
            </DivResponsive>
          )}
        </Article>
      </ContainerDiv>
    </Container>
  );
};

const TableContainer = styled.div`
  border-bottom: 0.761905px solid #ebebeb;
  border-collapse: separate;
  border-left: 0px;
  border-radius: 0px;
  border-right: 0px;
  border-spacing: 0px;
  border-top: 0px;
  border-width: 0px;
  box-sizing: inherit;
  color: #4a4a4a;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 15px;
  line-height: 27.8571px;
  margin: 0px 0px 6px;
  outline: none;
  padding: 0px;
  text-align: left;
  width: 100%;
  word-wrap: break-word;
`;

const TableRow = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 8px;
`;

const TableLabel = styled.div`
  border-bottom: 0px;
  border-left: 0px;
  border-width: 0px;
  box-sizing: inherit;
  color: #4a4a4a;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 15px;
  font-weight: 700;
  line-height: 1.5em;
  outline: none;
  padding: 15px;
  text-align: left;
  vertical-align: top;
  width: 40%;
  word-wrap: break-word;
`;

const TableValueA = styled.div`
  background-color: transparent;
  box-sizing: inherit;
  color: #557a56;
  cursor: pointer;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 15px;
  line-height: 22.5px;
  outline: none;
  text-align: left;
  text-decoration: none;
  transition: all 0.2s linear 0s;
  word-wrap: break-word;
`;

const TableValue = styled.div`
  border-bottom: 0px;
  border-left: 0px;
  border-width: 0px;
  box-sizing: inherit;
  color: #4a4a4a;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 15px;
  font-weight: 700;
  line-height: 1.5em;
  outline: none;
  padding: 15px;
  text-align: left;
  vertical-align: top;
  width: 40%;
  word-wrap: break-word;
`;

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

export async function getServerSideProps(context: any) {
  const cookies = parseCookies(context);
  const cartItems = cookies["@diojoiasemprata-cart-test"] || "[]"; // Defina como uma matriz vazia se for undefined

  return {
    props: {
      cartItems,
    },
  };
}

export default Cart;
