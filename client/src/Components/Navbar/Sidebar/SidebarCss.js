import styled from "styled-components";
import {FaTimes} from "react-icons/all";
import {Link} from "react-router-dom";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 50%;
  height: 100%;
  background: #0d0d0d;
  display: grid;
  align-items: center;
  left: 50%;
  transition: 0.3s ease-in-out;
    opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
    top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
`
export const CloseIcon = styled(FaTimes)`
  color: #ffffff`
export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  outline: none;
  &:hover{
    cursor: pointer;
  }
`
export const SidebarWrapper = styled.div`
  color: #ffffff;
`
export const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #ffffff;
  cursor: pointer;

  &:hover {
    color: #01bf71;
    transition: 0.2s ease-in-out;
  }

`
export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`
export const SidebarRoute=styled(Link)`
  margin-top: 10px;
  border-radius: 50px;
  background: ${(props)=>props.color?'#4436d4':'#01bf71'};
  white-space: nowrap;
  padding: 15px 64px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover{
    transition: all 0.2s ease-in-out;
    background: #ffffff;
    color: #010606;
  }
`
export const SidebarMenu=styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6,80px);
  text-align: center;
  @media screen and (max-width: 400px){
    grid-template-rows: repeat(6,60px);
  }
`
