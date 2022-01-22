import styled from "styled-components";

export const RequestsContainer = styled.div`
  background: #DAD299;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #B0DAB9, #DAD299);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #B0DAB9, #DAD299); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  min-height: 100vh;
  display: flex;
  overflow: hidden;
  position: relative;

`
export const InsiderContainer = styled.div`
  width: 100%;
  margin-top: 150px;
  margin-bottom: 100px;
  @media (max-width: 992px) {
    margin-top: 85px;
  }
`