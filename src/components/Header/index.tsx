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
} from "./styles";
import HeaderPrimary from "../HeaderPrimary";

export default function HeaderHoverify({ isVisible }: any) {
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
                    <IconComponent
                      size={26}
                      style={{
                        cursor: "pointer",
                      }}
                    />
                  </HeaderSvgRight>
                ))}
              </HeaderSocialIcon>
            </HeaderSectionRight>
            
          </AboveHeaderWrapTest>
        </AboveHeaderWrap>
      </AboveHeaderBar>
      <HeaderPrimary />
    </>
  );
}
