import React from 'react';

import classNames from 'classnames';
import { Container, Row, Col, CardBody, Card } from 'reactstrap';
import { isBrowser, isMobileOnly } from 'react-device-detect';
import { useTranslation } from 'react-i18next';

import Title from 'components/Title';
import ACEImage from 'assets/img/bg-ace-1.png';
import ACEMobileImage from 'assets/img/bg-ace-mobile.png'

export interface ACEAndRealEstateProps { }

const ACEAndRealEstate: React.FC<ACEAndRealEstateProps> = () => {
  const { t } = useTranslation();

  return (
    <section
      id="ACEAndRealEstate"
      className={classNames('vz-home--ace', {
        'vz-home--ace-desktop': isBrowser,
      })}
    >
      <Container>
        <Row>
          <Col xs="12" lg="7">
            <Title
              title={t('AEC_Real_Estate')}
              className="vz-home--ace__title mb-4"
            />
          </Col>
        </Row>
        <Row className="mt-4">
          <Col xs="12" lg="7">
            <Row className="vz-home--ace__contents ">
              <Col
                xs="11"
                md="12"
                lg="10"
                className="vz-home--ace__content position-relative "
              >
                <div className="row d-flex w-100 justify-content-center align-items-center vz-home--ace__content__container">
                  <div className="col-12 col-md-5 center-items">
                    <img src={isMobileOnly ? ACEMobileImage : ACEImage} alt=""></img>
                  </div>
                  <Card className="vz-card--ace col-12 col-md-7">
                    <CardBody>
                      <ul className="ul-red-check">
                        <li>
                          {t('the_only_platform_optimized_for_brick_and_mortar_experiences')}
                        </li>
                        <li>
                          {t('re-use_existing_assets_from_design_engineering')}
                        </li>
                        <li>
                          {t('combine_rendered_walkthroughs_with_reality_capture_tours')}
                        </li>
                        <li>
                          {t('easily_update_sites_and_tours_with_as-built_progress')}
                        </li>
                        <li>{t('quickly_promote_tours_with_social_media')}</li>
                      </ul>
                    </CardBody>
                  </Card>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ACEAndRealEstate;
