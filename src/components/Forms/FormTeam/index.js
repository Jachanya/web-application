import React, {useState} from 'react'
import {
    FormContainer,
    FormRest,
    InputField,
    Label,
    Input,
    H1,
    Button
} from '../FormElements';
import { send } from 'emailjs-com';


const FormTeam = () => {
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
          <H1>
          Welcome to Afoodo, thank you for your interest!
           Please fill in the fields below
           and we will contact you shortly!
          </H1>
          <InputField>
            <Label htmlFor="full_name">Full Name:</Label>
            <Input 
            type="text" 
            required
            id="full_name"
            name="fullName"
            value={register.fullName}
            onChange={handleChange}></Input >
          </InputField>
          
          <InputField>
            <Label htmlFor="phone_number">Phone Number:</Label>
            <Input  
            type="tel" 
            id="phone_number"
            name="phoneNumber"
            required
            value={register.phoneNumber}
            onChange={handleChange}></Input >
          </InputField>
          
          <InputField>
            <Label htmlFor="email_address">Email Address:</Label>
            <Input  
            type="email" 
            id="email_address"
            name="emailAddress"
            required
            value={register.emailAddress}
            onChange={handleChange}
            ></Input>
          </InputField>
          
          <InputField>
            <Label htmlFor="city">City:</Label>
            <Input  
            type="text" 
            id="city"
            name="city"
            required
            value={register.city}
            onChange={handleChange}
            ></Input >
          </InputField>
          
          <Button  type="submit"></Button >
    
        </FormRest>
        </FormContainer>
      )
}

export default FormTeam
