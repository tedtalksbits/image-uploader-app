import styled from "styled-components";
export const DetailBox = styled.div`
   background: #f6f8fb;
   width: 90%;
   margin: 1rem auto;
   padding: 1rem;
   border-radius: 8px;
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: .4rem;

   p{
      width: 10ch;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
   }

`
export const NoOverflow = styled.small`
   width: 45ch;
   text-overflow: ellipsis;
   white-space: nowrap;
   overflow: hidden;
   font-size: 12px;
   user-select: all;
`

export const DetailItem = styled.div`
   display: flex;
   gap: .5rem;
   align-items: center;
   color: #bdbdbd;
`