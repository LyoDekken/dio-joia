import styled from "styled-components";

export const Container = styled.div`
  border-right: 2px solid rgba(135, 166, 134, 0.3);
  box-sizing: inherit;
  color: #4a4a4a;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 1rem;
  line-height: 2;
  margin: 4em 0px 2.5em;
  width: 100%;
  word-break: break-word;

  @media (max-width: 921px) {
    display: none;
  }

  @media (min-width: 993px) {
    padding-right: 60px;
  }

  @media (min-width: 993px) {
    padding-right: 30px;
  }

  @media (max-width: 922px) {
    border-right: 1px solid #eeeeee;
    margin-right: -1px;
    width: 22%;
  }

  @media (min-width: 922px) {
    border-right: 1px solid #eeeeee;
    margin-right: -1px;
    width: 22%;
  }
`;

export const SideBarMain = styled.div`
  box-sizing: inherit;
  color: #4a4a4a;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 15px;
  line-height: 30px;
`;

export const SideBarSearchDiv = styled.div`
  border-bottom: 1px solid rgba(135, 166, 134, 0.3);
  box-sizing: inherit;
  color: #4a4a4a;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 15px;
  line-height: 30px;
  margin: 0px 0px 2.8em;
`;

export const SideBarForm = styled.form`
  box-sizing: inherit;
  color: #4a4a4a;
  font-size: 15px;
  line-height: 30px;
  margin-bottom: 20px;
`;

export const SideBarFormSearch = styled.div`
  box-sizing: inherit;
  color: #4a4a4a;
  display: flex;
  flex: 1 1 auto;
  flex-wrap: nowrap;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 15px;
  line-height: 30px;
  max-width: 100%;
`;

export const SideBarFormLabel = styled.label`
  box-sizing: inherit;
  color: #bf9877;
  font-family: "Josefin Sans", sans-serif;
  font-size: 24px;
  line-height: 48px;
  text-decoration: underline 1px rgb(167, 204, 165);
  width: 100%;
`;

export const SideBarFormInput = styled.input`
  appearance: none;
  background: #ffffff;
  border: 1px solid #949494;
  border-radius: 0px;
  box-shadow: none;
  box-sizing: border-box;
  color: #666666;
  display: block;
  flex-grow: 1;
  font: inherit;
  height: auto;
  line-height: 15px;
  margin: 0px;
  margin-left: 0px;
  margin-right: 0px;
  min-width: 3rem;
  padding: 5px;
  text-decoration: unset;
  transition: all 0.2s linear 0s;
  vertical-align: baseline;
`;

export const SideBarFormSearchIconButton = styled.button`
  appearance: button;
  background: #e6e6e6;
  border: 1px solid #4d734f;
  border-radius: 0px;
  box-sizing: inherit;
  color: #4d734f;
  cursor: pointer;
  display: block;
  font: inherit;
  height: 42px;
  line-height: 15px;
  margin: 0px;
  margin-left: 10px;
  overflow: visible;
  padding: 5px;
  text-decoration: none;
  text-transform: none;
  transition: all 0.2s ease 0s;
  vertical-align: baseline;
  width: 52px;
  word-break: normal;
`;

// export const DivMargem = styled.div`
  
// `;


export const SideBarTitle = styled.div`
  box-sizing: inherit;
  clear: both;
  color: #bf9877;
  font-family: "Josefin Sans", sans-serif;
  font-size: 24px;
  font-style: inherit;
  font-weight: inherit;
  line-height: 1.3;
  margin: 0px;
  margin-bottom: 0.7em;
  padding: 0px;
  text-decoration: underline 1px rgb(167, 204, 165);
  vertical-align: baseline;
`;

export const SideBarSpecial = styled.ul`
  box-sizing: border-box;
  color: #4a4a4a;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 100%;
  font-style: inherit;
  font-weight: inherit;
  line-height: 30px;
  list-style: disc;
  list-style-type: none;
  margin: 0px;
  padding: 0px;
  vertical-align: baseline;
`;

export const SideBarSpecialLink = styled.li`
  box-sizing: inherit;
  color: #4a4a4a;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 100%;
  font-style: inherit;
  font-weight: inherit;
  line-height: 30px;
  list-style: outside none none;
  margin: 0px;
  margin-bottom: 0.25em;
  padding: 0px;
  transition: all 0.2s linear 0s;
  vertical-align: baseline;
`;

export const SideBarSpecialText = styled.a`
  background-color: transparent;
  box-sizing: inherit;
  color: #547a56;
  cursor: pointer;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 15px;
  line-height: 30px;
  list-style: outside none none;
  text-align: left;
  text-decoration: none;
  transition: all 0.2s linear 0s;
`;
