import React, {useContext, useEffect} from 'react';
import Sticky from 'react-stickynode';
import {ContentWrapper, GlobalStyle} from "../containers/ride.style";
import {ResetCSS} from "../assets/css/style";
import Navbar from "./Navbar/Navbar";
import SEO from "../SEO";
import authContext from "../Context/auth/authContext";
import NavbarMobile from "./Navbar/NavbarMobile";
import LogoImage from "./Navbar/Ride/logo.svg";
import Logo from "../elements/UI/Logo";


const Layout = ({children,title,description,initialShadow}) => {
    const auth = useContext(authContext);
    const {loadUser} = auth;
    useEffect(() => {
        loadUser()
    }, [])
    return (
        <div>
            <SEO title={title} description={description} />

            <GlobalStyle/>
            <ResetCSS/>
            <Logo
                href="/"
                logoSrc={LogoImage}
                title="Blood Bank"
                logoStyle={{maxWidth:"160px"}}
                className="logo-alt-mobile"
            />
            <ContentWrapper>
                <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
                    <Navbar initialShadow={initialShadow}/>
                </Sticky>
                <NavbarMobile/>
                {children}
            </ContentWrapper>
        </div>

    );
};

export default Layout;
