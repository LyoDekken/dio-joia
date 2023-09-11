import React from "react";

import {
  BuyButton,
  CardContainer,
  ProductImage,
  ProductName,
  ProductPrice,
  CardImage,
  ProductInfo,
  ProductLink,
  ContainerButton,
  Button,
} from "./styles";
import { ProductCard } from "@/shared/types";
import { useRouter } from "next/router";

export default function ProductCard(product: ProductCard) {
  const router = useRouter();

  const handleNav = (id: string) => {
    router.push(`produto/${id}`);
  };

  const price = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(product.product.value);

  return (
    <CardContainer key={product.product.id}>
      <CardImage>
        <ProductImage
          src={product.product.thumb.file_url}
          alt={product.product.title}
        />
      </CardImage>
      <ProductInfo>
        <ProductLink>
          <ProductName>{product.product.title}</ProductName>
        </ProductLink>
        <ProductPrice>{price}</ProductPrice>
        <ContainerButton>
          <BuyButton>
            <Button onClick={() => handleNav(product.product.id)}>
              Comprar
            </Button>
          </BuyButton>
        </ContainerButton>
      </ProductInfo>
    </CardContainer>
  );
}
