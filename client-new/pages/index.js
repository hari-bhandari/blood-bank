import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from "../components/Layout/Navbar/Navbar";
import Sticky from 'react-stickynode';
import {ResetCSS} from '../components/assets/css/style';
import {
    GlobalStyle,
    ContentWrapper,
} from '../components/containers/Ride/ride.style';
import Hero from "../components/Layout/Hero/Hero";
import WhatWeDo from "../components/Layout/What we do/WhatWeDo";
import Quotes from "../components/Layout/quotes/Quotes";
import WorksDone from "../components/Layout/WorksDone/WorksDone";

export default function Home() {
    return (
        <div >
            <link
                href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700|Lato:300,400,700"
                rel="stylesheet"
            />
            <GlobalStyle/>
            <ResetCSS/>

            <ContentWrapper>
                <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
                    <Navbar/>
                </Sticky>
                <Hero/>
                <WhatWeDo/>
                <Quotes/>
                <WorksDone/>
            </ContentWrapper>
        </div>
    )
}
