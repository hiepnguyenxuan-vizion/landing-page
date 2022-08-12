import React from 'react';

import { useTranslation } from 'react-i18next';

import VzBtn from 'components/VzBtn';

export interface BookADemoBtnProps {
  toggleContactModal?: () => void
}

const BookADemoBtn: React.FC<BookADemoBtnProps> = ({ toggleContactModal }) => {
  const goToContact = () => {
    if (toggleContactModal) toggleContactModal()
  };
  const { t } = useTranslation();

  return (
    <VzBtn
      onClick={goToContact}
      color="vz-red"
      title={t('book_for_demo')}
      className="text-white font-weight-bold text-uppercase col-5 col-lg-6"

    />
  );
};

export default BookADemoBtn;
