import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div`
  box-sizing: inherit;
  color: #4a4a4a;
  background-color: #ffffff;
  font-size: 15px;
  line-height: 27.8571px;
`;

export const ContainerArticle = styled.div`
  @media (max-width: 960px) {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 0 auto;
  }

  bottom: 0px;
  box-sizing: inherit;
  color: #4a4a4a;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 15px;
  left: 0px;
  display: flex;
  justify-content: space-between;
  line-height: 27.8571px;
  padding-top: 80px;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  right: 0px;
  top: 0px;
`;

export const DivImage = styled.div`
  bottom: 0px;
  box-sizing: inherit;
  color: #4a4a4a;
  float: left;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 15px;
  left: 0px;
  line-height: 27.8571px;
  margin-bottom: 2em;
  opacity: 1;
  right: 0px;
  top: 0px;
  transition: opacity 0.25s ease-in-out 0s;
  width: 48%;

  @media (min-width: 922px) {
    width: 50%;
  }

  @media (max-width: 1200px) {
    width: 100%;
    margin-left: 20px;
  }
`;

export const ZoomImage = styled(Image)`
  @media (max-width: 960px) {
    max-width: 500px;
    margin: 0 auto;
    height: 600px;
  }

  @media (max-width: 574px) {
    max-width: 400px;
    margin: 0 auto;
    height: 400px;
  }

  @media (max-width: 472px) {
    max-width: 350px;
    margin: 0 auto;
    height: 400px;
  }

  box-shadow: none;
  box-sizing: inherit;
  color: #4a4a4a;
  display: block;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 15px;
  height: 1000px;
  line-height: 27.8571px;
  max-height: none;
  max-width: none;
  opacity: 1;
  vertical-align: middle;
  max-width: 600px;
`;

export const ContainerSumary = styled.div`
  padding-left: 30px;
  box-sizing: inherit;
  clear: none;
  color: #4a4a4a;
  float: right;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 15px;
  line-height: 27.8571px;
  margin-bottom: 2em;
  width: 48%;
`;

export const ContainerSumaryTitle = styled.h1`
  box-sizing: inherit;
  clear: none;
  color: #3d3d3d;
  display: block;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 30px;
  font-style: inherit;
  font-weight: 400;
  line-height: 36px;
  margin: 0px 0px 0.5em;
  margin-bottom: 0.2em;
  margin-top: 0px;
  padding: 0px;
  vertical-align: baseline;
`;

export const ContainerDescription = styled.div`
  box-sizing: inherit;
  clear: both;
  color: #4a4a4a;
  display: block;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 15px;
  line-height: 27.8571px;
  margin-bottom: 2em;
  outline: none;
  width: 100%;
`;

export const ContainerDescriptionTitle = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  bottom: 0px;
  box-sizing: border-box;
  color: #4a4a4a;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 100%;
  font-style: inherit;
  font-weight: inherit;
  left: 0px;
  line-height: 27.8571px;
  list-style: outside none none;
  margin: 0px 0px 1em;
  margin-left: 20px;
  outline: none;
  overflow: hidden;
  padding: 0px;
  position: relative;
  right: 0px;
  top: 0px;
  vertical-align: baseline;
`;

export const Description = styled.a`
  background-color: transparent;
  box-sizing: inherit;
  color: inherit;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 15px;
  font-weight: 700;
  line-height: 27.8571px;
  list-style: outside none none;
  outline: none;
  padding: 0.5em 0px;
  text-align: left;
  text-decoration: none;
  text-shadow: inherit;
  transition: all 0.2s linear 0s;
`;

export const DescriptionBorder = styled.li`
  background: 0px 0px;
  border-radius: 0px;
  bottom: 0px;
  box-sizing: inherit;
  color: #4a4a4a;
  display: inline-block;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 100%;
  font-style: inherit;
  font-weight: inherit;
  left: 0px;
  line-height: 27.8571px;
  list-style: outside none none;
  margin: 0px 1em 0px 0px;
  outline: none;
  padding: 0px;
  position: relative;
  right: 0px;
  top: 0px;
  vertical-align: baseline;
  z-index: 2;
`;

export const DescriptionInfo = styled.div`
  box-sizing: inherit;
  color: #4a4a4a;
  counter-reset: footnotes 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 15px;
  line-height: 27.8571px;
  margin: 0px 0px 1.2em;
  outline: none;
  overflow-wrap: break-word;
  padding: 0px;
  word-wrap: break-word;
`;

export const DescriptionText = styled.p`
  box-sizing: inherit;
  color: #4a4a4a;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 100%;
  font-style: inherit;
  font-weight: inherit;
  line-height: 27.8571px;
  margin: 0px;
  margin-bottom: 1.6em;
  outline: none;
  padding: 0px;
  vertical-align: baseline;
  word-wrap: break-word;
`;

export const NavContainer = styled.nav`
  box-sizing: inherit;
  color: #777777;
  display: block;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 0.92em;
  line-height: 27.8571px;
  margin: 0px 0px 1em;
  padding: 0px;

  &::after {
    clear: both;
    content: " ";
    display: table;
  }

  &::before {
    content: " ";
    display: table;
  }
`;

export const NavContainerInfoText = styled.p`
  box-sizing: inherit;
  color: #4a4a4a;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 22.5px;
  font-style: inherit;
  font-weight: 700;
  line-height: 41.7857px;
  margin: 0px 0px 0.2em;
  margin-bottom: 1.75em;
  padding: 0px;
  vertical-align: baseline;
`;

export const NavContainerInfoA = styled.a`
  background-color: transparent;
  box-sizing: inherit;
  color: #777777;
  cursor: pointer;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 13.8px;
  line-height: 27.8571px;
  text-decoration: none;
  transition: all 0.2s linear 0s;

  &:active {
    outline: 0px;
  }

  &:focus {
    color: #777777;
    outline: dotted thin;
    text-decoration: none;
  }

  &:hover {
    color: #777777;
    outline: 0px;
    text-decoration: none;
  }

  &:visited {
    text-decoration: none;
  }
`;

export const SumaryText = styled.div`
  box-sizing: inherit;
  clear: none;
  float: left;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 15px;
  line-height: 27.8571px;
  margin-bottom: 2em;
  width: 48%;

  @media (min-width: 922px) {
    width: 46%;
  }

  @media (max-width: 921px) {
    float: none;
    width: 100%;
  }
`;

export const ShortDescription = styled.div`
  padding-top: 15px;
  box-sizing: inherit;
  color: #4a4a4a;
  display: flex;
  flex-direction: column;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 15px;
  line-height: 27.8571px;
`;

export const ImagesContainerOl = styled.div`
  @media (max-width: 921px) {
    gap: 6px;
    grid-template-columns: repeat(3, 1fr);
  }

  margin: 20px 0;
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
`;

export const ImagesContainerLi = styled.div`
  box-sizing: border-box;
  color: #4a4a4a;
  cursor: default;
  font-weight: inherit;
  list-style: outside none none;
  outline: none;
  vertical-align: baseline;
  width: 100%;
  word-wrap: break-word;
  margin: 0 auto;
`;

export const ImagesContainer = styled(Image)`
  @media (max-width: 921px) {
    width: 80px;
    margin: 0 auto;
    height: 80px;
  }

  box-shadow: none;
  box-sizing: inherit;
  color: #4a4a4a;
  cursor: pointer;
  display: block;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 15px;
  height: auto;
  line-height: 27.8571px;
  list-style: outside none none;
  margin: 0px;
  opacity: 0.5;
  vertical-align: middle;
  width: 139px;
  height: 139px;

  &:hover {
    opacity: 1;
  }
`;
