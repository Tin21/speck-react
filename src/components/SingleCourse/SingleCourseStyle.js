import styled from "styled-components";
import { colors, breakpoints } from "../../utils/styles/theme";

export const SingleCourse = styled.article`
    @media screen and (${breakpoints.tabletLarge}) {
        display: flex;
    }
`

export const SingleCourseFigure = styled.figure`
    width: 100%;
    height: 220px;
    border-radius: 6px;
    overflow: hidden;
    margin-bottom: 32px;

    @media screen and (${breakpoints.tabletSmall}) {
        height: 300px;
    }

    @media screen and (${breakpoints.tabletLarge}) {
        height: 350px;
        width: 350px;
        flex-shrink: 0;
        margin-right: 48px;
    }

    @media screen and (${breakpoints.desktopLarge}) {
        height: 450px;
        width: 500px;
        margin-right: 80px;
    }
`

export const SingleCourseImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

export const SingleCourseContent = styled.p`
    font-size: 16px;
    line-height: 150%;
`



