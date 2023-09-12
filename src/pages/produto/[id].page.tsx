import React from "react";
import { GetStaticProps, GetStaticPaths } from "next";

import { api } from "@/lib/axios";
import ProductHoverify from "./components";

export default function Produto({ product, stock }: any) {
  const images = [
    `${product.thumb.file_url}`,
    "https://diojoiasemprata.com.br/wp-content/uploads/2022/06/WhatsApp-Image-2023-02-07-at-15.06.48.jpeg",
    "https://diojoiasemprata.com.br/wp-content/uploads/2022/06/numeracao.jpeg",
    "https://diojoiasemprata.com.br/wp-content/uploads/2022/06/numeracao1.jpeg",
    "https://diojoiasemprata.com.br/wp-content/uploads/2022/06/numeracao3.jpeg",
  ];

  return (
    <ProductHoverify product={product} imageLinks={images} stock={stock} />
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: "5ff46ec1-5588-45ff-989e-fb24aedbfb03" } }],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const productId = String(params?.id);

  try {
    const response = await api.get(`stocks/${productId}`);
    const responseStock = await api.get("/stocks");

    return {
      props: {
        product: response.data.data,
        stock: responseStock.data.data,
      },
    };
  } catch (error) {
    console.error("API Error:", error);
    return {
      props: {
        product: [],
        stock: [],
      },
      revalidate: 60 * 60 * 1,
    };
  }
};
