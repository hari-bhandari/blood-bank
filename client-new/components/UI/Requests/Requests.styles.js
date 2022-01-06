import styled from "styled-components";

export const RequestsContainer = styled.div`
  background: #DAD299;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #B0DAB9, #DAD299);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #B0DAB9, #DAD299); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  min-height: 100vh;
  display: flex;
  overflow: hidden;
  //background-repeat: no-repeat;
  //background-position: 105% center;
  //background-size: 1020px;
  //background-attachment: fixed;
  position: relative;

  @media (max-width: 1750px) {
    background-size: 900px;
  }
  @media (max-width: 1600px) {
    background-position: 102% center;
    background-size: 800px;
    height: 94vh;
  }
  @media (max-width: 1440px) {
    background-position: 106% center;
    height: 93vh;
    background-size: contain;
    margin-top: 0;
  }
  @media (max-width: 1280px) {
    background-position: 102% center;
    background-size: contain;
    height: 100%;
    margin-bottom: 60px;
    margin-top: 0;
  }
  @media (max-width: 1024px) {
    background-position: 135% center;
    background-size: contain;
    height: 100%;
    margin-bottom: 60px;
    overflow: hidden;
  }
  @media (max-width: 990px) {
    background-size: contain;
    height: 100%;
    margin-bottom: 0px;
    overflow: hidden;
    background: #FF8D87 none 100% center;
    padding-bottom: 100px;
  }
  @media (max-width: 480px) {
    padding-bottom: 70px;
  }
`
export const InsiderContainer = styled.div`
  width: 100%;
  margin-top: 100px;
`