import React, {useState} from 'react'
import {
    FormContainer,
    FormRest
} from './FormElements'

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

  return (
    <FormContainer>
    <FormRest>
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
