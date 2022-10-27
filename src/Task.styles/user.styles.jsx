import styled from 'styled-components'

export const Button = styled.button`
    background-color: ${(props) => props.backgroundColor};
    border: none;
    color:#fff;
    font-size: 15px;
    border-radius: 5px;
    letter-spacing: 0.5px;
    cursor: pointer;

    &:nth-child(1), :nth-child(2){
        padding: 0.6rem 0.5rem; 
        margin-left: 1rem;
    }

    &:nth-child(1):hover{
        background-color: #348ec2;
        transition: 0.3s all ease;
    }

    &:nth-child(2):hover{
        background-color: #d50f19;
        transition: 0.3s all ease;
    }

`

export const ButtonAdd = styled.button`
        background-color: #20a614;
        border: none;
        transition: 0.3s all ease;
        cursor: pointer;
        padding: 0.6rem 0.9rem;
        border-radius: 5px;
        color: #fff;
        font-size: 15px;
        margin: 2rem 5rem 0 0;

         &:hover{
            background-color: #126c0a;
            transition: 0.3s all ease;
         }
`

export const TableHead = styled.p`
    font-weight: 400;
`

export const TalbeHeading = styled.p`
    font-size: 15px;
    font-weight: 600;
`

export const TableWrapper = styled.div`
    height: 400px;
    overflow-y: auto;
    display: inline-block;
`
export const HoverAsc = styled.p`
    font-size: 13px;
    background-color: #7e7878;
    color: #fff;
    padding: 5px;
    position: absolute;
    top: 0;
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
    left: 46%;
    border-radius: 10px;
    display: ${props => { 
        return props.isHover ? 'inline-block' : 'none'
     } };
`

export const SearchBar = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 13px;
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

export const FilterDiv = styled.div`
    display: flex;
    margin-left: 30rem;
    margin-bottom: -20px;
`

export const DropDownDiv = styled.div`
    margin-top: 13px;

    & select{
        background-color: #DEDEDE;
        height: 33px;
        outline: none;
    }
`

export const NoUser = styled.p`
    color: #7e7878;
    text-align: center;
    padding-top: 1rem;
`