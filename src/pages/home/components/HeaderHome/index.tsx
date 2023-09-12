import {
  FacebookLogo,
  InstagramLogo,
  PinterestLogo,
  User,
  MagnifyingGlass,
  Bag,
} from "@phosphor-icons/react";

import {
  AboveHeaderBar,
  AboveHeaderWrapTest,
  HeaderAboveSectionLeft,
  HeaderAboveSectionRight,
  HeaderLogoSite,
  HeaderSectionLeft,
  HeaderSectionRight,
  HeaderSocialIcon,
  HeaderSvgLeft,
  HeaderSvgRight,
  SiteIdentity,
  AboveHeaderWrap,
} from "./styles";
import HeadePrimaryHome from "../HeaderPrimaryHome";
import { useRouter } from "next/router";

export default function HeaderHome() {
  const leftIcons = [FacebookLogo, InstagramLogo, PinterestLogo];
  const rightIcons = [User, MagnifyingGlass, Bag];

  const router = useRouter();

  const handleCar = () => {
    router.push("/carrinho");
  };

  const handleBagClick = () => {
    handleCar();
  };

  return (
    <>
      <AboveHeaderBar>
        <AboveHeaderWrap>
          <AboveHeaderWrapTest>
            <HeaderSectionLeft>
              <HeaderSocialIcon>
                {leftIcons.map((IconComponent, index) => (
                  <HeaderSvgLeft key={index}>
                    <IconComponent
                      size={26}
                      style={{
                        cursor: "pointer",
                      }}
                    />
                  </HeaderSvgLeft>
                ))}
              </HeaderSocialIcon>
              <HeaderAboveSectionLeft />
            </HeaderSectionLeft>
            <SiteIdentity>
              <HeaderLogoSite
                src={
                  "https://diojoiasemprata.com.br/wp-content/uploads/2022/04/dio-header-07.png"
                }
              />
            </SiteIdentity>
            <HeaderSectionRight>
              <HeaderAboveSectionRight />
              <HeaderSocialIcon>
                {rightIcons.map((IconComponent, index) => (
                  <HeaderSvgRight key={index}>
                    {IconComponent === Bag ? (
                      <IconComponent
                        size={26}
                        style={{
                          cursor: "pointer",
                        }}
                        onClick={handleBagClick}
                      />
                    ) : (
                      <IconComponent
                        size={26}
                        style={{
                          cursor: "pointer",
                        }}
                      />
                    )}
                  </HeaderSvgRight>
                ))}
              </HeaderSocialIcon>
            </HeaderSectionRight>
          </AboveHeaderWrapTest>
        </AboveHeaderWrap>
      </AboveHeaderBar>
      <HeadePrimaryHome />
    </>
  );
}
