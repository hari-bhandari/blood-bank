import React from 'react';
import Sticky from 'react-stickynode';
import {ContentWrapper, GlobalStyle} from "../containers/ride.style";
import {ResetCSS} from "../assets/css/style";
import Navbar from "./Navbar/Navbar";
import SEO from "../SEO";



const Layout = ({children,title,description}) => {
    return (
        <div>
            <SEO title={title} description={description} />
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
                {children}
            </ContentWrapper>
        </div>

    );
};

export default Layout;
