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
  const ids = [
    "5ff46ec1-5588-45ff-989e-fb24aedbfb03",
    "33a99c0e-634b-4f3f-a4c4-33034488b7fd",
    "0f5403c2-b49f-4724-b556-3355d9bf0b2d",
    "cd4dee87-fa96-47d0-8d4a-77bdddf8b99d",
    "d932533a-ed16-4e4c-b0c0-3b55f5bdb928",
    "b8d98fb9-67f1-44a2-bc50-ce6ce966b521",
  ];

  const paths = ids.map((id) => ({ params: { id } }));

  return {
    paths,
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
