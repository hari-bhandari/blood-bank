import React, {useContext, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import NavbarWrapper from '../../elements/Navbar';
import Drawer from '../../elements/Drawer';
import Logo from '../../elements/UI/Logo';
import Box from '../../elements/Box';
import HamburgerMenu from '../../HamburgMenu';
import Container from '../../Container';
import ScrollSpyMenu from '../../ScrollSpyMenu';
import LogoImage from './Ride/logo.svg';
import {MENU_ITEMS, MENU_RIGHT_ITEMS, MENU_LEFT_ITEMS} from "../../data/Ride";
import Dropdown from "../../Dropdown";
import Link from "next/link";
import {AiFillCaretDown} from "react-icons/ai";
import styled from "styled-components";
import authContext from "../../Context/auth/authContext";

const MyProfileComponent = styled.div`
  display: flex;
`
const Navbar = ({navbarStyle, logoStyle, row, menuWrapper,initialShadow}) => {
    const [isOpen, setIsOpen] = useState(false)

    const auth = useContext(authContext);
    const {isAuthenticated, logout} = auth;
    // Toggle drawer
    const toggleHandler = () => {
        setIsOpen(!isOpen)
    };
    const onLogout = () => {
        logout()
        location.reload();
    }
    const AuthedMenu =
        [
            <Link href={'/profile'}>
                <a>Profile</a>
            </Link>,
            <Link href={'/request'}>
                <a>Request For Blood</a>
            </Link>,
            <Link href={'/profile/requests'}>
                <a>My Requests</a>
            </Link>,
            <div onClick={onLogout}>
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
                        title="Portfolio"
                        logoStyle={logoStyle}
                        className="main-logo"
                    />
                    <Logo
                        href="/"
                        logoSrc={LogoImage}
                        title="Portfolio"
                        logoStyle={logoStyle}
                        className="logo-alt"
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

                    <Drawer
                        width="420px"
                        placement="right"
                        drawerHandler={<HamburgerMenu barColor="blue"/>}
                        open={isOpen}
                        toggleHandler={toggleHandler}
                    >
                        <ScrollSpyMenu
                            className="mobile_menu"
                            menuItems={MENU_ITEMS}
                            drawerClose={true}
                            offset={-100}
                        />


                        {!isAuthenticated ? <ScrollSpyMenu
                            className="mobile_menu"
                            menuItems={MENU_RIGHT_ITEMS}
                            drawerClose={true}
                            offset={-100}
                        /> : <ScrollSpyMenu
                            className="mobile_menu"
                            offset={-70}
                        ><Dropdown className={""} dropdownDirection={'right'}
                                   content={<MyProfileComponent>My Profile <AiFillCaretDown/> </MyProfileComponent>} dropdownItems={AuthedMenu}/>
                        </ScrollSpyMenu>
                        }

                    </Drawer>

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
