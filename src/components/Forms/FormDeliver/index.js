import React, {useState} from 'react'
import {
    FormContainer,
    FormRest
} from './FormElements'
import { send } from 'emailjs-com';

const Form = () => {
  const [register, setRegister] = useState({
    fullName: "",
    phoneNumber: "",
    emailAddress: "",
    city: ""
  });

  const handleChange = (event) => {
    const {name, value} = event.target;
    console.log(register)
    setRegister((oldValue)=>{
        return {
            ...oldValue,
            [name]: value
        };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        register,
        process.env.REACT_APP_PUBLIC_KEY
    )
    .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setRegister(()=>{
          return {
              fullName: "",
              phoneNumber: "",
              emailAddress: "",
              city: ""
          }
        })
    })
    .catch((err) => {
        console.log('FAILED...', err);
    });
  }

  return (
    <FormContainer>
    <FormRest onSubmit={handleSubmit}>
      <label htmlFor="full_name">Full Name:</label>
      <input 
      type="text" 
      id="full_name"
      name="fullName"
      value={register.fullName}
      onChange={handleChange}></input>

      <label htmlFor="phone_number">Phone Number:</label>
      <input 
      type="tel" 
      id="phone_number"
      name="phoneNumber"
      value={register.phoneNumber}
      onChange={handleChange}></input>

      <label htmlFor="email_address">Email Address</label>
      <input 
      type="email" 
      id="email_address"
      name="emailAddress"
      value={register.emailAddress}
      onChange={handleChange}
      ></input>

      
      <label htmlFor="city">City</label>
      <input 
      type="text" 
      id="city"
      name="city"
      value={register.city}
      onChange={handleChange}
      ></input>
      <input type="submit"></input>

    </FormRest>
    </FormContainer>
  )
}

export default Form
