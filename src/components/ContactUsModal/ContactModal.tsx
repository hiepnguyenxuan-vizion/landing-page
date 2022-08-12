import React, { useState } from 'react';

import { useTranslation } from 'react-i18next';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { ModalBody, ModalFooter } from 'reactstrap';

import { NAME_REGEX, PHONE_REGEX } from 'consts/regex';
import { CONTACT_FORM_INITIAL_VALUE } from 'pages/contact-us/constants';
import { createContactRequest } from 'services/createContactRequest';

import ContactUsForm from './ContactForm';

export interface ContactModalProps {
  showSuccessModal: () => void
}

const ContactModal: React.FC<ContactModalProps> = ({ showSuccessModal }) => {
  const [isDisable, setIsDisable] = useState(false);
  const { t } = useTranslation();

  const validateSchema = Yup.object().shape({
    firstName: Yup.string()
      .required(t('this_field_is_required'))
      .matches(NAME_REGEX, t('invalid_name'))
      .max(64, t('max_64_characters')),
    lastName: Yup.string()
      .required(t('this_field_is_required'))
      .matches(NAME_REGEX, t('invalid_name'))
      .max(64, t('max_64_characters')),
    email: Yup.string()
      .email(t('invalid_email'))
      .required(t('this_field_is_required'))
      .max(255, t('max_255_characters')),
    reason: Yup.string().required(t('this_field_is_required')),
    phoneNumber: Yup.string().matches(PHONE_REGEX, t('phone_number_is_not_valid')),
  });

  const handleSubmitContact = async (value: Object) => {
    setIsDisable(true);
    const res = await createContactRequest(value);
    if (res.data.isSuccess) {
      showSuccessModal();
      setIsDisable(false);
    } else {
      console.log(res.data.message);
      setIsDisable(false);
    }
  };
  return (
    <React.Fragment>
      <Formik
        initialValues={CONTACT_FORM_INITIAL_VALUE}
        validationSchema={validateSchema}
        onSubmit={(values) => {
          handleSubmitContact(values);
        }}
      >
        {(props) => (
          <form onSubmit={props.handleSubmit}>
            <ModalBody>
              <ContactUsForm />
            </ModalBody>
            <ModalFooter className="d-lex justify-content-center">
              <button
                type="submit"
                disabled={isDisable}
                className="contact_submit font-weight-bold border-0 rounded-pill text-white"
              >
                {isDisable ? `${t('processing')}` : `${t('submit')}`}
              </button>
            </ModalFooter>
          </form>
        )}
      </Formik>
    </React.Fragment>

  );
};

export default ContactModal;
