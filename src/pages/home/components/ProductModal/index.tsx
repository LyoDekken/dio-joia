import React from "react";
import styled from "styled-components";

const ModalWrapper = styled.ul`
  @media only screen and (min-width: 769px) {
    opacity: 0;
    transform: translate(0, 10px);
    transition: opacity 200ms ease-in, transform 200ms ease-in,
      visibility 200ms ease-in;
    z-index: 999;
    border-radius: 0;
    background: #fafafa;
    border: 0;
    padding: 20px 20px 20px 20px;
    position: absolute;
    width: 100%;
    max-width: none;
    left: 0;
  }

  top: 100%;
  width: 300px;
  background-color: white;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  padding: 10px;
  z-index: 1;

  &:hover {
    display: block;
  }
`;

const ModalWrapperLi = styled.li`
  transition: none;
  border-radius: 0;
  box-shadow: none;
  background: none;
  border: 0;
  bottom: auto;
  box-sizing: border-box;
  clip: auto;
  color: #fb4bb3;
  display: block;
  float: none;
  font-family: inherit;
  font-size: 14px;
  height: auto;
  left: auto;
  line-height: 1.8;
  list-style-type: none;
  margin: 0;
  min-height: auto;
  max-height: none;
  min-width: auto;
  max-width: none;
  opacity: 1;
  outline: none;
  overflow: visible;
  padding: 0;
  position: relative;
  pointer-events: auto;
  right: auto;
  text-align: left;
  text-decoration: none;
  text-indent: 0;
  text-transform: none;
  transform: none;
  top: auto;
  visibility: inherit;
  width: auto;
  word-wrap: break-word;
  white-space: normal;
`;

const ModalWrapperUlAgain = styled.ul`
  display: block;
  visibility: inherit;
  opacity: 1;
`;

const ModalWrapperLiAgain = styled.li`
  border-right: 1px solid rgba(101, 139, 99, 0.25) !important;
  float: left;
  min-height: 1px;
`;

const ProductModal = () => {
  return (
    <>
      <ModalWrapper>
        <ModalWrapperLi>
          <ModalWrapperUlAgain>
            <ModalWrapperLiAgain>OI</ModalWrapperLiAgain>
            <ModalWrapperLiAgain>OI</ModalWrapperLiAgain>
            <ModalWrapperLiAgain>OI</ModalWrapperLiAgain>
          </ModalWrapperUlAgain>
        </ModalWrapperLi>
      </ModalWrapper>
    </>
  );
};

export default ProductModal;

