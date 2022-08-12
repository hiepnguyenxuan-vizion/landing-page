import React, { useState } from 'react';

import { Container, Row, Col } from 'reactstrap';
import { isBrowser, isMobile } from 'react-device-detect';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

import BookADemoBtn from 'components/Layout/AppHeader/BookADemoBtn';
import ContactUsModal from 'components/ContactUsModal';

export interface BannerProps { }

const Banner: React.FC<BannerProps> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleContactModal = () => setIsOpen(!isOpen);
  const { t } = useTranslation();

  return (
    <>
      <section id="banner" className="h-screen bg-secondary vz-home--banner">
        <Container>
          <Row className="h-screen">
            <Col
              xs="12"
              md="9"
              lg="7"
              className={classNames(
                'vz-home--banner__contents h-screen align-items-center d-flex',
                { 'justify-content-end': isBrowser }
              )}
            >
              <div className=" vz-home--banner__content position-relative col-12 col-lg-10 align-items-center">
                <div
                  className={classNames('vz-home--intro text-white', {
                    'vz-home--intro-desktop position-relative ': isBrowser,
                  })}
                >
                  <h1>{t('showcase_your_project_with_a_cloud_based_Tour_3D')}</h1>
                  <ul className="ul-red-check position-relative ">
                    <li>
                      {t('from_aerial_overviews_to_closeups_of_the_finest_details')}
                    </li>
                    <li>
                      {t('sitemaps_floorplans_and_architectural_visualizations')}
                    </li>
                    <li>
                      {t('turnkey_solutions_for_AEC_real_estate_travel_hospitality')}
                    </li>
                  </ul>
                </div>
              </div>
              {isMobile && (
                <div className="col-12 vz-home--banner__btn ">
                  <BookADemoBtn toggleContactModal={toggleContactModal} />
                </div>
              )}
            </Col>
          </Row>
        </Container>
      </section>
      <ContactUsModal isOpen={isOpen} toggle={toggleContactModal} />
    </>
  );
};

export default Banner;
