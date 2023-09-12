import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import {
  FacebookLogo,
  InstagramLogo,
  PinterestLogo,
  User,
  MagnifyingGlass,
  Bag,
  List,
  X,
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
  MenuButton,
  ImageLeft,
  MenuButtonIcon,
  BagValue,
} from "./styles";
import HeadePrimaryHome from "../HeaderPrimaryHome";
import ModalContent from "@/components/ModalContent";

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

  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("@diojoiasemprata-cart-test");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  const [isModalOpen, setModalOpen] = useState(false);
  const [isMenuButtonActive, setMenuButtonActive] = useState(false);

  const toggleMenu = () => {
    setModalOpen(!isModalOpen);

    setMenuButtonActive(!isMenuButtonActive);
  };

  return (
    <>
      <AboveHeaderBar>
        <AboveHeaderWrap>
          <AboveHeaderWrapTest>
            <HeaderSectionLeft>
              <HeaderSocialIcon>
                <ImageLeft
                  src="https://diojoiasemprata.com.br/wp-content/uploads/2022/04/dio-logo-light-10.png"
                  alt="Logo"
                  width={1000}
                  height={1000}
                />

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
                alt=""
                width={1000}
                height={1000}
                src={
                  "https://diojoiasemprata.com.br/wp-content/uploads/2022/04/dio-header-07.png"
                }
              />
            </SiteIdentity>
            <HeaderSectionRight>
              <HeaderAboveSectionRight />
              <HeaderSocialIcon>
                <>
                  {rightIcons.map((IconComponent, index) => (
                    <HeaderSvgRight key={index}>
                      {IconComponent === Bag ? (
                        <div style={{ position: "relative" }}>
                          <Bag
                            onClick={handleBagClick}
                            size={32}
                            style={{
                              position: "relative",
                              cursor: "pointer",
                            }}
                          />
                          <BagValue>{cart.length}</BagValue>
                        </div>
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
                  <MenuButtonIcon onClick={toggleMenu}>
                    {isMenuButtonActive ? (
                      <X
                        size={26}
                        style={{
                          padding: "5px",
                          cursor: "pointer",
                        }}
                      />
                    ) : (
                      <List
                        size={26}
                        style={{
                          padding: "5px",
                          cursor: "pointer",
                        }}
                      />
                    )}
                  </MenuButtonIcon>
                </>
                <MenuButton onClick={toggleMenu}>
                  {isMenuButtonActive ? (
                    <X
                      size={26}
                      style={{
                        padding: "5px",
                        cursor: "pointer",
                      }}
                    />
                  ) : (
                    <List
                      size={26}
                      style={{
                        padding: "5px",
                        cursor: "pointer",
                      }}
                    />
                  )}
                </MenuButton>
              </HeaderSocialIcon>
              {isModalOpen && <ModalContent />}
            </HeaderSectionRight>
          </AboveHeaderWrapTest>
        </AboveHeaderWrap>
      </AboveHeaderBar>
      <HeadePrimaryHome />
    </>
  );
}
