import styled from "styled-components";

export const Container = styled.div`
  box-sizing: inherit;
  color: #4a4a4a;
  background: #e6e6e6;

  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 15px;
  line-height: 27.8571px;
`;

export const ContainerBar = styled.div`
  box-sizing: inherit;
  color: #4a4a4a;
  display: flex;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 15px;
  line-height: 27.8571px;
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
  padding-left: 20px;
  padding-right: 20px;

  @media (max-width: 921px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  @media (min-width: 544px) {
    max-width: 100%;
  }

  @media (min-width: 922px) {
    display: flex;
    max-width: 1240px;
  }
`;
