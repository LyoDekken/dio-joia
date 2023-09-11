import { createContext, useContext, useState } from "react";

interface ProductContextType {
  categorie: any[];
  stock: any[];
  setStock: (data: any[]) => void;
  setCategorie: (data: any[]) => void;
}

const ProductContext = createContext<ProductContextType>({
  categorie: [],
  setCategorie: () => {},
  stock: [],
  setStock: () => {},
});

export function useProductContext() {
  return useContext(ProductContext);
}

export function ProductProvider({ children }: any) {
  const [categorie, setCategorie] = useState<any[]>([]);
  const [stock, setStock] = useState<any[]>([]);

  const values: ProductContextType = {
    categorie,
    setCategorie,
    stock,
    setStock,
  };

  return (
    <ProductContext.Provider value={values}>{children}</ProductContext.Provider>
  );
}
