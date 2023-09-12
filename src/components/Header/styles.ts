import styled from "styled-components";
import Image from "next/image";

export const AboveHeaderBar = styled.section`
  @media (min-width: 921px) {
    background-color: #87A686;
  }

  @media (max-width: 921px) {
    background-color: #87A686;
  }

  position: relative;
  background-color: #87a686;
  background-image: none;
  border-bottom: 0px;
  box-sizing: inherit;
  color: #4a4a4a;
  display: block;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 15px;
  line-height: 27.8571px;
`;

export const AboveHeaderWrap = styled.div`
  @media (min-width: 554px) {
    max-width: 100%;
  }

  @media (max-width: 554px) {
    max-width: 100%;
    min-height: 100px;
  }

  @media (max-width: 922px) {
    max-width: 1240px;
    margin: 0 10px;
  }

  align-content: center;
  box-sizing: inherit;
  color: #4a4a4a;
  display: grid;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 15px;
  line-height: 27.8571px;
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
  min-height: 50px;
  padding: 0 20px;
  margin: 0 70px;
`;

export const AboveHeaderWrapTest = styled.div`
  @media (max-width: 544px) {
    margin-top: 5px;
  }

  align-items: center;
  box-sizing: inherit;
  color: #4a4a4a;
  column-gap: 20px;
  display: grid;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 15px;
  grid-template-columns: 1fr 1fr;
  line-height: 27.8571px;
  overflow-wrap: anywhere;
  word-wrap: anywhere;
`;

export const HeaderSectionLeft = styled.div`
  box-sizing: inherit;
  align-items: center;
  color: #4a4a4a;
  display: flex;
  flex-wrap: wrap;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 15px;
  height: 100%;
  line-height: 27.8571px;
  min-height: 0px;
  word-wrap: anywhere;
`;

export const HeaderSectionRight = styled.div`
  align-items: center;
  box-sizing: inherit;
  color: #4a4a4a;
  display: flex;
  flex-wrap: wrap;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 15px;
  height: 100%;
  padding-right: 15px;
  justify-content: flex-end;
  line-height: 27.8571px;
  min-height: 0px;
  word-wrap: anywhere;
`;

export const HeaderAboveSectionRight = styled.div`
  align-items: center;
  box-sizing: inherit;
  color: #4a4a4a;
  display: flex;
  flex-grow: 1;
  flex-wrap: wrap;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 15px;
  height: 100%;
  justify-content: flex-start;
  line-height: 27.8571px;
  min-height: 0px;
  outline: none;
  padding: 0px 10px;
  word-wrap: anywhere;

  :last-child {
    padding-left: 0px;
  }
`;

export const HeaderAboveSectionLeft = styled.div`
  align-items: center;
  box-sizing: inherit;
  color: #4a4a4a;
  display: flex;
  flex-grow: 1;
  flex-wrap: wrap;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 15px;
  height: 100%;
  justify-content: flex-end;
  line-height: 27.8571px;
  min-height: 0px;
  padding: 0px 10px;
  word-wrap: anywhere;

  :last-child {
    padding-right: 0px;
  }
`;

export const HeaderSvgLeft = styled.div`
  @media (max-width: 921px) {
    height: 24px;
    width: 24px;
    margin-right: 20px;
  }

  @media (max-width: 544px) {
    display: none;
  }

  box-sizing: inherit;
  display: block;
  color: #fcfcfc;
  fill: #fcfcfc;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 15px;
  padding-right: 10px;
  line-height: 15px;
  outline: none;
  transition: none 0s ease 0s;
  word-wrap: anywhere;

  :not(:root) {
    overflow: hidden;
  }
`;

export const HeaderSvgRight = styled.div`
  @media (max-width: 921px) {
    height: 24px;
    width: 36px;
    margin-right: 10px;
    padding-right: 10px;
    padding-left: 0px;
  }

  @media (max-width: 544px) {
    display: none;
  }

  box-sizing: inherit;
  display: block;
  color: #fcfcfc;
  fill: #fcfcfc;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 15px;
  padding-left: 10px;
  line-height: 15px;
  outline: none;
  transition: none 0s ease 0s;
  word-wrap: anywhere;

  :not(:root) {
    overflow: hidden;
  }
`;

export const HeaderSocialIcon = styled.div`
  @media (max-width: 921px) {
    position: absolute;
  }

  box-sizing: inherit;
  color: #4a4a4a;
  display: flex;
  align-items: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 15px;
  line-height: 27.8571px;
  outline: none;
  flex-direction: row;
  word-wrap: anywhere;
`;

export const HeaderLogoSite = styled(Image)`
  @media (max-width: 921px) {
    max-width: 120px;
  }

  @media (max-width: 544px) {
    display: none;
    max-width: 100px;
  }

  box-sizing: inherit;
  color: #4d734f;
  cursor: pointer;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 15px;
  height: auto;
  line-height: 15px;
  max-width: 90px;
  text-align: center;
  transition: all 0.2s linear 0s;
  vertical-align: middle;
  word-wrap: anywhere;
`;

export const SiteIdentity = styled.div`
  align-items: center;
  align-self: center;
  box-sizing: inherit;
  color: #4a4a4a;
  display: inline-flex;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 15px;
  line-height: 1;
  padding: 1em 0px;
  transition: all 0.2s linear 0s;
  vertical-align: middle;
  word-wrap: anywhere;
`;

export const ImageLeft = styled(Image)`
  @media (min-width: 544px) {
    display: none;
  }

  max-width: 160px;
  max-height: 56px;
  width: 160px;
  height: 56px;
  box-sizing: inherit;
  display: flex;
  align-items: center;
  outline: none;
  flex-direction: row;
  word-wrap: anywhere;
  display: flex;
  cursor: pointer;
  justify-content: flex-start;
  align-self: flex-start;
  align-items: flex-start;
`;

export const MenuButtonIcon = styled.div`
  @media (min-width: 767px) {
    display: none;
  }

  @media (max-width: 547px) {
    display: none;
  }

  background-color: white;
  box-sizing: inherit;
  height: 30px;
  width: 30px;
  margin-left: 5px;
  color: #4a4a4a;
  display: flex;
  align-items: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 15px;
  line-height: 27.8571px;
  outline: none;
  flex-direction: row;
  word-wrap: anywhere;
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-self: center;
  align-items: center;
`;

export const BagValue = styled.p`
  position: absolute;
  top: 50%;

  left: 50%;
  transform: translate(-50%, -50%);
`;

export const MenuButton = styled.div`
  @media (min-width: 544px) {
    display: none;
  }

  background-color: white;
  box-sizing: inherit;
  height: 30px;
  width: 30px;
  color: #4a4a4a;
  display: flex;
  align-items: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 15px;
  line-height: 27.8571px;
  outline: none;
  flex-direction: row;
  word-wrap: anywhere;
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-self: center;
  align-items: center;
`;
