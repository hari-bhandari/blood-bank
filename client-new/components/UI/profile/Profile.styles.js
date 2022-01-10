import styled from "styled-components";

export const ProfileContainer=styled.div`
  margin: 100px auto;
  width: 90%;
  max-width: 1000px;
  background: white;
  //react-tabs css
  .react-tabs {
    -webkit-tap-highlight-color: transparent;
  }

  .react-tabs__tab-list {
    border-bottom: 2px solid #0c0c0c;
    margin: 0 auto;
    padding: 0;
  }

  .react-tabs__tab {
    display: inline-block;
    border: 2px solid transparent;
    border-bottom: none;
    bottom: -2px;
    margin-left: 20px;
    position: relative;
    list-style: none;
    padding: 6px 12px;
    cursor: pointer;
  }

  .react-tabs__tab--selected {
    background: white;
    border-color: #000000;
    color: black;
    border-radius: 5px 5px 0 0;
  }

  .react-tabs__tab--disabled {
    color: GrayText;
    cursor: default;
  }

  .react-tabs__tab:focus {
    box-shadow: 0 0 5px hsl(208, 99%, 50%);
    border-color: hsl(208, 99%, 50%);
    outline: none;
  }

  .react-tabs__tab:focus:after {
    content: "";
    position: absolute;
    height: 5px;
    left: -4px;
    right: -4px;
    bottom: -5px;
    background: #fff;
  }

  .react-tabs__tab-panel {
    display: none;
  }

  .react-tabs__tab-panel--selected {
    display: block;
  }

`