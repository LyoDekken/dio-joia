import React from "react";

import {
  FacebookLogo,
  InstagramLogo,
  PinterestLogo,
} from "@phosphor-icons/react";

import Image from "next/image";
import LogoFooter from "@/assets/dio-logo.png";

import {
  FooterContainer,
  ColumIcon,
  Container,
  Column,
  FooterContent,
  FooterContentInfos,
  FooterInfos,
  FooterSection,
  FooterText,
  Icon,
  AboutUs,
  SocialIcons,
  SpaceContent,
  DividerSeparator,
  Divider,
  AboutTile,
  AboutText,
  StyledDiv,
  StyledImage,
  StyledParagraph,
  StyledDivFooter,
  AboutInput,
  StyledDivImage,
  StyledDivImageContainer,
  Paragraph,
} from "./styles";

const FooterHomeHoverify = () => {
  const Icons = [FacebookLogo, InstagramLogo, PinterestLogo];

  return (
    <>
      <Container>
        <FooterContainer>
          <FooterSection>
            <FooterContent>
              <Column>
                <Image
                  src={LogoFooter}
                  alt="Image Logo"
                  width={230}
                  height={80}
                />
                <SocialIcons>
                  <ColumIcon>
                    {Icons.map((IconComponent, index) => (
                      <Icon key={index}>
                        <IconComponent size={26} />
                      </Icon>
                    ))}
                  </ColumIcon>
                </SocialIcons>
              </Column>
              <Column>
                <AboutUs>
                  <AboutTile>sobre nós</AboutTile>
                  <AboutText>
                    Vivemos na época que a autoestima impacta diretamente a vida
                    das pessoas. Joias para todos os estilos, gostos e bolsos.
                  </AboutText>
                </AboutUs>
              </Column>
              <Column>
                <AboutUs>
                  <AboutTile>fique por dentro de nossas novidades</AboutTile>
                  <AboutInput type="text" placeholder="Seu e-mail" />
                </AboutUs>
              </Column>
            </FooterContent>
            <SpaceContent>
              <Divider>
                <DividerSeparator />
              </Divider>
            </SpaceContent>
          </FooterSection>
          <FooterSection>
            <FooterContentInfos>
              <FooterInfos>
                <FooterText>Home</FooterText>
                <FooterText>Sobre Nós</FooterText>
                <FooterText>Revenda</FooterText>
                <FooterText>Produtos</FooterText>
                <FooterText>Contato</FooterText>
                <FooterText>Política de Troca</FooterText>
                <FooterText>Política de Frete</FooterText>
                <FooterText>Política de Privacidade</FooterText>
              </FooterInfos>
            </FooterContentInfos>
          </FooterSection>
        </FooterContainer>
      </Container>
      <FooterRise />
    </>
  );
};

export default FooterHomeHoverify;

const FooterRise = () => {
  return (
    <StyledDivFooter>
      <StyledDiv>
        <StyledDivImageContainer>
          <StyledDivImage>
            <StyledImage
              src="https://risestudio.com.br/public_imgs/rise-signature-mobile-dark.png"
              alt="Logo"
            />
          </StyledDivImage>
        </StyledDivImageContainer>

        <StyledParagraph>
          <Paragraph>
            Diô Joias em Prata © 2022 – CNPJ: 45.581.462/0001-88 / Todos
            direitos reservados
          </Paragraph>
        </StyledParagraph>
      </StyledDiv>
    </StyledDivFooter>
  );
};
