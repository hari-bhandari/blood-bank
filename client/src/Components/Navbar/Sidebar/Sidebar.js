import React from 'react';
import {
    CloseIcon,
    Icon,
    SidebarContainer,
    SidebarWrapper,
    SidebarLink,
    SidebarRoute,
    SideBtnWrap,
    SidebarMenu
} from "./SidebarCss";

const Sidebar = ({isOpen,toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} >
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink>Requests</SidebarLink>
                    <SidebarLink>Donors</SidebarLink>
                    <SidebarLink>FAQ</SidebarLink>
                    <SidebarLink>Request For a Blood</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute>Login/Signup</SidebarRoute>
                </SideBtnWrap>

            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;