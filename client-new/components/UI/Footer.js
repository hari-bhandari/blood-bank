import React from "react"
import styled from "styled-components"

const StyledFooter = styled.footer`
  width: 100%;
  display: flex;
  -webkit-box-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  align-items: center;
  background-color: rgb(37, 49, 91);
  padding-left: 1rem;
  padding-right: 1rem;
`

const StyledContainer = styled.div`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  padding-top: 25px;
  padding-bottom: 25px;
  margin: auto;

`

const FooterCopy = styled.span`
  font-size: 14px;
  color: rgb(255, 255, 255);
  text-align: center;
  a {
    text-decoration: underline;
    &:hover {
      color: yellow;
    }
  }
`

const Footer = () => {
    return (
        <StyledFooter>
            <StyledContainer>
                <FooterCopy>
                   Designed and build by <a href="https://haribhandari.me">Hari Bhandari</a>, {new Date().getFullYear()}. Developed with Love❤️
                </FooterCopy>
            </StyledContainer>
        </StyledFooter>
    )
}

export default Footer