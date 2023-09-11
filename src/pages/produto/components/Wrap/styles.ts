import { styled } from "styled-components";

export const ContainerWrap = styled.div`
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

export const WrapUlTitle = styled.ul`
  border-top: 0.761905px solid rgba(0, 0, 0, 0.05);
  bottom: 0px;
  box-sizing: border-box;
  color: #4a4a4a;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 15px;
  font-style: inherit;
  font-weight: inherit;
  inset: 0px;
  left: 0px;
  line-height: 27.8571px;
  list-style: outside none none;
  margin-left: 20px;
  outline: none;
  overflow: hidden;
  padding: 0px;
  position: relative;
  right: 0px;
  top: 0px;
  vertical-align: baseline;

  ::after {
    clear: both;
    content: " ";
    display: table;
  }

  ::before {
    border: 0px;
    border-bottom: 1px solid #d3ced2;
    border-bottom-color: rgb(211, 206, 210);
    border-bottom-style: solid;
    border-image: initial;
    border-left-color: initial;
    border-left-style: initial;
    border-right-color: initial;
    border-right-style: initial;
    border-top-color: initial;
    border-top-style: initial;
    border-width: 0px 0px 1px;
    bottom: 0px;
    content: " ";
    display: none;
    left: 0px;
    position: absolute;
    width: 100%;
    z-index: 1;
  }
`;

export const WrapUlTitleLi = styled.li`
  @media (max-width: 544px) {
    display: block;
    margin-right: 0px;
  }

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

  :after {
    border: 0px;
    bottom: -1px;
    box-shadow: none;
    content: " ";
    display: none;
    height: 5px;
    position: absolute;
    width: 5px;
  }

  ::before {
    background: rgba(0, 0, 0, 0) none repeat scroll 0px 0px / auto padding-box
      border-box;
    border: none;
    border-radius: 0px;
    bottom: -1px;
    box-shadow: none;
    content: " ";
    height: 5px;
    left: 0px;
    position: absolute;
    top: 0px;
    width: 5px;
  }
`;

export const WrapUlTitleA = styled.a`
  background-color: transparent;
  box-sizing: inherit;
  color: inherit;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 15px;
  padding-top: 10px;
  padding-right: 10px;
  font-weight: 700;
  line-height: 27.8571px;
  list-style: outside none none;
  outline: none;
  text-align: left;
  text-decoration: none;
  text-shadow: inherit;
  transition: all 0.2s linear 0s;

  &:active {
    outline: 0px;
  }

  &:focus {
    color: #4a4a4a;
    outline: dotted thin;
    text-decoration: none;
  }

  &:hover {
    color: #6b6a6b;
    outline: 0px;
    text-decoration: none;
  }

  &:visited {
    text-decoration: none;
  }
`;

export const WrapDivInfo = styled.div`
  bottom: 0px;
  padding-top: 30px;
  box-sizing: border-box;
  color: #4a4a4a;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 15px;
  font-style: inherit;
  font-weight: inherit;
  inset: 0px;
  left: 0px;
  line-height: 27.8571px;
  list-style: outside none none;
  margin: 0px 0px 1em 20px;
  margin-left: 20px;
  outline: none;
  overflow: hidden;
  position: relative;
  right: 0px;
  top: 0px;
  vertical-align: baseline;
`;

export const WrapDivInfoText = styled.p`
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
