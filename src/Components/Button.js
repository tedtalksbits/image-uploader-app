import styled, { css } from "styled-components";
import { buttonStyles } from "../ConstantStyles";

const hover = css`
   
   filter: brightness(1.1);
`
export const Button = styled.a`
   ${buttonStyles}

   &:hover{
      ${hover}
   }

`

export const FileInput = styled.input`
   opacity: 0;
   top: 0;
   width: 100%;
   position: absolute;
   left: 0;
   right: 0;
   bottom: 0;
   cursor: pointer;

   &:hover{
      ${hover}
   }
`