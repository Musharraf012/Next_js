import { Iregistration } from '@/Inerface/registration';
import axios from 'axios';
import { Field, Form, Formik } from 'formik';
import React from 'react'

export default function registrationpage() {
    let initialValues1:Iregistration ={
        firstName:'',
        title:'',
        lastName:'',
        email:'',
        password:'',
        confirmPassword:'',
        acceptTerms:false,
    }
  return (
    <Formik
      initialValues={initialValues1}
      onSubmit={ (values:Iregistration) => {
       console.log(values);
       axios.post<Iregistration>("https://real-pear-fly-kilt.cyclic.app/accounts/register",values)
       .then((response) => {
          console.log(response);
        })      
      }}
    >
      <Form>
       <div>
       <label htmlFor="firstName">First Name</label>
        <Field id="firstName" name="firstName" placeholder="Jane" />
       </div>
      <div>
      <label htmlFor="title">Title</label>
        <Field id="title" name="title" placeholder="dsfsdb" />
      </div>

       <div>
       <label htmlFor="lastName">Last Name</label>
        <Field id="lastName" name="lastName" placeholder="Doe" />
       </div>

       <div>
       <label htmlFor="email">Email</label>
        <Field
          id="email"
          name="email"
          placeholder="jane@acme.com"
          type="email"
        />
       </div>
       <div>
       <label htmlFor="password">password</label>
        <Field type="password" id="password" name="password" placeholder="3213123" />
       </div>
       <div>
       <label htmlFor="confirmPassword">confirmPassword</label>
        <Field type="password" id="confirmPassword" name="confirmPassword" placeholder="3213123" />
       </div>
       <div>
       <label htmlFor="password">acceptTerms</label>
        <Field type="checkbox" id="acceptTerms" name="acceptTerms"/>
       </div>
        <button type="submit">Submit</button>
      </Form>
    </Formik>

  )
}
