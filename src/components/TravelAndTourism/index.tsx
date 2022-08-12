import React from 'react';

import classNames from 'classnames';
import { Container, Row, Col } from 'reactstrap';
import { isBrowser, isMobile, isMobileOnly } from 'react-device-detect';
import { useTranslation } from 'react-i18next';

import Title from 'components/Title';
import travelImg from 'assets/img/bg-travel-2.png';
import travelMobileImg from 'assets/img/bg-travel-mobile.png'

export interface TravelAndTourismProps { }

const TravelAndTourism: React.FC<TravelAndTourismProps> = () => {
  const { t } = useTranslation();

  return (
    <section
      id="travel"
      className={classNames('vz-home--travel ', {
        'vz-home--travel-desktop': isBrowser,
      })}
    >
      <Container>
        <Row className={classNames({ 'justify-content-end': isBrowser })}>
          <Title title={t('travel_tourism')} className='mb-5 col-12 col-lg-6' />
        </Row>
        <Row className={classNames('justify-content-end', { 'flex-reverse': isMobile })}>
          <Col xs="12" lg="6">
            <div className='vz-home--travel__content col-12 col-lg-11 '>
              <div className="vz-card--travel d-flex center-items ">
                <Row>
                  <Col xs='12' md="5" className="center-items">
                    <img src={isMobileOnly ? travelMobileImg : travelImg} alt=''></img>
                  </Col>
                  <Col xs="12" md="7" className="vz-card--travel__left d-flex align-items-center">
                    <ul className='ul-red-check'>
                      <li>{t('optimized_to_any_scale_facility_campus_city_or_a_whole_region')}</li>
                      <li>{t('target_specific_opportunities_with_customized_one-off_tours')}</li>
                      <li>{t('add_layers_of_location_information_and_re-use_existing_multimedia')}</li>
                      <li>{t('show_off_marketing_partners_local_amenities_and_more')}</li>
                      <li>{t('make_potential_visitors_feel_like_they_really_been_there')}</li>
                      <li>{t('immersive_tours_make_email_and_social_campaigns_more_compelling')}</li>
                    </ul>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TravelAndTourism;

