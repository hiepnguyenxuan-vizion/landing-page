import React, { useState } from 'react';

import { Modal, ModalHeader } from 'reactstrap';
import { useTranslation } from 'react-i18next';

import ContactModal from './ContactModal';
import SuccessModal from './SuccessModal';

export interface ContactUs {
  isOpen: boolean;
  toggle: () => void;
}

const ContactUsModal: React.FC<ContactUs> = ({ isOpen, toggle }) => {
  const [isShowSuccessModal, setIsShowSuccessModal] = useState(false)

  const handleToggle = () => {
    toggle();
    setIsShowSuccessModal(false);
  }
  const showSuccessModal = () => setIsShowSuccessModal(true)

  const { t } = useTranslation();

  return (
    <>
      <Modal xs="12" md="4" isOpen={isOpen}>
        <ModalHeader toggle={handleToggle}> {isShowSuccessModal ? '' : t('contact_us')} </ModalHeader>
        {isShowSuccessModal ? <SuccessModal /> : <ContactModal showSuccessModal={showSuccessModal} />}
      </Modal>
    </>
  );
};

export default ContactUsModal;
