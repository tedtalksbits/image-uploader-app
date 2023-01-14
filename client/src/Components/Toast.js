import React from 'react'
import styled from 'styled-components'

const Container = styled.aside`
   padding: 1rem;
   border-radius: 8px;
   box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
   border: lightgrey 1px solid;
   background: white;
   position: fixed;
   bottom: 15%;
   animation: anim_in linear 3.5s forwards;


   @keyframes anim_in{
      0%{
         bottom: -15%;
      }
      12%{
         bottom: 15%;
      }
      87%{
         bottom: 15%;
      }
      100%{
         bottom: -15%;
      }
   }

`
const Toast = ({ msg }) => {
   return (
      <Container>
         <div className="div">

            <h1>{msg}</h1>
         </div>
      </Container>
   )
}

export default Toast
