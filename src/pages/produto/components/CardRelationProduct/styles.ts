import styled from "styled-components";

export const ContainerCardProduct = styled.section`
  bottom: 0px;
  box-sizing: inherit;
  color: #4a4a4a;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 15px;
  left: 0px;
  line-height: 27.8571px;
  padding-top: 10px;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  right: 0px;
  top: 0px;
`;

export const ContainerCardTitle = styled.h2`
  @media (max-width: 921px) {
    font-size: 25px;
  }

  @media (max-width: 544px) {
    font-size: 25px;
  }

  margin-left: 20px;
  box-sizing: inherit;
  clear: both;
  color: #3d3d3d;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 22.5px;
  font-style: inherit;
  font-weight: inherit;
  line-height: 1.3;
  margin-bottom: 0.7em;
  outline: none;
  vertical-align: baseline;
`;

export const ContainerProductColum = styled.ul`
  box-sizing: border-box;
  padding: 0 20px;
  max-width: 900px;
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