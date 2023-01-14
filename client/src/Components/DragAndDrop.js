import React from 'react'
import styled from 'styled-components'
import { mobileBox } from '../ConstantStyles'
import img from '../image.svg'
const DropArea = styled.div`
   
   min-width: 100%;
   width: 350px;
   border: 2px dashed #97BEF4;
   padding: 2rem;
   background: #F6F8FB;
   border-radius: 12px;
   display: flex;
   flex-direction: column;
   gap: 2rem;

   img{
      height: 90px;
   }

   ${mobileBox};

`
const DragAndDrop = () => {
   return (
      <DropArea className='d-area'>
         <img src={img} alt="" className="img" />
         <p>Drag & Drop your image here</p>
      </DropArea>
   )
}

export default DragAndDrop
