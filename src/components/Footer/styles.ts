import styled from "styled-components";

export const Container = styled.div`
  align-content: flex-start;
  bottom: 0px;
  background: #f2f2f2;
  box-sizing: border-box;
  color: #4a4a4a;
  cursor: default;
  display: flex;
  flex-wrap: wrap;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 15px;
  left: 0px;
  line-height: 27.8571px;
  outline: none;
  padding: 10px;
  position: relative;
  right: 0px;
  top: 0px;
  width: 100%;
`;

export const FooterContainer = styled.footer`
  align-content: flex-start;
  bottom: 0px;
  box-sizing: border-box;
  color: #4a4a4a;
  cursor: default;
  display: flex;
  flex-wrap: wrap;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 15px;
  left: 0px;
  line-height: 27.8571px;
  padding: 10px;
  position: relative;
  right: 0px;
  top: 0px;
  width: 100%;
`;

export const FooterSection = styled.section`
  --align-content: initial;
  --align-items: initial;
  --align-self: initial;
  --flex-basis: initial;
  --flex-direction: initial;
  --flex-grow: initial;
  --flex-shrink: initial;
  --flex-wrap: initial;
  --gap: initial;
  --justify-content: initial;
  --order: initial;
  --swiper-navigation-size: 44px;
  --swiper-pagination-bullet-horizontal-gap: 6px;
  --swiper-pagination-bullet-size: 6px;
  --swiper-theme-color: #000;
  --widgets-spacing: 20px;
  align-self: inherit;
  bottom: 0px;
  box-sizing: border-box;
  color: #4a4a4a;
  cursor: default;
  flex: unset;
  flex-basis: auto;
  flex-grow: 0;
  flex-shrink: 1;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 15px;
  left: 0px;
  line-height: 27.8571px;
  order: 0;
  position: relative;
  right: 0px;
  top: 0px;
  width: 100%;
`;

export const FooterContent = styled.div`
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  padding: 10px;
  flex-direction: row;
  box-sizing: border-box;

  @media (max-width: 1140px) {
    padding: 0 20px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
`;

export const SpaceContent = styled.div`
  display: flex;
  position: relative;
  padding: 32px 0px 0px 0px;
`;

export const Divider = styled.div`
  text-align: center;
  padding-top: 2px;
  display: flex;
  margin: 0 auto;

  box-sizing: border-box;
  padding-bottom: 2px;
`;

export const DividerSeparator = styled.span`
  text-align: center;
  padding-top: 2px;
  padding-bottom: 2px;
  border-width: 1px;
  border-top: 1px solid #658b6333;
  width: 900px;
  direction: ltr;
`;

export const AboutUs = styled.div`
  width: 100%;
  align-content: flex-start;
`;

export const AboutInput = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
  font-family: "Lato", Sans-serif;

  &::placeholder {
    color: #7e7e7e;
  }
`;

export const AboutTile = styled.h2`
  margin-bottom: 20px;
  font-size: 28px;
  color: #bf9877;
  font-weight: 300;
  line-height: 34px;
  font-family: "Josefin Sans", Sans-serif;
  writing-mode: inherit;
`;

export const AboutText = styled.p`
  text-align: left;
  color: #7e7e7e;
  font-size: 17px;
  line-height: 27px;
  font-weight: 400;
  font-family: "Lato", Sans-serif;
`;

export const Column = styled.div`
  position: relative;
  flex-wrap: wrap;
  align-content: flex-start;
  padding: 10px;
  width: 33.3%;
  display: flex;

  @media (max-width: 1140px) {
    padding: 30px 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;

export const FooterInfos = styled.div`
  @media (max-width: 870px) {
    display: flex;
    flex-direction: column;
  }

  display: flex;
  margin: 10px 0;
  justify-content: center;
  flex-direction: row;
`;

export const FooterContentInfos = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1200px) {
    padding: 0 20px;
  }
`;

export const SocialIcons = styled.div`
  margin-top: 20px;

  img {
    width: 30px;
    margin: 0 10px;
  }
`;

export const Icon = styled.button`
  margin: 0 10px 0 0;
  padding: 0 8px 0 0;
  color: #668566;
  background-color: transparent;
  border-color: transparent;
  cursor: pointer;
`;

export const FooterText = styled.a`
  padding: 10px;
  color: #9fa49f;

  &:hover {
    cursor: pointer;
  }
`;

export const ColumIcon = styled.div`
  display: flex;
`;

export const FooterRise = styled.div`
  display: flex;
`;

export const StyledDiv = styled.div`
  bottom: 0px;
  box-sizing: border-box;
  color: #4a4a4a;

  flex-wrap: wrap;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 15px;
  justify-content: flex-start;
  left: 0px;
  line-height: 27.8571px;
  margin-left: auto;
  margin-right: auto;
  max-width: 1140px;
  outline: none;
  position: relative;
  right: 0px;
  top: 0px;
`;

export const StyledImage = styled.img`
  width: 60px;
  height: auto;
`;

export const StyledDivImageContainer = styled.div`
  align-content: center;
  bottom: 0px;
  box-sizing: border-box;
  color: #4a4a4a;
  cursor: default;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  font-size: 15px;
  left: 0px;
  line-height: 27.8571px;
  outline: none;
  padding: 10px;
  position: relative;
  right: 0px;
  top: 0px;
  width: 100%;
`;

export const StyledDivImage = styled.div`
  bottom: 0px;
  box-sizing: border-box;
  color: #4a4a4a;
  cursor: default;
  font-size: 15px;
  left: 0px;
  line-height: 27.8571px;
  outline: none;
  position: relative;
  right: 0px;
  top: 0px;
  transition: background 0.3s ease 0s, border 0.3s ease 0s,
    border-radius 0.3s ease 0s, box-shadow 0.3s ease 0s, transform 0.4s ease 0s;

  ::before {
    content: "";
    height: 100%;
    left: 0px;
    pointer-events: none;
    position: absolute;
    top: 0px;
    width: 100%;
    z-index: -1;
  }

  ::after {
    content: "";
    height: 100%;
    left: 0px;
    pointer-events: none;
    position: absolute;
  }
`;

export const Paragraph = styled.p`
  box-sizing: border-box;
  color: #302f2f;
  cursor: default;
  font-family: "Source Sans Pro", sans-serif;
  font-size: 100%;
  font-style: inherit;
  font-weight: inherit;
  line-height: 22.2857px;
  margin: 0px;
  margin-bottom: 1.75em;
  outline: none;
  padding: 0px;
  text-align: center;
  vertical-align: baseline;
`;

export const StyledParagraph = styled.div`
  align-content: center;
  align-items: center;
  bottom: 0px;
  box-sizing: border-box;
  color: #4a4a4a;
  cursor: default;
  display: flex;
  flex-wrap: wrap;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 15px;
  left: 0px;
  line-height: 27.8571px;
  outline: none;
  padding: 10px;
  position: relative;
  right: 0px;
  top: 0px;
  width: 100%;
`;

export const StyledDivFooter = styled.div`
  align-self: auto;
  bottom: 0px;
  display: flex;
  box-sizing: border-box;
  color: #4a4a4a;
  background: #f1f1f1;
  flex-basis: auto;
  flex-grow: 0;
  flex-shrink: 1;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 15px;
  left: 0px;
  line-height: 27.8571px;
  order: 0;
  outline: none;
  position: relative;
  right: 0px;
  top: 0px;
  transition: background 0.3s ease 0s, border 0.3s ease 0s,
    border-radius 0.3s ease 0s, box-shadow 0.3s ease 0s;
`;
