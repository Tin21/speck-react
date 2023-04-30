import styled from "styled-components";
import { breakpoints, colors} from "../../utils/styles/theme";
import { ReactComponent as SearchIcon } from "../../assets/images/search-icon.svg"

export const SearchBar = styled.div`
    background-color: rgba(240,240,240,1);
    position: absolute;
    left: 0px;
    top: 0px;
    z-index: 5;
    height: 48px;
    width: 180px;
    padding: 16px;
    border-radius: 32px;
    margin: 16px;
    display: flex;
    align-items: center;
    overflow: hidden;
    white-space: nowrap;

  @media screen and (${breakpoints.mobileLarge}) {
    left: 160px;
    padding: 20px;
  }

  @media screen and (${breakpoints.tabletSmall}) {
    width: 200px;
  }

  @media screen and (${breakpoints.tabletLarge}) {
    width: 230px;
  }

  @media screen and (${breakpoints.desktop}) {
    left: calc((100%/2) - 310px);
    width: 270px;
  }

  @media screen and (${breakpoints.desktopLarge}) {
    left: calc((100%/2) - 480px);
  }
`

export const SearchBarLogo = styled (SearchIcon)`
    display: block;
    min-width: 16px;
    height: 20px;
    width: 20px;
    margin-right: 16px;
`

export const SearchBarInput = styled.input`
    background-color: rgba(240,240,240,1);
    border: none;
    outline: none;
    font-size: 16px;
    min-height: 24px;
`

