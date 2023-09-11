import styled from "styled-components";

export const Container = styled.div`
  border-left: 0.761905px solid #eeeeee;
  box-sizing: inherit;
  color: #4a4a4a;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 15px;
  line-height: 27.8571px;
  margin: 4em 0px;
  width: 100%;

  @media (min-width: 993px) {
    padding-left: 60px;
  }

  @media (max-width: 992px) {
    padding-left: 30px;
  }

  @media (max-width: 921px) {
    margin: 0px;
    padding: 1.5em 0px;
    padding-left: 0px;
  }

  @media (min-width: 922px) {
    border-left: 1px solid #eeeeee;
    width: 78%;
  }
`;

export const SectionContainer = styled.div`
  box-sizing: inherit;
  color: #4a4a4a;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 15px;
  line-height: 27.8571px;
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

export const NavContainerAllResults = styled.p`
  box-sizing: inherit;
  color: #4a4a4a;
  float: left;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 100%;
  font-style: inherit;
  font-weight: inherit;
  line-height: 27.8571px;
  margin: 0px 0px 1em;
  margin-bottom: 1.75em;
  padding: 0px;
  vertical-align: baseline;
`;

export const NavContainerSelectOption = styled.option`
  background-color: #fafafa;
  color: #000;
  font: inherit;
`;

export const NavContainerSpaceContent = styled.div`
  display: flex;
  margin-bottom: 20px;
  justify-content: space-between;
`;

export const NavContainerSelect = styled.select`
  @media (max-width: 921px) {
    padding: 0px;
  }

  background: #fafafa;
  border: 1px solid #dddddd;
  box-shadow: none;
  color: #4a4a4a;
  height: 38px;
  font: inherit;
  padding: 0 7.5px;

  &:focus {
    background-color: #ffffff;
    border-color: rgb(234, 234, 234);
    box-shadow: none;
    outline: 0px;
  }
`;

export const NavContainerTitle = styled.h1`
  box-sizing: inherit;
  clear: both;
  color: #4d734f;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 30px;
  font-style: inherit;
  font-weight: 400;
  line-height: 1.2;
  margin: 0px;
  margin-bottom: 1em;
  padding: 0px;
  vertical-align: baseline;

  @media (max-width: 921px) {
    font-size: 30px;
  }

  @media (max-width: 544px) {
    font-size: 30px;
  }
`;

export const ContainerGridProduct = styled.ul`
  box-sizing: border-box;
  clear: both;
  color: #4a4a4a;
  column-gap: 20px;
  display: grid;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 100%;
  font-style: inherit;
  font-weight: inherit;
  grid-template-columns: repeat(3, minmax(0px, 1fr));
  line-height: 27.8571px;
  list-style: outside none none;
  margin: 0px 0px 1em;
  padding: 0px;
  vertical-align: baseline;

  &::after {
    width: 0px;
  }

  &::before {
    width: 0px;
  }

  @media (min-width: 545px) and (max-width: 921px) {
    grid-template-columns: repeat(3, minmax(0px, 1fr));
  }

  @media (max-width: 921px) {
    grid-template-columns: repeat(3, minmax(0px, 1fr));
  }

  @media (max-width: 544px) {
    grid-template-columns: repeat(1, minmax(0px, 1fr));
  }
`;

export const PageNumbers = styled.ul`
  border-color: rgb(113, 106, 93);
  box-sizing: border-box;
  color: #c2bcb3;
  flex-wrap: wrap;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 100%;
  font-style: inherit;
  font-weight: inherit;
  justify-content: center;
  line-height: 27.8571px;
  list-style: disc;
  list-style-image: initial;
  margin: 1px;
  margin-left: 20px;
  padding: 0px;
  vertical-align: baseline;
  white-space: normal;

  &::after {
    clear: both;
    content: "";
    display: table;
  }

  &::before {
    content: " ";
    display: table;
  }
`;

export const PageNumberCurrent = styled.span`
  background: #416142 none repeat scroll 0% 0% / auto padding-box border-box;
  box-sizing: inherit;
  color: #f4f2ee;
  display: block;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 1em;
  font-weight: 400;
  line-height: 1;
  margin: 0px;
  min-width: 2.5em;
  padding: 0.75em;
  text-align: center;
  text-decoration: none;
  text-decoration-color: initial;
`;

export const PageNumberCurrentLi = styled.li`
  border: 1px solid #d3ced2;
  box-sizing: inherit;
  color: #c2bcb3;
  display: inline-block;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 100%;
  font-style: inherit;
  font-weight: inherit;
  line-height: 27.8571px;
  margin: 0px 2px 2px 0px;
  outline-color: initial;
  overflow: hidden;
  padding: 0px;
  vertical-align: baseline;
`;

export const PageNumberCurrentA = styled.a`
  background-color: transparent;
  box-sizing: inherit;
  color: #3698ff;
  cursor: pointer;
  display: block;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 1em;
  font-weight: 400;
  line-height: 1;
  margin: 0px;
  min-width: 2.5em;
  padding: 0.75em;
  text-align: center;
  text-decoration: none;
  text-decoration-color: initial;
  transition: all 0.2s linear 0s;
`;
