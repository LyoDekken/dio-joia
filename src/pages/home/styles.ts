import styled from "styled-components";

export const StyledSection = styled.section`
  --align-content: initial;
  --align-items: initial;
  --align-self: initial;
  --flex-basis: initial;
  --flex-direction: initial;
  --flex-grow: initial;
  --flex-shrink: initial;
  --flex-wrap: initial;
  --gap: initial;
  --justify-content: initial;
  --order: initial;
  --swiper-navigation-size: 44px;
  --swiper-pagination-bullet-horizontal-gap: 6px;
  --swiper-pagination-bullet-size: 6px;
  --swiper-theme-color: #000;
  --widgets-spacing: 20px;
  align-self: auto;
  bottom: 0px;
  box-sizing: border-box;
  color: #4a4a4a;
  flex-basis: auto;
  flex-grow: 0;
  flex-shrink: 1;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 15px;
  inset: 0px;
  left: 0px;
  line-height: 27.8571px;
  order: 0;
  outline: none;
  overflow-wrap: break-word;
  position: relative;
  right: 0px;
  top: 0px;
  transition: background 0.3s ease 0s, border 0.3s ease 0s,
    border-radius 0.3s ease 0s, box-shadow 0.3s ease 0s;
  word-wrap: break-word;
`;

export const FullScreenSection = styled.section`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
`;

export const FullScreenVideo = styled.video`
  @media (max-width: 921px) {
    justify-content: space-between;
  }
  
  width: 100%;
  height: 100%;
  opacity: 0.7;
  -o-object-fit: cover;
  object-fit: cover;
  z-index: 0;
`;
