import React, {useContext, useEffect} from 'react';
import Sticky from 'react-stickynode';
import {ContentWrapper, GlobalStyle} from "../containers/ride.style";
import {ResetCSS} from "../assets/css/style";
import Navbar from "./Navbar/Navbar";
import SEO from "../SEO";
import authContext from "../Context/auth/authContext";


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

            <ContentWrapper>
                <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
                    <Navbar initialShadow={initialShadow}/>
                </Sticky>
                {children}
            </ContentWrapper>
        </div>

    );
};

export default Layout;
