import styled from "styled-components";

export const CardContainer = styled.div`
  box-sizing: border-box;
  color: #4a4a4a;
  cursor: default;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.3s ease-in-out;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 100%;
  font-style: inherit;
  font-weight: inherit;
  line-height: 27.8571px;
  list-style: outside none none;
  border-radius: 10px 10px 0 0;
  outline: none;

  vertical-align: baseline;
  width: 100%;
  word-wrap: break-word;
  border: 1px solid #ccc;
  overflow: hidden;
  margin: 0 auto;

  &:hover {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  }
`;

export const CardImage = styled.div`
  width: 100%;
  height: 330px;
  transition: box-shadow 0.3s ease-in-out;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
  transition: transform 0.3s ease-in-out;
  transform: scale(1);
  -webkit-transition: -webkit-transform 0.5s ease;
  transition: transform 0.5s ease;

  &:hover {
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
  }
`;

export const ProductInfo = styled.div`
  width: 100%;
  padding: 24px 24px 24px 24px;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  min-height: 225px;
  background-color: white;
`;

export const ProductLink = styled.a`
  width: 100%;
  text-align: left;
`;

export const ProductName = styled.h2`
  color: #bf9877;
  font-size: 28px;

  font-weight: 300;
  font-family: "Josefin Sans", Sans-serif;
  line-height: 28px;
`;

export const ProductPrice = styled.span`
  color: #7e7e7e;
  width: 100%;

  margin: 0px 0px 25px 0px;
  font-family: "Lato", Sans-serif;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.8px;
  line-height: 8px;
`;

export const ContainerButton = styled.div`
  width: 100%;
  margin-bottom: 0px;
`;

export const BuyButton = styled.div`
  box-sizing: border-box;
`;

export const Button = styled.button`
  font-family: "Lato", Sans-serif;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.4px;
  text-transform: uppercase;
  padding: 16px 32px 16px 32px;
  border-style: solid;
  border-width: 1px 1px 1px 1px;
  border-color: #4d734f;
  background-color: #fff;

  &:hover {
    color: white;
    background-color: #4d734f;
    transition: 0.3s ease-in-out;
  }
`;
