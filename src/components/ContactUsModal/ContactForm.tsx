import React from 'react';

import { Card, Col, FormGroup, Label, Row } from 'reactstrap';
import { Field, ErrorMessage } from 'formik';
import { useTranslation } from 'react-i18next';

import { CONTACT_US_SELECT } from 'pages/home/constant';

export interface ContactForm {
}

const ContactUsForm: React.FC<ContactForm> = () => {
  const { t } = useTranslation();

  return (
    <Card
      className="border-0"
    >
      <Row className='contact_form'>
        <Col sm={6} >
          <Label
            for="firstName"
            sm={12}
            className="contact_label"
          >
           {t('first_name')}
          </Label>
          <Field
            id="firstName"
            name="firstName"
            className="contact_input"
          />
          <ErrorMessage
            name="firstName"
            className="text-vz-red"
            component="div"
          />
        </Col>
        <Col sm={6}>
          <Label
            for="lastName"
            sm={12}
            className="contact_label"
          >
            {t('last_name')}
          </Label>
          <Field
            id="lastName"
            name="lastName"
            className="contact_input"
          />
          <ErrorMessage
            name="lastName"
            className="text-vz-red"
            component="div"
          />
        </Col>
      </Row>
      <FormGroup className='contact_form'>
        <Label
          for="email"
          sm={4}
          className="contact_label"
        >
          {t('email_address')}
        </Label>
        <Col sm={12}>
          <Field
            id="email"
            name="email"
            className="contact_input"
          />
          <ErrorMessage
            name="email"
            className="text-vz-red"
            component="div"
          />
        </Col>
      </FormGroup>
      <FormGroup className='contact_form'>
        <Label
          for="phoneNumber"
          sm={4}
          className="contact_label"
        >
          {t('phone')}
        </Label>
        <Col sm={12}>
          <Field
            id="phoneNumber"
            name="phoneNumber"
            className="contact_input"
          />
          <ErrorMessage
            name="phoneNumber"
            className="text-vz-red"
            component="div"
          />
        </Col>
      </FormGroup>
      <FormGroup className='contact_form'>
        <Label
          for="companyName"
          sm={4}
          className="contact_label"
        >
          {t('company_name')}
        </Label>
        <Col sm={12}>
          <Field
            id="companyName"
            name="companyName"
            className="contact_input"
          />
          <ErrorMessage
            name="companyName"
            className="text-vz-red"
            component="div"
          />
        </Col>
      </FormGroup>
      <FormGroup>
        <Label
          for="message"
          sm={12}
          className="contact_label"
        >
          {t('how_we_can_assist_you')}
        </Label>
        <Col sm={12}>
          <Field as="select" id="message" name="reason" className='contact_select'>
            {<option value="" disabled hidden >{t('select_an_option')}</option>}
            {CONTACT_US_SELECT.map(({ value, name }) => <option key={name} value={value}>{t(value)}</option>)}
          </Field>
        </Col>
        <ErrorMessage
          name="reason"
          className="text-vz-red"
          component="div"
        />
      </FormGroup>
    </Card>
  );
};

export default ContactUsForm;
