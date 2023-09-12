import React from "react";
import ProductHoverify from "./components";
import { GetStaticProps } from "next";
import { api } from "@/lib/axios";

const Produtos = ({ categorie, stock }: any) => {
  return <ProductHoverify categorie={categorie} stock={stock} />;
};

export default Produtos;

export const getStaticProps: GetStaticProps = async () => {
  try {
    const response = await api.get("/categories");
    const itens = await api.get("/stocks");

    return {
      props: {
        categorie: response.data.data,
        stock: itens.data.data,
      },
    };
  } catch (error) {
    console.error("API Error:", error);
    return {
      props: {
        categorie: [],
        stock: [],
      },
      revalidate: 60 * 60 * 1,
    };
  }
};
