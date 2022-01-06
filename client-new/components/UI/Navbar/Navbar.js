import React, {useState} from 'react';
import PropTypes from 'prop-types';
import NavbarWrapper from '../../elements/Navbar';
import Drawer from '../../elements/Drawer';
import Logo from '../../elements/UI/Logo';
import Box from '../../elements/Box';
import HamburgerMenu from '../../HamburgMenu';
import Container from '../../Container';
import ScrollSpyMenu from '../../ScrollSpyMenu';
import LogoImage from './Ride/logo.svg';
import {MENU_ITEMS, MENU_RIGHT_ITEMS,MENU_LEFT_ITEMS} from "../../data/Ride";

const Navbar = ({navbarStyle, logoStyle, row, menuWrapper}) => {
    const[isOpen,setIsOpen]=useState(false)
    // Toggle drawer
    const toggleHandler = () => {
        setIsOpen(!isOpen)
    };

    return (
        <NavbarWrapper {...navbarStyle} >
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
                        <ScrollSpyMenu
                            className="main_menu menuRight"
                            menuItems={MENU_RIGHT_ITEMS}
                            offset={-70}
                        />

                        <Drawer
                            width="420px"
                            placement="right"
                            drawerHandler={<HamburgerMenu barColor="white"/>}
                            open={isOpen}
                            toggleHandler={toggleHandler}
                        >
                            <ScrollSpyMenu
                                className="mobile_menu"
                                menuItems={MENU_ITEMS}
                                drawerClose={true}
                                offset={-100}
                            />

                            <ScrollSpyMenu
                                className="mobile_menu"
                                menuItems={MENU_RIGHT_ITEMS}
                                drawerClose={true}
                                offset={-100}
                            />
                        </Drawer>
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
