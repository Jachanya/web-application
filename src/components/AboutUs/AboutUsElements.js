import styled from 'styled-components';

export const AboutUsContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 90px;
    align-items: center;
`

export const Header = styled.h2`
    text-align: center;
    font-size: 2.5rem;
    font-family: 'Roboto', sans-serif;
`

export const AboutUsPara = styled.p`
    margin-top: 1rem;
    font-family: 'Roboto', sans-serif;
    font-size: 1.3rem;
    max-width: 800px;
    @media screen and (max-width: 800px){
        margin: 20px;
    }
`

export const HowItWork = styled.div`
    display: flex;
    margin-top: 4rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media screen and ( max-width: 800px){
        flex-direction: column;
    }
`

export const HowItWorkH3 = styled.h2`
    width: 100%;
    font-size: 2rem;
    margin: 1rem;
    text-align: center;
    font-family: 'Roboto', sans-serif;
`

export const BulletPointList = styled.div`
    display: flex;
    min-width: 800px;
    flex-wrap: wrap;
    justify-content: center;
    gap: 3rem;
    @media screen and ( max-width: 800px){
        flex-direction: column;
        gap: 4rem;
        padding-top: 4rem;
    }
`


export const BulletPoint = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'Roboto', sans-serif;
    align-items: center;
    gap: 1rem;
    min-width: 360px;
`

export const BulletPointH3 = styled.h3`
    font-size: 1.4rem;
`

export const BulletPointP = styled.p`
    max-width: 360px;
    font-size: 1.3rem;
`
