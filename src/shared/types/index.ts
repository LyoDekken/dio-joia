export type ProductCard = {
  product: ProductProps;
};


export type Product = {
  product: ProductProps[];
};

// Em um arquivo de tipos (por exemplo, types.tsx)
export type ProductProps = {
  id: string;
  title: string;
  slug: string;
  value: number;
  spot_value: number;
  sales: number;
  condition: string;
  thumb: {
    file_url: string;
    file: string;
  };
  item: {
    attributes: Record<string, any>; // Você pode ajustar essa parte conforme necessário
    brand: string;
    short_desc: string;
    thumb: {
      file_url: string;
      file: string;
    };
  };
  variations: any[]; // Ou você pode criar um tipo específico para as variações se necessário
  brand: string;
  short_desc: string;
};
