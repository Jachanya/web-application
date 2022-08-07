import styled from 'styled-components';

export const FormContainer = styled.div`
    padding: 2rem;
`

export const FormRest = styled.form`
    padding: 1rem;
    display: flex;
    flex-direction: column;
    margin: 3rem auto;
    gap: 0.5rem;
    max-width: 800px;
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset;
`
export const H1 = styled.h1`
    margin-bottom: 2rem;
    color: #9433FF;
    font-size: 1.3rem;
`

export const InputField = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export const Label = styled.label`
    font-family: 'Oleo Script Swash Caps', cursive;
    font-size: 1.4rem;
`

export const Input = styled.input`
    min-height: 2.5rem;
    outline: none;
    border: none;
    padding-left: 1rem;
    border-radius: 5px;
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    transition: all 0.2s ease-in-out;
    &:focus {
        transition: all 0.2s ease-in-out;
        color: white;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;
    }
`

export const Button = styled.input`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    white-space: nowrap;
    background: #9433FF;
    color: white;
    margin-top: 1rem;
    padding: 10px;
    text-align: center;
    padding: auto;
    text-decoration: none;
    cursor: pointer;
    font-size: 20px;
    outline: none;
    border: none;
    
    transition: all 0.2s ease-in-out;
    &:hover {
        transition: all 0.2s ease-in-out;
        background:  #9D62DD;
        color: white;
    }
`