import React from "react";
import {
  ContainerSumary,
  ContainerSumaryTitle,
  NavContainer,
  NavContainerButtonSelect,
  NavContainerFrete,
  NavContainerFreteButton,
  NavContainerFreteInput,
  NavContainerFreteLabel,
  NavContainerInfoA,
  NavContainerInfoText,
  NavContainerInputSelect,
  NavContainerParcelaPricing,
  NavContainerSelect,
  NavContainerSelectOption,
  NavContainerSelectValue,
  NavContainerSpanProduct,
  Numeration,
  NumerationForm,
  NumerationLabel,
  ShortDescription,
  SumaryText,
} from "./styles";

export default function SumaryProduct({ product }: any) {
  console.log(product);

  const options = [];

  options.push(
    <NavContainerSelectOption key="default" value="">
      Escolha uma opção
    </NavContainerSelectOption>
  );
  for (let i = 1; i <= 30; i++) {
    options.push(
      <NavContainerSelectOption key={i} value={i}>
        {i}
      </NavContainerSelectOption>
    );
  }

  const handleAddToCart = () => {
    const productInfo = {
      title: product.title,
      value: product.value,
    };

    // Verifique se já existe um carrinho no Local Storage
    const existingCart = localStorage.getItem("@diojoiasemprata-cart-test");
    let updatedCart = [];

    if (existingCart) {
      updatedCart = JSON.parse(existingCart);
    }

    updatedCart.push(productInfo);

    // Atualize o carrinho no Local Storage
    localStorage.setItem(
      "@diojoiasemprata-cart-test",
      JSON.stringify(updatedCart)
    );

    alert("Produto adicionado ao carrinho!");
  };

  return (
    <ContainerSumary>
      <NavContainer>
        <NavContainerInfoA>Início / Categoria / Produto</NavContainerInfoA>
      </NavContainer>
      <ContainerSumaryTitle>{product.title}</ContainerSumaryTitle>
      <NavContainerInfoText>R$ {product.value}</NavContainerInfoText>
      <NavContainerParcelaPricing>
        Parcele em 5x de {product.value} s/ juros
      </NavContainerParcelaPricing>
      <ShortDescription>
        <SumaryText>{product.brand}</SumaryText>
        <SumaryText>{product.short_desc}</SumaryText>
      </ShortDescription>
      <NumerationForm>
        <Numeration>
          <NumerationLabel>Numeração 1</NumerationLabel>
        </Numeration>
        <NavContainerSelect>{options}</NavContainerSelect>
        <Numeration>
          <NumerationLabel>Numeração 2</NumerationLabel>
        </Numeration>
        <NavContainerSelect>{options}</NavContainerSelect>

        <NavContainerSelectValue>
          <NavContainerInputSelect />
          <NavContainerButtonSelect onClick={handleAddToCart}>
            Comprar
          </NavContainerButtonSelect>
        </NavContainerSelectValue>
      </NumerationForm>
      <NavContainerSpanProduct>SKU: AL100</NavContainerSpanProduct>
      <NavContainerSpanProduct>Categoria: ...</NavContainerSpanProduct>
      <NavContainerFrete>
        <NavContainerFreteLabel>Calcular Frete</NavContainerFreteLabel>
        <NavContainerFreteInput placeholder="00000-000" />
        <NavContainerFreteButton>OK</NavContainerFreteButton>
      </NavContainerFrete>
    </ContainerSumary>
  );
}
