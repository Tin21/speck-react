import { ReactComponent as HamburgerIcon } from "../../assets/images/icon-hamburger.svg"
import { breakpoints,colors,fonts } from "../../utils/styles/theme";
import styled from "styled-components";

export const HamburgerMenu = styled (HamburgerIcon)`
    display: none;
    height: 32px;
    width: 32px;
    
    @media screen and (${breakpoints.desktop}) {
      display: none;
    }
    
`;

export const HamburgerHeaderInner = styled.div`
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 24px;
    flex-direction: column;

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

export const HamburgerMenuInner = styled.div`
    height: 304px;
    width: 200px;
    position: absolute;
    font-weight: 700;
    z-index: 1;
    background-color: rgba(240,240,240,1);
    right: 0;
    top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom-left-radius: 10px;;

    
`

export const HamburgerMenuItem = styled.div`
    font-family: ${fonts.primary};
    padding: 28px;
    font-size: 16px;
    transition: color 0.3s ease-out;

    &:Hover {
      color: ${colors.primary};
    }

    &.active{
      color: ${colors.primary};
      }
`


