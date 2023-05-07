import styled from "styled-components";
import { colors, breakpoints, fonts } from "../../utils/styles/theme";
import { ReactComponent as HamburgerIcon } from "../../assets/images/icon-hamburger.svg"
import { ReactComponent as Logo } from "../../assets/images/logo.svg"
import { NavLink } from "react-router-dom";


export const Header = styled.header`
background-color: ${colors.bgSecondary};
`

export const HeaderInner = styled.div`
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px;

    @media screen and (${breakpoints.tablet}) {
      padding: 0 32px;
    }

    @media screen and (${breakpoints.desktop}) {
      padding: 0;
      max-width: 930px;
      margin: 0 auto;
    }

    @media screen and (${breakpoints.desktopLarge}) {
      max-width: 1280px;
    }
`;

export const Hamburger = styled (HamburgerIcon)`
    display: block;
    height: 32px;
    width: 32px;
    
    @media screen and (${breakpoints.desktop}) {
      display: none;
    }
`;

export const LogoImg = styled (Logo)`
  path {
    fill: ${colors.primary};
    }
`;

export const HeaderLink = styled (NavLink)`
      margin-right: 32px;
      line-height: 80px;
      transition: color 0.3s ease-out;

      &:Hover {
      color: ${colors.primary};
    }

    &.active{
      color: ${colors.primary};
      font-weight: 700;
    }
`;

export const HeaderNav = styled.nav`
      display: none;

    @media screen and (${breakpoints.desktop}) {
      display: flex;
      align-items: center;
}
`;

export const HamburgerMenuInner = styled.div`
    height: 380px;
    width: 200px;
    position: absolute;
    font-weight: 700;
    z-index: 10;
    background-color: rgba(240,240,240,1);
    right: 0;
    top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom-left-radius: 10px;

    @media screen and (${breakpoints.tabletLarge}) {
      height: 425px;
      width: 240px;
      font-weight: 800;
    }

    @media screen and (${breakpoints.desktop}) {
      display: none;
    }
`

export const HamburgerMenuItem = styled.div`
    font-family: ${fonts.primary};
    padding: 28px;
    font-size: 16px;
    transition: color 0.3s ease-out;

    @media screen and (${breakpoints.tabletLarge}) {
      padding: 32px;
      font-size: 18px;
    }

    &:Hover {
      color: ${colors.primary};
    }

    &.active{
      color: ${colors.primary};
      }
`

export const HamburgerNavLink = styled (NavLink)`
    &.active{
      color: ${colors.primary};
      font-weight: 700;
    }
`;