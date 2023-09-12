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
  HeaderSectionLeft,
  HeaderSectionRight,
  HeaderSocialIcon,
  HeaderSvgLeft,
  HeaderSvgRight,
  AboveHeaderWrap,
  HandleHamburger,
} from "./styles";
import HeaderPrimary from "../HeaderPrimary";
import { useRouter } from "next/router";
import { useState } from "react";

export default function HeaderHoverify({ isVisible }: any) {
  const router = useRouter();
  const [isTabletMenuOpen, setIsTabletMenuOpen] = useState(false);

  const handleCar = () => {
    router.push("/carrinho");
  };

  const handleBagClick = () => {
    handleCar();
  };

  if (!isVisible) {
    return null;
  }

  const leftIcons = [FacebookLogo, InstagramLogo, PinterestLogo];
  const rightIcons = [User, MagnifyingGlass, Bag];

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
                <HandleHamburger onClick={() => setIsTabletMenuOpen(!isTabletMenuOpen)}>
                  ☰
                </HandleHamburger>
              </HeaderSocialIcon>
            </HeaderSectionRight>
          </AboveHeaderWrapTest>
        </AboveHeaderWrap>
      </AboveHeaderBar>
      <HeaderPrimary />
    </>
  );
}
