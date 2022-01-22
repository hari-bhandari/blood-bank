import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import NavbarWrapper from '../../elements/Navbar';
import Logo from '../../elements/UI/Logo';
import Box from '../../elements/Box';
import Container from '../../Container';
import ScrollSpyMenu from '../../ScrollSpyMenu';
import LogoImage from './Ride/logo.svg';
import {MENU_LEFT_ITEMS, MENU_RIGHT_ITEMS} from "../../data";
import Dropdown from "../../Dropdown";
import Link from "next/link";
import {AiFillCaretDown} from "react-icons/ai";
import styled from "styled-components";
import authContext from "../../Context/auth/authContext";

export const MyProfileComponent = styled.div`
  display: flex;
`
const Navbar = ({navbarStyle, logoStyle, row, menuWrapper,initialShadow}) => {

    const auth = useContext(authContext);
    const {isAuthenticated, logout} = auth;
    // Toggle drawer

    const onLogout = () => {
        logout()
        location.reload();
    }
    const AuthedMenu =
        [
            <Link href={'/profile'} key={0}>
                <a>Profile</a>
            </Link>,
            <Link href={'/request'} key={1}>
                <a>Request For Blood</a>
            </Link>,
            <Link href={'/profile/requests'} key={2}>
                <a>My Requests</a>
            </Link>,
            <div onClick={onLogout} key={3}>
                <a> Logout</a>
            </div>
        ]

    return (
        <NavbarWrapper {...navbarStyle} initialShadow={initialShadow} >
            <Container noGutter mobileGutter width="1200px">
                <Box {...row}>
                    <Logo
                        href="/"
                        logoSrc={LogoImage}
                        title="Blood Bank"
                        logoStyle={logoStyle}
                        className="main-logo"
                    />

                    <Box {...menuWrapper}>
                        <ScrollSpyMenu
                            className="main_menu menuLeft"
                            menuItems={MENU_LEFT_ITEMS}
                            offset={-70}
                        />
                        {!isAuthenticated ?
                            <ScrollSpyMenu
                                className="main_menu menuRight"
                                menuItems={MENU_RIGHT_ITEMS}
                                offset={-70}
                            /> : <ScrollSpyMenu
                                className=" menuRight"
                                offset={-70}
                            ><Dropdown className={"menuRight scrollspy__menu myProfile-larger"} dropdownDirection={'right'}
                                       content={<MyProfileComponent>My Profile <AiFillCaretDown/> </MyProfileComponent>} dropdownItems={AuthedMenu}/>
                            </ScrollSpyMenu>
                        }
                    </Box>



                </Box>
            </Container>
        </NavbarWrapper>
    );
};

Navbar.propTypes = {
    navbarStyle: PropTypes.object,
    logoStyle: PropTypes.object,
    button: PropTypes.object,
    row: PropTypes.object,
    menuWrapper: PropTypes.object,
};

Navbar.defaultProps = {
    navbarStyle: {
        className: 'hosting_navbar',
        minHeight: '70px',
        display: 'block',

    },
    row: {
        flexBox: true,
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
    },
    logoStyle: {
        maxWidth: ['150px', '160px'],
    },
    button: {
        type: 'button',
        fontSize: '16px',
        pl: '0',
        pr: '0',
        colors: 'primary',
        minHeight: 'auto',
    },
    menuWrapper: {
        flexBox: true,
        alignItems: 'center',
        width: '100%',
        justifyContent: 'flex-end',
    },
};

export default Navbar;
