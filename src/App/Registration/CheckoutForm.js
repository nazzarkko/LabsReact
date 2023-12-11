import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import './Checkout.css';

const CheckoutForm = () => {
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        companyName: '',
        email: '',
        phoneNumber: '',
      }}
      validationSchema={Yup.object({
        firstName: Yup.string().required('First name is required'),
        lastName: Yup.string().required('Last name is required'),
        companyName: Yup.string().required('Company name is required'),
        email: Yup.string()
          .email('Invalid email address')
          .required('Email is required')
          .test({
            name: 'is-gmail',
            message: 'Email must end with "gmail.com"',
            test: (value) => {
              return value.endsWith('gmail.com');
            },
          }),
        phoneNumber: Yup.string()
          .matches(/^\+380[0-9]+$/, 'Invalid phone number. Must start with "+380"')
          .required('Phone number is required'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
        setSubmitting(false);
        navigate('/success');
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <label className='CheckLabel' htmlFor="firstName">First Name</label>
            <Field type="text" id="firstName" name="firstName" />
            <ErrorMessage name="firstName" component="div" />
          </div>
          <div>
            <label className='CheckLabel' htmlFor="lastName">Last Name</label>
            <Field type="text" id="lastName" name="lastName" />
            <ErrorMessage name="lastName" component="div" />
          </div>
          <div>
            <label className='CheckLabel' htmlFor="company">Company</label>
            <Field type="text" id="companyName" name="companyName" />
            <ErrorMessage name="companyName" component="div" />
          </div>
          <div>
            <label className='CheckLabel' htmlFor="email">Email</label>
            <Field type="email" id="email" name="email" />
            <ErrorMessage name="email" component="div" />
          </div>
          <div>
            <label className='CheckLabel' htmlFor="phoneNumber">Phone Number</label>
            <Field type="tel" id="phoneNumber" name="phoneNumber" />
            <ErrorMessage name="phoneNumber" component="div" />
          </div>
          <button id='buttonCheck' type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default CheckoutForm;
