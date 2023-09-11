import React, { useEffect } from "react";
import ProductHoverify from "./components";
import { GetStaticProps } from "next";
import { api } from "@/lib/axios";
import { useProductContext } from "@/context";

const Produtos = () => {
  const { categorie, setCategorie, stock, setStock } = useProductContext();

  useEffect(() => {
    async function fetchData() {
      try {
        const responseCategorie = await api.get("/categories");
        const responseStock = await api.get("/stocks");

        setCategorie(responseCategorie.data.data);
        setStock(responseStock.data.data);
      } catch (error) {
        console.error("API Error:", error);
      }
    }

    fetchData();
  }, [setCategorie, setStock]);

  return <ProductHoverify categorie={categorie} stock={stock} />;
};

export default Produtos;

// export const getStaticProps: GetStaticProps = async () => {
//   try {
//     const response = await api.get("/categories");
//     const itens = await api.get("/stocks");

//     return {
//       props: {
//         categorie: response.data.data,
//         stock: itens.data.data,
//       },
//     };
//   } catch (error) {
//     console.error("API Error:", error);
//     return {
//       props: {
//         categorie: [],
//         stock: [],
//       },
//       revalidate: 60 * 60 * 1,
//     };
//   }
// };
