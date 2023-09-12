import { CaretDown } from "@phosphor-icons/react";
import {
  AboveHeaderBarPrimary,
  AboveHeaderPrimaryWrapSection,
  HeaderSectionUl,
  AboveHeaderPrimaryWrap,
  HeaderSectionLink,
  ArrowDownSpan,
} from "./styles";
import { useRouter } from "next/router";
import ProductModal from "@/pages/home/components/ProductModal";

export default function HeadePrimary() {
  const router = useRouter();

  const handleHome = () => {
    router.push("/");
  };

  const handleNav = () => {
    router.push("/produtos");
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
              <HeaderSectionLink onClick={handleNav}>
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
      </AboveHeaderBarPrimary>
    </>
  );
}
