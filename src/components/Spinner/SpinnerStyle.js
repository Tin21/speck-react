import styled from "styled-components"
import { breakpoints, colors } from "../../utils/styles/theme"

export const SpinnerWrapper = styled.div`
    margin-top: 80px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (${breakpoints.desktop}) {
        margin-top: 120px;
    }
`