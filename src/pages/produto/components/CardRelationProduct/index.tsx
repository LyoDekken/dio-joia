import React from "react";
import {
  ContainerCardProduct,
  ContainerCardTitle,
  ContainerGridProduct,
  ContainerProductColum,
} from "./styles";
import CardProduct from "../CardProduct";

export default function CardRelationProduct({stock}: any) {
  return (
    <ContainerCardProduct>
      <ContainerCardTitle>Produtos relacionados</ContainerCardTitle>
      <ContainerProductColum>
        <ContainerGridProduct>
          {stock.map((data: any) => (
            <CardProduct key={data.id} data={data} />
          ))}
        </ContainerGridProduct>
      </ContainerProductColum>
    </ContainerCardProduct>
  );
}
