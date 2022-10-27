import styled from "styled-components";

export const ButtonEdit = styled.button`
        background-color: #8113FF;
        border: none;
        color:#fff;
        font-size: 15px;
        border-radius: 5px;
        letter-spacing: 0.5px;
        padding: 0.6rem 0.5rem; 
        cursor: pointer;

        &:hover{
            background-color: #640dc6;
            transition: 0.3s all ease;
        }
`

export const NetworkAdd = styled.button`
        background-color: #20a614;
        border: none;
        transition: 0.3s all ease;
        cursor: pointer;
        padding: 0.6rem 0.9rem;
        border-radius: 5px;
        color: #fff;
        font-size: 15px;
        margin: 2rem 13rem 0 0;

         &:hover{
            background-color: #126c0a;
            transition: 0.3s all ease;
         }
`
export const TalbeHeading = styled.p`
    font-size: 15px;
    font-weight: 600;
`

export const HoverAsc = styled.p`
    font-size: 13px;
    background-color: #7e7878;
    color: #fff;
    padding: 5px;
    position: absolute;
    top: 0;
    left: 48%;
    border-radius: 10px;
    display: ${props => { 
        return props.isHover ? 'inline-block' : 'none'
     } };
`

export const HoverDsc = styled.p`
    font-size: 13px;
    background-color: #7e7878;
    color: #fff;
    padding: 5px;
    position: absolute;
    top: 0;
    left: 48%;
    border-radius: 10px;
    display: ${props => { 
        return props.isHover ? 'inline-block' : 'none'
     } };
`

export const SearchBar = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 20px 20.5rem -15px 0;
`

export const SearchInput = styled.input`
    width: 300px;
    height: 35px;
    padding: 5px;
    font-size: 15px;
    border-radius: 5px;
    border: 1px solid #348ec2;
    outline: none;
`

export const SearchLabel = styled.label`
    font-size: 15px;
    font-weight: 400;
    margin: 5.5px 10px 0 0 ;
`

export const NoNetwork = styled.p`
    color: #7e7878;
    text-align: center;
    padding-top: 1rem;
    margin-left: -7rem;
`