import styled from "styled-components";
import { colors, breakpoints } from "../../utils/styles/theme";

export const Hero = styled.section`
    height: 570px;
    position: relative;
`

export const HeroFigure = styled.figure`
    width: 100%;
    height: 100%;
`

export const HeroImage = styled.img`
    object-fit: cover;
    height: 100%;
    width: 100%;
`

export const HeroOverlay = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
`

export const HeroContent= styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
`

export const HeroContentInner= styled.div`
    max-width: 1280px;
    margin: 0 auto;

    @media screen and (${breakpoints.desktop}) {
        max-width: 930px;
        margin: 0 auto;
    }

    @media screen and (${breakpoints.desktopLarge}) {
        max-width: 1280px;
    }
`

export const HeroTextCard = styled.div`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    padding: 0 24px;

    @media screen and (${breakpoints.desktop}) {
        padding: 0;
    }
`

export const HeroTitle= styled.h1`
    color: ${colors.secondary};
    font-weight: 600;
    font-size: 28px;
    line-height: 130%;
    letter-spacing: 1px;
    max-width: 450px;
    margin-bottom: 34px;

    @media screen and (${breakpoints.tabletLarge}) {
        font-size: 32px;
    }

    @media screen and (${breakpoints.desktop}) {
        font-size: 36px;
        font-weight: 700;
    }
`

export const HeroSubtitle= styled.p`
    color: ${colors.secondary};
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0.4px;
    max-width: 550px;
    margin-bottom: 32px;
`

