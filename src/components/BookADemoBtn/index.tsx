import React from 'react';

import { useNavigate } from 'react-router-dom';

import VzBtn from 'components/VzBtn';

export interface BookADemoBtnProps {}

const BookADemoBtn: React.FC<BookADemoBtnProps> = () => {
  const navgigate = useNavigate();

  const goToContact = () => navgigate('/contact-us');
  return (
    <VzBtn
      color="vz-red"
      title="Book for demo"
      onClick={goToContact}
      className="text-uppercase text-white"
    />
  );
};

export default BookADemoBtn;
