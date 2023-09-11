import { CaretDown } from "@phosphor-icons/react";
import {
  AboveHeaderBarPrimary,
  AboveHeaderPrimaryWrapSection,
  HeaderSectionUl,
  AboveHeaderPrimaryWrap,
  HeaderSectionLink,
  ArrowDownSpan,
} from "./styles";
import { useState } from "react";
import ProductModal from "../ProductModal";
import { useRouter } from "next/router";

export default function HeadePrimaryHome() {
  const router = useRouter();

  const handleHome = () => {
    router.push("/");
  };

  const handleNav = () => {
    router.push("/produtos");
  };

  const [showProductModal, setShowProductModal] = useState(false);

  return (
    <>
      <AboveHeaderBarPrimary>
        <AboveHeaderPrimaryWrap>
          <AboveHeaderPrimaryWrapSection>
            <HeaderSectionUl>
              <HeaderSectionLink onClick={handleHome}>Home</HeaderSectionLink>
              <HeaderSectionLink>Sobre Nós</HeaderSectionLink>
              <HeaderSectionLink>Seja um Representante</HeaderSectionLink>{" "}
              <HeaderSectionLink
                onClick={handleNav}
                onMouseEnter={() => setShowProductModal(true)}
                onMouseLeave={() => setShowProductModal(false)}
              >
                Produtos
                <ArrowDownSpan>
                  <CaretDown size={16} />
                </ArrowDownSpan>
              </HeaderSectionLink>
              <HeaderSectionLink>Novidades</HeaderSectionLink>
              <HeaderSectionLink>Contato</HeaderSectionLink>
            </HeaderSectionUl>
          </AboveHeaderPrimaryWrapSection>
        </AboveHeaderPrimaryWrap>
        {showProductModal && <ProductModal />}
      </AboveHeaderBarPrimary>
    </>
  );
}
