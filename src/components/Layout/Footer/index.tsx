import React, { useState } from 'react';
import { Col, Container, Row } from 'reactstrap';
import { useTranslation } from 'react-i18next';

import Logo from 'components/Logo';
import ContactUsModal from 'components/ContactUsModal';

import { ADDRESS_CONTACT, EMAIL_CONTACT, PHONE_CONTACT, SOCIALS_LIST } from './constants';

export interface IFooter {}

const Footer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleContactModal = () => setIsOpen(!isOpen)
  const { t } = useTranslation();

  return (
    <>
    <footer className='w-100'>
      <Container className="px-0">
        <div className="vz-footer--container col-12 col-lg-9">
          <Row className='vz-footer--contents'>
            <Col xs="12" lg="3" className="vz-footer--logo">
              <div className="vz-footer--logo_vizionLogo">
                <Logo />
              </div>
              <div className="my-3"></div>
              <div className="d-flex w-100 justify-content-center">
                {SOCIALS_LIST.map(({ icon, to, name }) => (
                  <a
                    key={name}
                    href={to}
                    target="_blank"
                    className="mx-4"
                    rel="noreferrer"
                  >
                    <img src={icon} alt={name} />
                  </a>
                ))}
              </div>
              <div className="my-3"></div>
              <p className="vz-footer--logo_coppy-right text-white text-center">
                &copy; Copyright Vizion 2022
              </p>
            </Col>
            <Col
              xs="12"
              md="6"
              className=" vz-footer--contact text-white d-flex align-items-end pl-4"
            >
              <div className="vz-footer--contact__content">
                <a
                  href={PHONE_CONTACT.to}
                  key={PHONE_CONTACT.name}
                  className="d-flex align-items-center text-white"
                >
                  <img src={PHONE_CONTACT.icon} alt={PHONE_CONTACT.name} />
                  <p className="mx-4 mb-0">{PHONE_CONTACT.content}</p>
                </a>
                <div
                  key={EMAIL_CONTACT.name}
                  className="d-flex align-items-center"
                  onClick={toggleContactModal}
                  style={{cursor: 'pointer'}}
                >
                  <img src={EMAIL_CONTACT.icon} alt={EMAIL_CONTACT.name} />
                  <p className="mx-4 mb-0">{EMAIL_CONTACT.content}</p>
                </div>
                <div
                  key={ADDRESS_CONTACT.name}
                  className="d-flex align-items-start "
                >
                  <img src={ADDRESS_CONTACT.icon} alt={ADDRESS_CONTACT.name} />
                  <p className="mx-4 mb-0">{t(ADDRESS_CONTACT.content)}</p>
                </div>
              </div>
            </Col>
            <Col
              xs="12"
              md="6"
              lg="3"
              className="vz-footer--term text-white d-flex"
            >
              <div className="vz-footer--term__content">
                <div className="nav-link position-relative text-white vz-footer--nav-link mb-2">
                  {t('terms_of_use')}
                </div>
                <div className="nav-link position-relative text-white vz-footer--nav-link mb-3">
                  {t('privacy_policy')}
                </div>
              </div>
            </Col>
            <Col xs="12">
              <p className="vz-footer--coppy-right">
                &copy; Copyright Vizion 2022
              </p>
            </Col>
          </Row>
        </div>
      </Container>
    </footer>
    {isOpen && <ContactUsModal isOpen={isOpen} toggle={toggleContactModal}/>}
   </>
  );
};

export default Footer;
