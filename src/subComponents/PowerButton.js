//Home button
import React from 'react'
import styled from 'styled-components'
import { PowerBtn } from '../components/AllSvgs'
import { NavLink } from 'react-router-dom'
const Power = styled.button`

position: fixed;
top: 2rem;
left: 50%;
transform:translate(-50%, 0);

background-color: #FCF6F4;
padding: 0.1rem;
border-radius: 50%;
border: 2px solid #000;
width: 2.5rem;
heigth: 2.5rem;

display: flex;
justify-content: center;
aling-item: center;
z-index: 3;

cursor: pointer;

&:hover{
    background-color: rgba(0,255,0,0.4);//cambiar color
    box-shadow: 0 0 8px 6px rgba(0, 255,0,0.2);
}

&>*:first-child{
    text-decoration: none;
    color: inherit;
}
`

export const PowerButton = () => {
    return (
         <Power>
         <NavLink to="/">
         <PowerBtn width={30} heigth={30} fill='currentColor'/>
         </NavLink>
        </Power>
    )
}

export default PowerButton