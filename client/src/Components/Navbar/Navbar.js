import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
} from './NavbarElements';
import logo from './logo.svg'

const Navbar = () => {
    const isAuthenticated = false
    return (
        <>
            <Nav>
                <NavLink to='/'>
                    <img src={logo} alt='logo'/>
                </NavLink>
                <Bars/>
                <NavMenu>
                    <NavLink to='/about' activeStyle>
                        About
                    </NavLink>
                    <NavLink to='/donors' activeStyle>
                        Donors
                    </NavLink>
                    <NavLink to='/request' activeStyle>
                        Request For Blood
                    </NavLink>
                    <NavLink to='/help' activeStyle>
                        FAQ
                    </NavLink>

                    {/* Second Nav */}
                </NavMenu>
                <NavBtn>
                    {isAuthenticated ? (<NavBtnLink to='/login'>Sign In/Signup</NavBtnLink>) :
                        (<NavBtnLink to='/login'>Sign In/Signup</NavBtnLink>)}
                </NavBtn>
            </Nav>
        </>
    );
};

export default Navbar;
