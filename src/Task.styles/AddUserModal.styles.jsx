import styled from "styled-components";

export const AddUserModal = styled.div`
    background-color: #00000053;
`

export const Form = styled.div`
    background-color: #fff;
    border-radius: 5px;
`

export const Header = styled.div`
    height: 50px;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid #DEDEDE;
    padding-top: 8px;
    font-size: 20px;
    font-weight: 400;
`
export const Inputs = styled.input`
    height: 35px;
    width: 240px;
    padding: 8px;
    outline: none;
    font-size: 13px;
    margin-bottom: 5px;
    border-radius: 5px;
    border: ${props => props.isInvalid ? "1px solid red" : "1px solid #5E85B1"};
`

export const TextArea = styled.textarea`
    height: 100px;
    width: 500px;
    padding: 8px;
    outline: none;
    font-size: 13px;
    /* border: 1px solid #5E85B1; */
    border-radius: 5px;
    border: ${props => props.isInvalid ? "1px solid red" : "1px solid #5E85B1"};
`

export const Select = styled.select`
     height: 35px;
    width: 240px;
    padding: 8px;
    outline: none;
    font-size: 13px;
    margin-bottom: 5px;
    border: 1px solid #5E85B1;
    border-radius: 5px;
`

export const Label = styled.label`
    font-size: 14.3px;
    margin-top: 8px;
`

export const AddFormBtn = styled.button`
    padding: 0.6rem 0.6rem;
    background-color: ${(props) => props.backgroundColor};
    border: none;
    border-radius: 5px;
    font-size: 15px;
    cursor: pointer;
    color: #fff;

    &:nth-child(1){
        border: 1px solid #e5e3e3;
        margin-right: 12px;
        color: #635f5f;
    }

    &:nth-child(2){
        border: 1px solid #e5e3e3;
        margin-right: 12px;
    }


    &:nth-child(1):hover{
        background-color: #e5e3e3;
    }

    &:nth-child(2):hover{
        background-color: #126c0a;
    }
`

export const FormBtnDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin: 15px 10px 0 0;
    border-top: 1.8px solid #DEDEDE;
    padding-top: 15px;
`

export const Span = styled.span`
    font-size: 14px;
    color: red;
`

export const Img = styled.img`
    height: 70px;
    width: 70px;
    border-radius: 50%;
    margin-left: 2rem;
`

export const Svg = styled.svg`
    &:hover{
        color: #837c7c;
    }
`