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

const Navbar = ({toggle}) => {
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
                <Bars onClick={toggle}/>
                <NavMenu>
                    <NavLink to='/' >
                        Find Requests
                    </NavLink>
                    <NavLink to='/donors' activeStyle>
                        Find donors
                    </NavLink>
                    <NavLink to='/request' activeStyle>
                        Request For Blood
                    </NavLink>
                    <NavLink to='faq' activeStyle>
                        FAQ
                    </NavLink>
                    {/* Second Nav */}
                </NavMenu>
                <NavBtn>
                    {isAuthenticated ? (<NavBtnLinkDiv onClick={logMeOut}>Logout</NavBtnLinkDiv>) :
                        (<NavBtnLink to='/login'>Sign In/Signup</NavBtnLink>)}
                    {isAuthenticated&&<NavBtnLink to='/requests'>My Requests</NavBtnLink>}
                </NavBtn>
            </Nav>
        </>
    );
};

export default Navbar;
