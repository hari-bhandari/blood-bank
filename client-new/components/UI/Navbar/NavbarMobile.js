import React, {useContext, useState} from 'react';
import {CgProfile} from "react-icons/cg";
import {BiAddToQueue} from "react-icons/bi";
import {BsCardList} from "react-icons/bs";
import {AiOutlineLogin} from "react-icons/ai";
import styled from 'styled-components'
import HamburgMenu from "../../HamburgMenu";
import Drawer from "../../elements/Drawer";
import HamburgerMenu from "../../HamburgMenu";
import ScrollSpyMenu from "../../ScrollSpyMenu";
import {MENU_ITEMS, MENU_RIGHT_ITEMS} from "../../data/Ride";
import Dropdown from "../../Dropdown";
import {AiFillCaretDown} from "react-icons/ai";
import authContext from "../../Context/auth/authContext";
import Link from "next/link";
import {MyProfileComponent} from "./Navbar";


const MobileNav = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1.2rem 0;
  background-color: #fef8f8;
  z-index: 99;
  will-change: transform;
  transform: translateZ(0);
  box-shadow: 0px 0px 40px 0px rgb(31 38 135 / 100%);
  @media (min-width: 992px) {
    display: none;
  }
  font-family: 'Poppins', sans-serif;
`
const NavItem = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  text-align: center;
  font-size: 0.8rem;
  color: #000000;

  &:hover {
    cursor: pointer;
  }
`
const NavLink = styled.div`

  svg {
    margin-right: 10px;
    width: 25px;
    height: 25px;
  }

  span {
    font-size: 17px;
  }

  margin: auto;
  display: flex;
`
const NavbarMobile = () => {
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
            <MobileNav>
                <NavItem>
                    {isAuthenticated ?
                        <Link href={'/profile'} key={15}>
                            <NavLink>
                                <CgProfile/>
                                <span>Profile</span>
                            </NavLink>
                        </Link> :
                        <Link href={'/login'} key={16}>
                            <NavLink>
                                <AiOutlineLogin/>
                                <span>Login</span>
                            </NavLink>
                        </Link>
                    }
                </NavItem>
                <NavItem>
                    {isAuthenticated ?
                        <Link href={'/request'} key={12}>
                            <NavLink>
                                <BiAddToQueue/>
                                <span>Request</span>
                            </NavLink>
                        </Link> :
                        <Link href={'/requests'} key={11}>
                            <NavLink>
                                <BsCardList/>
                                <span>Requests</span>
                            </NavLink>
                        </Link>
                    }
                </NavItem>
                <NavItem>
                    <NavLink>
                        <Drawer
                            width="420px"
                            placement="right"
                            drawerHandler={<HamburgerMenu barColor="black"/>}
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
                    </NavLink>
                </NavItem>
            </MobileNav>
    );
};

export default NavbarMobile;