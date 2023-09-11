import React from "react";
import {
  CardContainer,
  ProductImage,
  ProductName,
  ProductPrice,
  CardImage,
  ProductInfo,
  ContainerButton,
  PriceBdi,
  PriceLoop,
  PriceCalc,
} from "./styles";
import { useRouter } from "next/router";

export default function CardProduct({ data }: any) {
  const router = useRouter();

  const handleNavProductId = (id: string) => {
    router.push(`/produto/${id}`);
  };

  const price = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(data.value);

  const sortearParcelas = (): number => {
    const sorteio = Math.floor(Math.random() * 2) + 1;

    if (sorteio === 1) {
      return 3;
    } else {
      return 6;
    }
  };

  const sortNumber = sortearParcelas();
  const valorPortin = data.value / sortNumber;

  return (
    <CardContainer key={data.id}>
      <CardImage>
        <ProductImage src={data.thumb.file_url} alt={data.title} />
      </CardImage>

      <ProductInfo>
        <ProductName>{data.brand}</ProductName>
        <ProductPrice>
          <PriceBdi>{price}</PriceBdi>
        </ProductPrice>
        <ContainerButton onClick={() => handleNavProductId(data.id)}>
          Comprar
        </ContainerButton>
      </ProductInfo>
      <PriceLoop>
        <PriceCalc>{`A partir de ${sortNumber}x de R$${valorPortin.toFixed(
          2
        )} s/juros`}</PriceCalc>
      </PriceLoop>
    </CardContainer>
  );
}
