import { css } from "styled-components";

export const mobileBox = css`
   @media screen and (max-width: 650px){
      width: 100%;
   }
`
export const mobileApp = css`
    @media screen and (max-width: 650px){
      padding: 0 1rem;
   }
`

export const buttonStyles = css`
   background: #2F80ED;
   font-size: 14px;
   color: white;
   border-radius: 8px;
   border: none;
   padding: .55rem 1.55rem;
   cursor: pointer;
   position: relative;
   width: fit-content;
   margin: .35rem auto;

`