import styled from "styled-components";

export const AboveHeaderBarPrimary = styled.div`
  @media (min-width: 921px) {
    background-image: none;
  }

  @media (min-width: 922px) {
    border-bottom-width: 1px;
  }

  @media (max-width: 921px) {
    background-image: none;
  }

  background-color: transparent;
  /* background-color: #87a686; */
  background-image: none;
  border-bottom: 0px;
  bottom: 0px;
  box-sizing: inherit;
  color: #4a4a4a;
  display: block;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 15px;
  left: 0px;
  line-height: 27.8571px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  right: 0px;
  top: 0px;
  z-index: 4;
`;

export const AboveHeaderPrimaryWrap = styled.div`
  @media (min-width: 554px) {
    max-width: 100%;
  }

  @media (max-width: 922px) {
    max-width: 1240px;
  }

  align-content: center;
  box-sizing: inherit;
  color: #4a4a4a;
  display: grid;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 15px;
  line-height: 27.8571px;
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
  min-height: 80px;
  padding: 0 20px;
  margin: 0 70px;
`;

export const AboveHeaderPrimaryWrapSection = styled.div`
  align-items: center;
  box-sizing: inherit;
  color: #4a4a4a;
  display: flex;
  flex-grow: 1;
  flex-wrap: wrap;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 15px;
  height: 100%;
  justify-content: center;
  line-height: 27.8571px;
  min-height: 0px;
  word-wrap: anywhere;
`;

export const HeaderSectionUl = styled.ul`
  @media only screen and (max-width: 921px) {
    background: #222222;
    display: none;
    padding: 0px;
  }

  flex-direction: row;
  background: none;
  border-radius: 0px;
  bottom: 0px;
  box-shadow: none;
  box-sizing: border-box;
  clip: auto;
  color: #fb4bb3;
  display: flex;
  float: none;
  font-family: inherit;
  font-size: 14px;
  font-style: inherit;
  font-weight: inherit;
  height: auto;
  inset: auto;
  left: 0px;
  line-height: 1.8;
  list-style: disc;
  list-style-type: none;
  margin: 0px;
  margin-left: 20px;
  max-height: none;
  max-width: none;
  min-height: auto;
  min-width: auto;
  opacity: 1;
  outline: none;
  overflow: visible;
  overflow-wrap: break-word;
  padding: 0px;
  pointer-events: auto;
  position: relative;
  right: 0px;
  text-align: left;
  text-decoration: none;
  text-indent: 0px;
  text-transform: none;
  top: 0px;
  transform: none;
  transition: none 0s ease 0s;
  visibility: visible;
  white-space: normal;
  width: auto;
  word-wrap: break-word;

  ::before {
    display: none;
  }

  ::after {
    display: none;
  }
`;

export const HeaderSectionLink = styled.a`
  cursor: pointer;

  @media only screen and (min-width: 769px) {
    :hover {
      background: linear-gradient(rgba(241, 241, 241, 0.1), rgba(51, 51, 51, 0.2));
      border-color: rgba(241, 241, 241, 0.1);
      color: #ffffff;
      font-weight: normal;
      text-decoration: none;
    }
  }

  @media only screen and (max-width: 768px) {
    background: transparent;
    border: 0px;
    display: flex;
    flex-direction: row;
    border-radius: 0px;
    color: #ffffff;
    font-size: 14px;
    height: 40px;
    line-height: 40px;
    margin: 0px;
    padding: 0px 10px;
    text-align: left;
  }

  background: rgba(0, 0, 0, 0);
  border-color: rgba(241, 241, 241, 0);
  border-radius: 0px;
  bottom: 0px;
  box-shadow: none;
  box-sizing: border-box;
  clip: auto;
  color: #ffffff;
  cursor: pointer;
  display: block;
  float: none;
  font-family: Montserrat, sans-serif;
  font-size: 16px;
  font-weight: normal;
  height: 60px;
  inset: auto;
  left: 0px;
  line-height: 60px;
  list-style: outside none none;
  list-style-type: none;
  margin: 0px;
  max-height: none;
  max-width: none;
  min-height: auto;
  min-width: auto;
  opacity: 1;
  outline: none;
  overflow: visible;
  overflow-wrap: break-word;
  padding: 0px 10px;
  margin: 0px 10px;
  pointer-events: auto;
  position: relative;
  right: 0px;
  text-align: left;
  text-decoration: none;
  text-indent: 0px;
  text-transform: none;
  top: 0px;
  transform: none;
  transition: none 0s ease 0s;
  visibility: inherit;
  white-space: normal;
  width: auto;
  word-wrap: break-word;

  :active {
    outline: 0px;
  }

  :focus {
    color: #ffffff;
    outline: dotted thin;
    text-decoration: none;
  }

  :hover {
    color: #ffffff;
    outline: 0px;
    text-decoration: none;
  }

  :visited {
    text-decoration: none;
  }

  :where(:not(.wp-element-button)) {
    text-decoration: underline;
  }

  ::after {
    display: none;
  }

  ::before {
    -webkit-font-smoothing: antialiased;
    background: transparent;
    color: inherit;
    display: inline-block;
    font-family: dashicons;
    font-feature-settings: inherit;
    font-kerning: inherit;
    font-optical-sizing: inherit;
    font-size: inherit;
    font-stretch: inherit;
    font-style: inherit;
    font-variant: inherit;
    font-variation-settings: inherit;
    font-weight: inherit;
    height: auto;
    line-height: inherit;
    margin: 0px 6px 0px 0px;
    position: static;
    top: auto;
    vertical-align: top;
    width: auto;
  }
`;

export const ArrowDownSpan = styled.span`
  @media only screen and (max-width: 768px) {
    float: right;

    ::after {
      content: ">";
    }
  }

  margin-left: 5px;
  background: w;
  bottom: 0px;
  box-sizing: inherit;
  color: inherit;
  cursor: pointer;
  display: inline;
  font-family: Montserrat, sans-serif;
  font-size: inherit;
  line-height: inherit;
  list-style: outside none none;
  outline: none;
  align-items: center;
  pointer-events: auto;
  position: relative;
  text-align: left;

  transition: all 0.2s linear 0s;
  width: auto;
  word-wrap: break-word;

  ::after {
    -webkit-font-smoothing: antialiased;
    background: transparent;
    color: inherit;
    content: "<";
    display: inline-block;
    font-family: dashicons;
    font-weight: normal;
    height: auto;
    line-height: inherit;
    margin: 0px 0px 0px 6px;
    position: relative;
    right: auto;
    transform: rotate(0deg);
    vertical-align: top;
    width: auto;
  }
`;
