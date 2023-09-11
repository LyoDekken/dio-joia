import React from "react";

import { FullScreenSection, FullScreenVideo, StyledSection } from "./styles";

import HeaderHome from "./components/HeaderHome";
import { Product } from "@/shared/types";
import Fabrications from "./components/Fabrications";
import HomeDio from "./components/HomeDio";

export default function HomeHoverify({ product }: Product) {
  return (
    <>
      <StyledSection>
        <FullScreenSection>
          <FullScreenVideo
            autoPlay
            muted
            loop
            src="https://diojoiasemprata.com.br/wp-content/uploads/2022/04/dio-final.mp4"
          />
        </FullScreenSection>
        <HeaderHome />
        <HomeDio />
      </StyledSection>
      <Fabrications product={product} />
    </>
  );
}
