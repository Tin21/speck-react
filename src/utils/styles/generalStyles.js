import styled from "styled-components";
import { colors} from "./theme";

export const Button = styled.button`
    padding: 12px 20px;
    background-color: ${colors.primary};
    border-radius: 4px;
    color: ${colors.secondary};
    transition: background-color 0.3s ease-out;
    border: none;
    outline: none;
  
  &_secondary {
    padding: 16px 20px;
  }
  
  &:Hover {
    background-color: ${colors.primaryDark};
  }
`