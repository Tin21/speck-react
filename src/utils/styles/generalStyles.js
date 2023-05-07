import styled, {css} from "styled-components";
import { breakpoints, colors, fonts} from "./theme";
import { Form as FormFormik, Field as FieldFormik, ErrorMessage as ErrorMessageFormik } from "formik";

export const Button = styled.button`
    padding: 12px 20px;
    background-color: ${colors.primary};
    border-radius: 4px;
    color: ${colors.secondary};
    transition: background-color 0.3s ease-out;
    border: none;
    outline: none;
  
    ${props => props.isSecondary && `
        padding: 13px 20px;
        height: 40px;
        
        @media screen and (${breakpoints.desktop}) {
          height: 44px;
        }
    `}

    ${props => props.isOutline && `
        background-color: ${colors.secondary};
        border: 1px solid ${colors.primary};
        color: ${colors.primary};
        margin-right: 32px;
    `}

    ${props => props.isEdit && `
        background-color: ${colors.secondary};
        border: 1px solid ${colors.primary};
        color: ${colors.primary};
        height: 40px;

        @media screen and (${breakpoints.desktop}) {
          height: 44px;
        }
    `}
  
  &:Hover {
    background-color: ${colors.primaryDark};

    ${props => props.isOutline && `
        color: ${colors.secondary};
    `}

    ${props => props.isEdit && `
        color: ${colors.secondary};
    `}
  }
`

export const Grid = styled.div`
    display: grid;
    gap: 32px;

    @media screen and (${breakpoints.tabletSmall}) {
    
    grid-template-columns: repeat(2, 1fr);
  }

    @media screen and (${breakpoints.tabletLarge}) {
        grid-template-columns: repeat(3, 1fr);
  }

    @media screen and (${breakpoints.desktopLarge}) {
        grid-template-columns: repeat(4, 1fr);
  }

  ${props => props.isProfilePage && `
     @media screen and (${breakpoints.desktop}) {
    
        grid-template-columns: repeat(3, 1fr);

    }
    `}
`

export const Form = styled(FormFormik)`

    @media screen and (${breakpoints.tabletSmall}) {
        max-width: 400px;
        margin: 0 auto;
    }

    ${props => props.isProfileForm && `
      width:100%;
    `}
`

export const FormRow = styled.div`
    margin-bottom: 32px;

    &:last-child{
      margin-bottom: 0;
    }
`

const FieldStyle = css`
  border: 1px solid ${colors.textSecondary};
  border-radius: 6px;
  width: 100%;
  line-height: 50px;
  height: 50px;
  padding: 0 12px;
  outline: none;
  font-size: 14px;
  font-family: ${fonts.primary};

  &:focus {
    border: 1px solid ${colors.textPrimary};
  }

  @media screen and (${breakpoints.desktop}) {
    font-size: 16px;
  }
`

export const Field = styled(FieldFormik)`
    ${FieldStyle};
`

export const Select = styled.select`
    ${FieldStyle};
`

export const Option = styled.option`

`

export const ErrorMessage = styled(ErrorMessageFormik)`
    font-size: 14px;
    color: ${colors.primary};
    padding-top: 8px;
`

export const Label = styled.label`
  font-size: 16px;
  font-family: ${fonts.primary};
  display: inline-block;
  margin-bottom: 6px;
`

export const ResetPassBackground = styled.div`
  background-color: ${colors.bgSecondary};
  height:max-content;
  padding: 20px 16px;
  font-family: ${fonts.primary};
`

export const ResetPassTitle = styled.h3`
  font-size: 16px;
  font-weight: 700;
  padding-bottom: 16px;
`

export const ResetPassSubtitle = styled.p`
  font-size: 14px;
`