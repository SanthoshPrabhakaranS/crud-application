import styled from 'styled-components'

export const NavSides = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100vw;
    font-size: 15px;
    font-weight: 300;
    color: white;
    letter-spacing: 0px;

    & p{
        cursor: pointer;
        color: #ffffffac;
    }

    & p:hover{
        color: #fff;
    }
`

export const NavLeft = styled.div`
    padding-left: 0.7rem;
    display: flex;
    padding-top: 4.8px;
    
    & a{
        padding-left: 15px;
        text-decoration: none;
    }

    .users{
        color: white;
    } 
    .networks{
        color: white;
    }
`

export const NavRight = styled.div`
    padding-right: 4rem;
    padding-top: 4.8px;

    & a{
        text-decoration: none;
    }
`

