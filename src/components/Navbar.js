import React, { Component } from 'react'
import {Link} from "react-router-dom";
import logo from './Logo.png';
import { domainToASCII } from 'url';
import styled from 'styled-components';
import {ButtonContainer} from './Button';

//1.15.00 de kaldım
export default class Navbar extends Component{

    render(){
        return (
           <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
               {/* 
https://www.iconfinder.com/icons/1243689/call_phone_icon
Creative Commons (Attribution 3.0 Unported);
               https://www.iconfinder.com/Makoto_msk */}
               <Link to = '/'>
               <img src={logo} alt="store"  style={{width:55}}className="navbar-brand"/>

               </Link>
               <ul className="navbar-nav align-items-center">
                   <li className="nav-item ml-5">
                    <Link to = "/" className="nav-link">
                        honey varients

                    </Link>

                   </li>
               </ul>
               <Link to='/cart' className="ml-auto">
                   <ButtonContainer>
                    <span className="mr-2">
                    <i className="fas fa-cart-plus" />
                       my cart 
                    </span>
                     
                   </ButtonContainer>
                   <Link to='/about' className="ml-auto">
                    <ButtonContainer>
                    <span className="mr-2">
                    <i class="fas fa-address-card"/>
                       about us
                    </span>
                     
                   </ButtonContainer>
                   </Link>

               </Link>



           </NavWrapper>
        )
    }
}
const NavWrapper = styled.nav`
background: var(--mainBlue);
.nav-link{
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
    
}

`;