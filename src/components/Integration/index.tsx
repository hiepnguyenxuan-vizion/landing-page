import React from 'react';

import classNames from 'classnames';
import { Container, Row, Col } from 'reactstrap';
import { isBrowser } from 'react-device-detect';
import { useTranslation } from 'react-i18next';

import Title from 'components/Title';
import { INTEGRATION } from 'pages/home/constant';

export interface IntegrationProps { }

const Integration: React.FC<IntegrationProps> = () => {
  const { t } = useTranslation();

  return (
    <section
      id="client"
      className={classNames('vz-home--client center-items', {
        'vz-home--client-desktop': isBrowser,
      })}
    >
      <Container className="d-flex justify-content-center">
        <div className="d-flex col-12 col-lg-9 flex-column align-items-center">
          <Title title={t('integrations')} className="vz-home--client__title" />
          <div className="vz-separate--dash w-100"></div>
          <Row className="my-4 align-items-center justify-content-between">
            {INTEGRATION.map(({ name, imgUrl }) => (
              <Col xs={11} md={5} lg={4} className="vz-home--client__logo" key={name}>
                <img src={imgUrl} alt={name} style={{ maxWidth: '100%' }} />
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Integration;
