

import { Iform1 } from '@/Inerface/iForm1';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react'
import * as YUP from 'yup'
// import './color.css'

export default function formikdisplay() {
  const initialValues:Iform1={
    firstName:'',
    lastName:'',
    email:'',
  }
  const validateData =(data:Iform1) : Partial<Iform1>=>{
    let error: Partial<Iform1> = {
      
    };
    if(!data.firstName){
      error.firstName = 'First Name is required';
    }
   if(!data.email){
      error.email = 'Email is required';
  
    }
  return error;}

  return (
    <Formik
    initialValues={initialValues}
    validate={validateData}
    onSubmit={ (values:Iform1) => {
     console.log(values);
     
    }}
  >
    <Form>
      <div>
      <label htmlFor="firstName">First Name</label>
      <Field id="firstName" name="firstName" placeholder="Jane" />
      <ErrorMessage name='firstName' component="span" />
      </div>

    <div>  <label htmlFor="lastName">Last Name</label>
      <Field id="lastName" name="lastName" placeholder="Doe" /></div>

     <div>
     <label htmlFor="email">Email</label>
      <Field
        id="email"
        name="email"
        placeholder="jane@acme.com"
        type="email"
      />
      <ErrorMessage name='email'/>
     </div>
      <button type="submit">Submit</button>
    </Form>
  </Formik>
  )
}
