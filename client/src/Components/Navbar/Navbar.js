import React,{useContext} from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink, NavBtnLinkDiv
} from './NavbarElements';
import logo from './logo.svg'
import AuthContext from "../../Context/auth/authContext";
import {toast} from "react-toastify";

const Navbar = () => {
    const authContext=useContext(AuthContext);
    const {isAuthenticated,logout}=authContext;
    const logMeOut=()=>{
        toast.success("You have been logged out", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        logout()
    }
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
                    {isAuthenticated ? (<NavBtnLinkDiv onClick={logMeOut}>Logout</NavBtnLinkDiv>) :
                        (<NavBtnLink to='/login'>Sign In/Signup</NavBtnLink>)}
                </NavBtn>
            </Nav>
        </>
    );
};

export default Navbar;
