import styled from 'styled-components';
import {
  display,
  alignItems,
  justifyContent,
  flexWrap,
  flexDirection,
  boxShadow,
  color,
  space,
  borderRadius,
  width,
  height
} from 'styled-system';

const NavbarStyle = styled.nav`
  /* Navbar default style goes here */

  display: flex;
  align-items: center;
  min-height: 56px;
  padding: 10px 16px;
  background: ${props=>props.initialShadow?'white':''};
  box-shadow: ${props=>props.initialShadow?"0 0px 40px 0 rgba( 31, 38, 135, 0.57 )":''};

  /* Style system supported prop */
  ${display}
  ${alignItems}
  ${justifyContent}
  ${flexDirection}
  ${flexWrap}
  ${width}
  ${height}
  ${color}
  ${space}
  ${boxShadow}
  ${borderRadius}
`;

NavbarStyle.displayName = 'NavbarStyle';

export default NavbarStyle;
