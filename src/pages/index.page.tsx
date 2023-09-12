import React from "react";
import { GetStaticProps } from "next";

import { api } from "@/lib/axios";
import { Product } from "@/shared/types";

import HomeHoverify from "./home";

export default function Home({ product }: Product) {
  return <HomeHoverify product={product} />;
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const response = await api.get("/pages/home?featured=true");

    return {
      props: {
        product: response.data.data.featured,
      },
    };
  } catch (error) {
    console.error("API Error:", error);
    return {
      props: {
        product: [],
      },
      revalidate: 60 * 60 * 1,
    };
  }
};
