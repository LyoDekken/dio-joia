import React from "react";
import {
  Container,
  ContainerArticle,
  DivImage,
  ImagesContainer,
  ImagesContainerLi,
  ImagesContainerOl,
  ZoomImage,
} from "./styles";
import SumaryProduct from "./SumaryProduct";
import Wrap from "./Wrap";
import CardRelationProduct from "./CardRelationProduct";
import { Product } from "@/shared/types";

interface Props {
  product: Product;
  imageLinks: string[];
  stock: any[]; // You should specify the structure of stock data
}

export default function ProductHoverify({ product, imageLinks, stock }: Props) {
  //const [selectedImage, setSelectedImage] = useState(imageLinks[0]);

  // const handleImageClick = (newImage: string) => {
  //   setSelectedImage(newImage);
  // };

  return (
    <Container>
      <ContainerArticle>
        <DivImage>
          <ZoomImage height="1000" width="1000" alt="" src={imageLinks[0]} />
          <ImagesContainerOl>
            {imageLinks.map((link: any, index: any) => (
              <ImagesContainerLi key={index}>
                <ImagesContainer
                  height="100"
                  width="100"
                  alt=""
                  src={link}
                />
              </ImagesContainerLi>
            ))}
          </ImagesContainerOl>
        </DivImage>
        <SumaryProduct product={product} />
      </ContainerArticle>
      <Wrap />
      <CardRelationProduct stock={stock} />
    </Container>
  );
}
