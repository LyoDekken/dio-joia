import styled from "styled-components";

export const CardContainer = styled.li`
  box-sizing: border-box;
  color: #4a4a4a;
  margin-bottom: 2rem;
  background-color: white;
  cursor: default;
  transition: box-shadow 0.3s ease-in-out;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 100%;
  font-style: inherit;
  font-weight: inherit;
  line-height: 27.8571px;
  list-style: outside none none;
  outline: none;
  vertical-align: baseline;
  width: 100%;
  word-wrap: break-word;
  overflow: hidden;

  &:hover {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  }
`;

export const CardImage = styled.div`
  box-sizing: inherit;
  color: #4a4a4a;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 15px;
  line-height: 27.8571px;
  list-style: outside none none;
  outline: none;
  text-align: left;
`;

export const ProductImage = styled.img`
  border-radius: 2px 2px 0px 0px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  box-shadow: none;
  box-sizing: inherit;
  color: #5c825d;
  cursor: pointer;
  display: block;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 15px;
  height: 300px;
  line-height: 27.8571px;
  list-style: outside none none;
  margin: 0px 0px 1em;
  margin-bottom: 0.8em;
  max-width: 100%;
  object-fit: cover;
  outline: none;
  text-align: left;
  vertical-align: middle;
  width: 100%;
`;

export const ProductInfo = styled.div`
  box-sizing: inherit;
  color: #4a4a4a;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 15px;
  line-height: 27.8571px;
  list-style: outside none none;
  outline: none;
  padding: 24px;
  text-align: left;
`;

export const ProductLink = styled.a`
  width: 100%;
  text-align: left;
`;

export const ProductName = styled.h2`
  border-bottom: 1px solid #4d734f;
  box-sizing: inherit;
  clear: both;
  color: #bf9877;
  cursor: pointer;
  font-family: "Josefin Sans", sans-serif;
  font-size: 26px;
  font-style: inherit;
  font-weight: 300;
  line-height: 25px;
  list-style: outside none none;
  margin: 0px;
  margin-bottom: 0.5em;
  padding: 0px;
  text-align: left;
  vertical-align: baseline;
  width: 100%;

  @media (max-width: 921px) {
    font-size: 25px;
  }

  @media (max-width: 544px) {
    font-size: 25px;
  }
`;

export const PriceBdi = styled.bdi`
  box-sizing: inherit;
  color: #4a4a4a;
  display: block;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 22px;
  font-weight: 700;
  line-height: 17.55px;
  list-style: outside none none;
  margin-bottom: 0.5em;
  text-align: left;
`;

export const ProductPrice = styled.span`
  box-sizing: inherit;
  color: #4a4a4a;
  display: block;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 13.5px;
  font-weight: 700;
  line-height: 17.55px;
  list-style: outside none none;
  margin-bottom: 0.5em;
  text-align: left;
`;

export const ContainerButton = styled.a`
  background: #4d734f;
  box-shadow: none;
  box-sizing: inherit;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-size: 15px;
  font-weight: 700;
  line-height: 19.5px;
  list-style: outside none none;
  margin-bottom: 0.5em;
  margin-top: 0.5em;
  overflow: visible;
  padding: 10px 20px;
  position: relative;
  text-align: left;
  text-decoration: none;
  text-shadow: none;

  transition: all 0.25s ease 0s;
  vertical-align: baseline;
  white-space: normal;

  &:active {
    border-color: rgb(234, 234, 234);
    box-shadow: none;
    outline: 0px;
  }

  &:focus {
    border-color: rgb(234, 234, 234);
    box-shadow: none;
    color: #f2f2f2;
    outline: dotted thin;
    text-decoration: none;
  }

  &:hover {
    background: #A7CCA5;
    background-image: none;
    border-color: rgb(82, 119, 83);
    box-shadow: none;
    color: #000000;
    outline: 0px;
    text-decoration: none;
  }

  &:visited {
    text-decoration: none;
  }

  &:disabled {
    color: inherit;
    cursor: not-allowed;
    opacity: 0.5;
    padding: 0.618em 1em;
  }

  @media (max-width: 544px) {
    padding: 0.5em 0.75em;
  }
`;

export const PriceLoop = styled.div`
  box-sizing: inherit;
  color: #4a4a4a;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 15px;
  line-height: 27.8571px;
  list-style: outside none none;
  outline: none;
  text-align: left;
`;

export const PriceCalc = styled.p`
  box-sizing: inherit;
  color: #4a4a4a;
  display: block;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 13.5px;
  font-style: inherit;
  font-weight: 700;
  line-height: 17.55px;
  list-style: outside none none;
  margin: 0px;
  margin-bottom: 0.5em;
  outline: none;
  padding: 0px;
  padding-bottom: 5px;
  padding-left: 24px;
  text-align: left;
  vertical-align: baseline;
`;
