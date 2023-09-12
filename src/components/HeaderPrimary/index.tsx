import React, { useState } from "react";
import { CaretDown } from "@phosphor-icons/react";
import { useRouter } from "next/router";
import {
  AboveHeaderBarPrimary,
  AboveHeaderPrimaryWrapSection,
  HeaderSectionUl,
  AboveHeaderPrimaryWrap,
  HeaderSectionLink,
} from "./styles";
import ProductModalContent from "@/components/ProductModal";

export default function HeaderPrimary() {
  const router = useRouter();

  const handleHome = () => {
    router.push("/");
  };

  const [isModalOpen, setModalOpen] = useState(false);
  const [modalTimeout, setModalTimeout] = useState<NodeJS.Timeout | number>();

  const handleNav = () => {
    router.push("/produtos");
    clearTimeout(modalTimeout);
  };

  const handleMouseEnterModal = () => {
    setModalOpen(true);

    clearTimeout(modalTimeout);
  };

  const handleMouseLeaveModal = () => {
    const timeoutId = setTimeout(() => {
      setModalOpen(false);
    }, 5000);

    setModalTimeout(timeoutId);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <AboveHeaderBarPrimary>
        <AboveHeaderPrimaryWrap>
          <AboveHeaderPrimaryWrapSection>
            <HeaderSectionUl>
              <HeaderSectionLink onClick={handleHome}>Home</HeaderSectionLink>
              <HeaderSectionLink>Sobre Nós</HeaderSectionLink>
              <HeaderSectionLink>Seja um Representante</HeaderSectionLink>
              <HeaderSectionLink
                onClick={handleNav}
                onMouseEnter={handleMouseEnterModal}
                onMouseLeave={handleMouseLeaveModal}
              >
                Produtos
              </HeaderSectionLink>
              <CaretDown
                cursor={"pointer"}
                onClick={handleNav}
                style={{
                  color: "#fff",
                  margin: "auto 0",
                }}
                size={16}
              />
              <HeaderSectionLink>Novidades</HeaderSectionLink>
              <HeaderSectionLink>Contato</HeaderSectionLink>
            </HeaderSectionUl>
          </AboveHeaderPrimaryWrapSection>
        </AboveHeaderPrimaryWrap>
        {isModalOpen && (
          <ProductModalContent
            onMouseEnter={handleMouseEnterModal}
            onMouseLeave={handleMouseLeaveModal}
            onClose={handleCloseModal}
          />
        )}
      </AboveHeaderBarPrimary>
    </>
  );
}
