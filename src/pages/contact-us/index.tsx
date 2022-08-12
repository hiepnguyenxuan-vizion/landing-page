import React from 'react';

import Hero from 'components/Hero';

import bgHeroContactUs from 'assets/img/bg-hero-contact-us.jpg';
import { Container } from 'reactstrap';
import ContactForm from './components/ContactForm';

export interface IContactUs {}

const ContactUs: React.FC = () => {
  return (
    <>
      <Hero imgUrl={bgHeroContactUs} className="p-0">
        <h2 className="vz-contact--title text-uppercase">Book a Demo</h2>
        <p className="vz-contact--subtitle">
          Leave us a message and we will contact you soon.
        </p>

        <div className="vz-contact--form-header"></div>
      </Hero>
      <div className="vz-contact--content">
        <Container>
          <div className="vz-contact--form-body">
            <ContactForm />
          </div>
        </Container>
      </div>
    </>
  );
};

export default ContactUs;
