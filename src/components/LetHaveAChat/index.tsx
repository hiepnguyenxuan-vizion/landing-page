import React, { useState } from 'react';
import { ArrowRight } from 'react-feather';
import { useTranslation } from 'react-i18next';

import ContactUsModal from 'components/ContactUsModal';

export interface LetHaveAChatProps { }

const LetHaveAChat: React.FC<LetHaveAChatProps> = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleContactModal = () => setIsOpen(!isOpen)
  const { t } = useTranslation();

  return (
    <>
      <section id="letHaveAChat" className="vz-home--chat">
        <div className='col-12 col-lg-6 justify-content-end'>
          <div className='col-9 vz-home--chat__content'>
            <h2>
              {t('intrigued')}
              <br /> {t('let_have_a_chat')}
            </h2>
            <div className="d-flex vz-home--chat-link" onClick={toggleContactModal}>
              <div>{t('reach_out')}</div>
              <ArrowRight />
            </div>
          </div>
        </div>
      </section>
      <ContactUsModal isOpen={isOpen} toggle={toggleContactModal} />
    </>
  );
};

export default LetHaveAChat;
