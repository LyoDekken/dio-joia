import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
  align-items: center;
  bottom: 0px;
  box-sizing: border-box;
  color: #4a4a4a;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 15px;
  justify-content: flex-start;
  left: 0px;
  line-height: 27px;
  margin-left: auto;
  margin-right: auto;
  max-width: 800px;
  min-height: 90vh;
  outline: none;
  position: relative;
  right: 0px;
  word-wrap: break-word;

  @media (max-width: 1024px) {
    flex-wrap: wrap;
    max-width: 1024px;
    min-height: 70vh;
  }

  @media (max-width: 767px) {
    max-width: 767px;
    min-height: 70vh;
  }
`;

export const CoverContent = styled.div`
  align-content: flex-start;
  bottom: 0px;
  box-sizing: border-box;
  color: #4a4a4a;
  margin-bottom: 100px;
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
  word-wrap: break-word;
`;

export const StyledContainer = styled.div`
  @media (max-width: 1024px) {
    flex-direction: column;
    margin: 0 auto;
  }

  align-content: flex-start;
  bottom: 0px;
  flex-direction: row;
  box-sizing: border-box;
  color: #4a4a4a;
  cursor: default;
  display: flex;
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
  word-wrap: break-word;
`;

export const CoverInfo = styled.div`
  @media (max-width: 1024px) {
    margin: 0 auto;
    align-items: center;
  }

  @media (max-width: 921px) {
    align-items: center;
  }

  bottom: 0px;
  box-sizing: border-box;
  color: #4a4a4a;
  cursor: default;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 15px;
  justify-content: center;
  left: 0px;
  line-height: 27px;
  outline: none;
  padding: 10px;
  margin-left: 15px;
  position: relative;
  right: 0px;
  top: 0px;
  width: 100%;
  word-wrap: break-word;
`;

export const CoverText = styled.div`
  @media (max-width: 921px) {
    text-align: center;
  }

  color: #fcfcfc;
  margin-bottom: 20px;
  font-size: 28px;
  line-height: 34px;
  font-family: "Josefin Sans", Sans-serif;
  display: flex;
  font-weight: 100;
  color: white;
  max-width: 400px;
`;

export const StyledSVGContainer = styled.div`
  box-sizing: border-box;
  color: #4a4a4a;
  cursor: default;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 15px;
  line-height: 0px;
  text-align: center;
  word-wrap: break-word;
`;

export const StyledSVGContainerWrapper = styled.div`
  @media (max-width: 921px) {
    justify-content: space-between;
  }

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
  outline: none;
  padding: 10px;
  position: relative;
  right: 0px;
  top: 0px;
  width: 100%;
  word-wrap: break-word;
`;

export const StyledSVG = styled(Image)`
  @media (max-width: 1024px) {
    margin: 0 auto;
  }

  @media (max-width: 921px) {
    display: none;
  }

  bottom: 0px;
  box-sizing: border-box;
  color: #ffffff;
  cursor: default;
  display: block;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 288px;
  height: 288px;
  left: 0px;
  line-height: 288px;
  outline: none;
  position: relative;
  right: 0px;
  text-align: center;
  top: 0px;
  width: 1em;
  word-wrap: break-word;

  :not(:root) {
    overflow: hidden;
  }

  ::before {
    left: 50%;
    position: absolute;
    transform: translateX(-50%);
  }
`;

export const Button = styled.button`
  background-color: #5f7e5d;
  color: white;
  padding: 20px 10px;
  border: none;
  cursor: pointer;
  max-width: 250px;
  white-space: normal;
  text-align: center;

  &:hover {
    background-color: #4d734f;
  }
`;
