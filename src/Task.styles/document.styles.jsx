import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle` 
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        font-family: 'Poppins', sans-serif;
    }
`

export const Nav = styled.div`
    font-size: 21px;
    color: #fff;
    letter-spacing: 1px;
    height: 60px;
    width: 100vw;
    background-color: #333333;
    padding: 15px 0 0 15px;
    display: flex;
`

// Login-btn
export const LoginBtn = styled.button`
    padding: 0.6rem 0.8rem;
    margin-top: 20px;
    background-color: #3A11CC;
    border: none;
    border-radius: 5px;
    color: #eeeded;
    cursor: pointer;

    &:hover{
        background-color: #3333cc;
        transition: 0.5s all ease;
    }
`

// Input fields
export const Input = styled.input`
    height: 32px;
    width: 600px;
    padding: 8px;
    outline: none;
    font-size: 15px;
    border-radius: 5px;
    border: ${props => props.isInvalid ? "1px solid red" : "1px solid #5E85B1"};
`

// valid message 

export const ValidPopUp = styled.p`
    font-size: 15px;
    margin-left: 5px;
    margin-top: 5px;
    color:  red;
`

// LoginModal
export const LoginModal = styled.p`
    height: 45px;
    width: 500px;
    background-color: #FFF7C9;
    margin-left: 2.5rem;
    margin-bottom: 10px;
    margin-top: 37px;
    padding: 10px 0 0 65px;
    color: #99893e;
    font-weight: 500;
    display: flex;
    justify-content: space-between;
`
