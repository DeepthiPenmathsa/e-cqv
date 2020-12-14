import React from 'react'
import styled from 'styled-components';

function Navbar2() {
    return (
        <Header>
            <Logo>Logo</Logo>
            <Navbar>
                <a href="#">Contact us</a> |
                <a href="#">Sign In</a>
            </Navbar>
        </Header>
    )
}

export default Navbar2;

const Header = styled.div`
    width:100%;
    height: 10vh;
    background-color: #241056;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
`
const Logo = styled.div`
    font-size: 3rem;
    font-weight: 600;
    text-transform: uppercase;
    margin-left: 10vw;
`
const Navbar = styled.div`
    color: white;
    min-width:30vw;
    display: flex;
    justify-content: center;
    align-items:center;
    font-size: 2rem;
    & a{
        display:block;
        text-decoration: none;
        margin: 0 1rem;
        padding: .5rem  1rem;
        color:white;
        border-radius:0.4rem;

        &: hover{
            background-color:#eeeeee;
            color:#241056;
        }
    }
    
`
