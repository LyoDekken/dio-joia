import React, { useState } from "react";
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

export default function ProductHoverify({ product, imageLinks, stock }: any) {
  const [selectedImage, setSelectedImage] = useState(imageLinks[0]);

  const handleImageClick = (newImage: string) => {
    setSelectedImage(newImage);
  };

  return (
    <Container>
      <ContainerArticle>
        <DivImage>
          <ZoomImage height="1000" width="1000" alt="" src={selectedImage} />
          <ImagesContainerOl>
            {imageLinks.map((link: any, index: any) => (
              <ImagesContainerLi key={index}>
                <ImagesContainer
                  height="100"
                  width="100"
                  alt=""
                  src={link}
                  onClick={() => handleImageClick(link)}
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
