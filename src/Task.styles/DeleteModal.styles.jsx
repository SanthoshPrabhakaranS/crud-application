import styled from 'styled-components'

export const DeleteModalDiv = styled.div`
    background-color: #fff;
    width: 400px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 7px;

    & p{
        font-size: 18px;
        margin-bottom: 2rem;
    }
`

export const DeletBtnDiv = styled.div`
    
`

export const DeleteModalBtn = styled.button`
    padding: 0.6rem 0.8rem;
    margin: 0 1rem 1rem 1rem;
    cursor: pointer;
    border: none;
    border-radius: 5px;

    &:nth-child(1){
        background-color: #f2eeee;
        color: #000;
        border: 1px solid #c1baba;
    }
    &:nth-child(1):hover{
        background-color: #e6e1e1;
    }
    &:nth-child(2){
        background-color: #FF000D;
        color: #fff;
        /* border: 1px solid #FF000D; */
    }
    &:nth-child(2):hover{
        background-color: #de0e18;
    }
`