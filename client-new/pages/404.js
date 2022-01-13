import React from 'react';
import styled from "styled-components";
import {themeGet} from "@styled-system/theme-get";
import {Button} from "../components/UI/profile/forms/label";
import {useRouter} from "next/router";
import Layout from "../components/UI/layout";

const Custom404Container = styled.div`
  background: white;
  height: 100%;
  display: flex;
  margin-top: 200px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
const Error = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  @media (max-width: 767px) {
    justify-content: center;
  }
`
const Number = styled.div`
  font-weight: 900;
  font-size: 15rem;
  line-height: 1;
  color: #009e7f;
  @media (max-width: 767px) {
    font-weight: 700;
    font-size: 12rem;
  }
  @media (max-width: 428px) {
    font-weight: 600;
    font-size: 10rem;
  }
`
const Illustration = styled.div`
  position: relative;
  width: 12.2rem;
  margin: 0 2.1rem;
  @media (max-width: 767px) {
    width: 8rem;
  }
  @media (max-width: 428px) {
    width: 7rem;
  }
`
const Circle = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 12.2rem;
  height: 11.4rem;
  border-radius: 50%;
  background-color: #293b49;
  @media (max-width: 798px) {
    width: 9rem;
    height: 4rem;
  }
`
const Clip = styled.div`
  position: absolute;
  bottom: 0.3rem;
  left: 50%;
  transform: translateX(-50%);
  overflow: hidden;
  width: 12.5rem;
  height: 13rem;
  border-radius: 0 0 50% 50%;
  @media (max-width: 767px) {
    width: 10rem;
  }
`
const Paper = styled.div`
  position: absolute;
  bottom: -0.3rem;
  left: 50%;
  transform: translateX(-50%);
  width: 9.2rem;
  height: 12.4rem;
  border: 0.3rem solid #293b49;
  background-color: white;
  border-radius: 0.8rem;
  &:before {
    content: "";
    position: absolute;
    top: -0.7rem;
    right: -0.7rem;
    width: 1.4rem;
    height: 1rem;
    background-color: white;
    border-bottom: 0.3rem solid #293b49;
    transform: rotate(45deg);
  }
  .eyes {
    position: absolute;
    top: 0;
    left: 2.4rem;
    width: 4.6rem;
    height: 0.8rem;
  }
  .eye {
    position: absolute;
    bottom: 0;
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 50%;
    background-color: #293b49;
    animation-name: eye;
    animation-duration: 4s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }
  .eye-left {
    left: 0;
  }
  .eye-right {
    right: 0;
  }
  @keyframes eye {
    0% {
      height: 0.8rem;
    }
    50% {
      height: 0.8rem;
    }
    52% {
      height: 0.1rem;
    }
    54% {
      height: 0.8rem;
    }
    100% {
      height: 0.8rem;
    }
  }
  .rosyCheeks {
    position: absolute;
    top: 1.6rem;
    width: 1rem;
    height: 0.2rem;
    border-radius: 50%;
    background-color: #fdabaf;
  }
  .rosyCheeks-left {
    left: 1.4rem;
  }
  .rosyCheeks-right {
    right: 1.4rem;
  }
  .mouth {
    position: absolute;
    top: 3.1rem;
    left: 50%;
    width: 1.6rem;
    height: 0.2rem;
    border-radius: 0.1rem;
    transform: translateX(-50%);
    background-color: #293b49;
  }
`
const SearchContainer = styled.div`
  max-width: 650px;
  margin-top: 60px;
  margin-bottom: 40px;
  width: 80%;
  @media (max-width: 798px) {
    width: 100%;
  }
`
const TextLost = styled.div`
  font-family: "Arial Black", Arial;
  font-size: 2em;
  margin-top: 30px;
  line-height: 50px;
  box-sizing: border-box;
  @media (max-width: 798px) {
    font-size: 1em;
    line-height: 20px;
  }
  @media (max-width: 500px) {
    font-size: 0.8em;
  }
  color: ${themeGet('colors.primary.regular', '#009e7f')};
`
const Custom404 = () => {
    const router = useRouter()
    return (
        <>
            <Layout title={'404 Page not found- BloodBank'} description={'No pages found with that url'}/>
            <Custom404Container>
                <Error>
                    <Number>4</Number>
                    <Illustration>
                        <Circle></Circle>
                        <Clip>
                            <Paper>
                                <div className="face">
                                    <div className="eyes">
                                        <div className="eye eye-left"></div>
                                        <div className="eye eye-right"></div>
                                    </div>
                                    <div className="rosyCheeks rosyCheeks-left"></div>
                                    <div className="rosyCheeks rosyCheeks-right"></div>
                                    <div className="mouth"></div>
                                </div>
                            </Paper>
                        </Clip>
                    </Illustration>
                    <Number>4</Number>
                </Error>

                <TextLost>Oops. The page you&apos;re looking for doesn&apos;t exist.</TextLost>
                <Button type={'button'} style={{
                    margin: '40px 0',
                    height: '50px',
                    width: '300px',
                    fontSize: '25px',
                    maxWidth: "80%",
                    borderRadius: '10px'
                }} onClick={() => {
                    router.push('/')
                }}
                > Go back home</Button>
            </Custom404Container>

        </>

    );
};

export default Custom404;