import React from 'react';

import { Row, Col, Container } from 'reactstrap';
import { useTranslation } from 'react-i18next';

import { COLORS } from 'consts';
import Title from 'components/Title';
import { FEATURES } from 'pages/home/constant';

export interface FeaturesProps { }

const Features: React.FC<FeaturesProps> = () => {
  const { t } = useTranslation();

  return (
    <section id="features" className="vz-home--features">
      <Title title={t('features')} className='justify-content-center vz-home--features__title' iconColor={COLORS.VZ_RED} />
      <Container>
        <div className="vz-home--features__contents col-12 col-lg-9">
          <div className="w-100">
            <Row
            >{
                FEATURES.map(({ content, icon }) => (
                  <Col xs="12" md="6" lg="4" className='pb-4' key={content}>
                    <div className='vz-home--features__content'>
                      <div className='vz-home--features__content_icon'><img src={icon} alt=""></img></div>
                      <p className='vz-home--features__content_text'>{t(`${content}`)}</p>
                    </div>
                  </Col>
                ))
              }
            </Row>
          </div>
        </div>
      </Container>

    </section>
  );
};

export default Features;

