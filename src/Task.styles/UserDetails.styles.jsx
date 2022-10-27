import styled from "styled-components";

export const UserNav = styled.nav`
    height: 50px;
    width: 100vw;
    background-color: #D3D3D3;
    padding: 13px 0 0 15px;
    font-size: 14px;
    display: flex;

    &:p:hover{
        background-color: #2d51be;
    }
`

export const UserHeader = styled.div`
    background-color: #FAFAFA;
    height: 50px;
    font-weight: 500;
    padding: 15px;
    border-bottom: 1px solid #a39f9f;
`

export const Wrapper = styled.div`
    margin-top: 3rem ;
    width: 900px;
    border: 1px solid #adaaaa;
    border-radius: 5px;
`
export const UserInfo = styled.div`
    padding: 1rem;
    font-size: 14px;
    display: flex;
    justify-content: space-between;
`

export const SplitDiv = styled.div`
    display: flex;
    flex-direction: column;

    & p{
        margin-bottom: 20px;
    }
`

export const UserImage = styled.img`
    height: 70px;
    width: 70px;
    border-radius: 50%;
`

export const SplitDivThree = styled.div`
    margin-top: 3.5rem;
    width: 50px;
    padding-top: 3rem;

`

export const DataDiv = styled.div`
    margin-top: -3px;
& p:nth-child(2){
    margin-top: -15px;
}
`

export const SplitDivTwo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`
