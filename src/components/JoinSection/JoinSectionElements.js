import styled from 'styled-components'


export const JoinContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 100px;
    @media screen and (max-width: 500px){
        flex-direction: column;
        margin: 20px;
    }
`

export const JoinCardList = styled.div`
    display: flex;
    max-width: 1500px;
    justify-content: center;
    gap: 30px;
    margin: 10px;
    @media screen and (max-width: 900px){
        flex-direction: column;
        align-items: center;
        gap: 30px;
    }
`