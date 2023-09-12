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

  @media (max-width: 921px) {
    width: 100%;
  }
`;

export const ZoomImage = styled(Image)`
  box-shadow: none;
  box-sizing: inherit;
  color: #4a4a4a;
  display: block;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 15px;
  height: 800px;
  line-height: 27.8571px;
  max-height: none;
  max-width: none;
  opacity: 1;
  vertical-align: middle;
  max-width: 600px;
`;

export const ContainerSumary = styled.div`
  @media (max-width: 1124px) {
    max-width: 400px;
    width: 100%;
  }

  @media (max-width: 1024px) {
    max-width: 350px;
    width: 100%;
  }
  
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

export const NavContainerParcelaPricing = styled.p`
  box-sizing: inherit;
  color: #7e7e7e;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 26px;
  text-align: left;
`;

export const NumerationForm = styled.table`
  box-sizing: inherit;
  color: #4a4a4a;
  margin: 0px 0px 1.2em;

  ::after {
    clear: both;
    content: " ";
    display: table;
  }

  ::before {
    content: " ";
    display: table;
  }
`;

export const Numeration = styled.th`
  box-sizing: inherit;
  color: #4a4a4a;
  display: block;
  line-height: 2em;
  outline: none;
  padding: 8px 0;
  text-align: left;
  vertical-align: top;
`;

export const NumerationLabel = styled.label`
  color: #4a4a4a;
  font-size: 15px;
  font-weight: 700;
  line-height: 30px;
  outline: none;
  text-align: left;
`;

export const NavContainerSelectOption = styled.option`
  background-color: #fafafa;
  color: #000;
  font: inherit;
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
  width: 100%;
  font: inherit;
  padding: 0 7.5px;

  &:focus {
    background-color: #ffffff;
    border-color: rgb(234, 234, 234);
    box-shadow: none;
    outline: 0px;
  }
`;
export const NavContainerButtonSelect = styled.button`
  -webkit-font-smoothing: antialiased;
  appearance: button;
  background: #9fb2a0;
  border: 0px;
  border-radius: 0px;
  bottom: 0px;
  box-shadow: none;
  box-sizing: inherit;
  color: #ffffff;
  cursor: not-allowed;
  display: inline-block;
  font: inherit;
  line-height: 15px;
  margin: 0px;
  opacity: 0.5;
  outline: none;
  overflow: visible;
  padding: 10px 20px;
  position: relative;
  left: 15px;
  text-decoration: none;
  text-shadow: none;
  text-transform: none;

  vertical-align: middle;

  &:focus {
    background-color: #a7cca5;
    border-color: rgb(167, 204, 165);
    box-shadow: none;
    color: #000000;
    outline: 0px;
  }

  &:focus {
    background-color: #9fb2a0;
    border-color: rgb(167, 204, 165);
    box-shadow: none;
    color: #000000;
    outline: 0px;
  }

  &:hover {
    background-color: #a7cca5;
    background-image: none;
    border-color: rgb(167, 204, 165);
    box-shadow: none;
    color: #000000;
    text-decoration: none;
  }

  &:active {
    border-color: rgb(234, 234, 234);
    box-shadow: none;
    outline: 0px;
  }

  &:disabled {
    background-color: #a46497;
    color: inherit;
    cursor: not-allowed;
    opacity: 0.5;
    padding: 0.618em 1em;
  }
`;

export const NavContainerInputSelect = styled.input.attrs({
  type: "number",
  min: 1,
  defaultValue: 1,
})`
  background: #ffffff;
  border-radius: 0px;
  margin-right: 10px;
  box-shadow: none;
  box-sizing: border-box;
  color: #666666;
  font: inherit;
  height: auto;
  line-height: 15px;
  margin: 0px;
  min-height: 35px;
  outline: none;
  text-align: center;
  transition: all 0.2s linear 0s;
  vertical-align: baseline;
  width: 3.631em;

  &:focus {
    border-color: rgb(221, 221, 221);
    box-shadow: none;
    outline: 0px;
  }
`;

export const NavContainerSelectValue = styled.div`
  padding-top: 16px;
  display: flex;
`;

export const NavContainerSpanProduct = styled.span`
  box-sizing: inherit;
  color: #4a4a4a;
  display: block;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 13.5px;
  line-height: 25.0714px;
  outline: none;
`;

export const NavContainerFrete = styled.form`
  box-sizing: inherit;
  color: #4a4a4a;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 15px;
  line-height: 27.8571px;
  outline: none;
  margin-top: 26px;

  ::after {
    clear: both;
    content: " ";
    display: table;
  }

  ::before {
    content: " ";
    display: table;
  }
`;

export const NavContainerFreteLabel = styled.label`
  box-sizing: inherit;
  color: #4a4a4a;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 15px;
  line-height: 27.8571px;
  outline: none;
`;

export const NavContainerFreteInput = styled.input`
  appearance: none;
  background: #ffffff;
  border: 1px solid #cccccc;
  border-radius: 0px;
  box-shadow: none;
  box-sizing: border-box;
  color: #666666;
  width: 100px;
  display: block;
  float: left;
  font: inherit;
  height: 28px;
`;

export const NavContainerFreteButton = styled.button`
  appearance: button;
  background: #4d734f;
  border-color: rgb(167, 204, 165);
  border-radius: 0px;
  border-style: solid;
  border-width: 0px;
  bottom: 0px;
  box-shadow: none;
  box-sizing: inherit;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  float: left;
  font: inherit;
  left: 10px;
  line-height: 15px;
  margin: 0px;
  outline: none;
  overflow: visible;
  padding: 10px 20px;
  position: relative;
  text-decoration: none;
  text-shadow: none;
  vertical-align: middle;

  :focus {
    background-color: #a7cca5;
    border-color: rgb(167, 204, 165);
    box-shadow: none;
    color: #000000;
    outline: 0px;
  }

  &:hover {
    background-color: #a7cca5;
    border-color: rgb(167, 204, 165);
    box-shadow: none;
    color: #000000;
    outline: 0px;
  }

  &:active {
    border-color: rgb(234, 234, 234);
    box-shadow: none;
    outline: 0px;
  }

  &:disabled {
    color: inherit;
    cursor: not-allowed;
    opacity: 0.5;
    padding: 0.618em 1em;
  }
`;
