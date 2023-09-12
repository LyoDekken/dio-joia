import styled from "styled-components";

export const AboveHeaderBar = styled.section`
  position: relative;
  background-color: #87a686;
  background-image: none;
  border-bottom: 0px;
  box-sizing: inherit;
  color: #4a4a4a;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 15px;
  line-height: 27.8571px;
`;

export const AboveHeaderWrap = styled.div`
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
  align-items: center;
  box-sizing: inherit;
  color: #4a4a4a;
  flex-wrap: wrap;
  display: flex;
  justify-content: space-between;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 15px;
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

export const HeaderAboveSectionRight = styled.div`
  @media (max-width: 767px) {
    display: none;
  }

  -webkit-font-smoothing: antialiased;
  align-items: center;
  box-sizing: border-box;
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
  margin: 0px;
  min-height: 0px;
  outline: none;
  overflow-wrap: anywhere;
  padding: 10px 0;
  word-wrap: anywhere;

  :last-child {
    padding-right: 0px;
  }
`;

export const HeaderAboveSectionLeft = styled.div`
  @media (max-width: 767px) {
    display: none;
  }

  -webkit-font-smoothing: antialiased;
  align-items: center;
  box-sizing: border-box;
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
  margin: 0px;
  min-height: 0px;
  outline: none;
  overflow-wrap: anywhere;
  padding: 10px;
  word-wrap: anywhere;

  :last-child {
    padding-left: 0px;
  }
`;

export const HeaderSvgLeft = styled.div`
  @media (max-width: 921px) {
    height: 24px;
    width: 24px;
    margin-right: 20px;
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
    width: 24px;
    margin-left: 20px;
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

export const HeaderLogoSite = styled.img`
  @media (max-width: 921px) {
    max-width: 120px;
  }

  @media (max-width: 544px) {
    max-width: 200px;
  }

  @media (max-width: 543px) {
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

export const HandleHamburger = styled.button`
  display: none;

  @media (max-width: 768px) {
    display: block; 
  }
`;
