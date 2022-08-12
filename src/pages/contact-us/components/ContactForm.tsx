import React from 'react';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { FormData, FORM_INITIAL_VALUE } from '../constants';
import { Button, Col, Row } from 'reactstrap';
import { isMobile } from 'react-device-detect';
import PhoneInputCustom from './PhoneInputCustom';

export interface ContactFormProps {}

const ContactForm: React.FC<ContactFormProps> = () => {
  const validateSchema = Yup.object().shape({
    fullName: Yup.string()
      .required('This field is required!')
      .max(255, 'Max 255 characters')
      .test('Test valid name', 'Invalid Name', (val) => {
        if (!val) return true;
        return Boolean(val.match(/^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$/));
      }),
    email: Yup.string()
      .email('Invalid email')
      .required('This field is required!')
      .max(255, 'Max 255 characters')
      .test(
        'Email has special char',
        'Only letters (a-z), numbers (0-9) and commas (.) are allowed.',
        (val) => {
          if (!val) return true;
          return Boolean(val.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/));
        }
      ),
    phoneNumber: Yup.string().max(50, 'Max 50 characters'),
    subject: Yup.string().max(255, 'Max 255 characters'),
  });
  const handleSubmit = (formData: FormData) => {
    //
  };

  return (
    <Formik
      initialValues={FORM_INITIAL_VALUE}
      validationSchema={validateSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form>
          <label htmlFor="fullName">Full Name *</label>
          <Field name="fullName" className="vz-contact--input" />
          <ErrorMessage
            name="fullName"
            className="text-vz-red"
            component="div"
          />
          <div className="mb-4"></div>
          <Row className="mb-4">
            <Col xs="12" md="6">
              <label htmlFor="email">Email *</label>
              <Field name="email" className="vz-contact--input" />
              <ErrorMessage
                name="email"
                className="text-vz-red"
                component="div"
              />
            </Col>
            <Col xs="12" md="6" className={isMobile ? 'mt-4' : ''}>
              <label htmlFor="phoneNumber">Phone Number</label>
              <Field
                name="phoneNumber"
                className="vz-contact--input"
                type="tel"
                component={PhoneInputCustom}
              />
              <ErrorMessage
                name="phoneNumber"
                className="text-vz-red"
                component="div"
              />
            </Col>
          </Row>
          <label htmlFor="fullName">Subject</label>
          <Field name="subject" className="vz-contact--input" />
          <ErrorMessage
            name="subject"
            className="text-vz-red"
            component="div"
          />
          <div className="mb-4"></div>

          <label htmlFor="message">Message</label>
          <Field
            name="message"
            className="vz-contact--textarea"
            as="textarea"
          />
          <div className="mb-4"></div>

          <div className="d-flex justify-content-center">
            <Button
              type="submit"
              color="vz-red"
              className="vz-btn--rounded text-white text-uppercase"
            >
              Send Message
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
