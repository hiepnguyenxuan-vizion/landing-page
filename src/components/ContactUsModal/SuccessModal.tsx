import React from 'react';

import { useTranslation } from 'react-i18next';

import { ModalBody } from 'reactstrap';

export interface SuccessModalProps {};

const SuccessModal: React.FC<SuccessModalProps> = () => {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <ModalBody>
        <p>{t('thanks_for_reaching_out_we_will_contact_you_shortly')}</p>
      </ModalBody>
    </React.Fragment>
  );
};

export default SuccessModal;
