import React from 'react';

import { Row, Col, Card, Container } from 'reactstrap';
import { useTranslation } from 'react-i18next';

import Title from 'components/Title';
import { COLORS } from 'consts';

import { CUSTOM_SOLUTIONS } from '../../pages/home/constant';

export interface CustomSolutionProps {}

const CustomSolution: React.FC<CustomSolutionProps> = () => {
  const { t } = useTranslation();

  return (
    <section id="customSolution" className="vz-home--custom-solution">
      <Container className="vz-home--custom-solution__head text-white flex-column position-relative">
        <Title
          title={t('custom_solutions')}
          iconColor={ COLORS.VZ_RED }
          className="vz-home--custom-solution__title mb-5"
        />
        <div className="position-relative vz-home--custom-solution__card">
          <div className="position-absolute top-0 left-0 w-100">
            <Row className="vz-home--custom-solution__card__row">
              {CUSTOM_SOLUTIONS.map(({ content, imgUrl, iconSrc, key }) => (
                <Col
                  xs={12}
                  lg={3}
                  className="vz-home--custom-solution__card__col h-100"
                  key={key}
                >
                  <Card
                    className="vz-card--custom-solution text-black border-0"
                    style={{
                      backgroundImage: `url(${imgUrl})`,
                    }}
                  >
                    <div className="d-flex flex-column position-relative">
                      <div className="vz-card--custom-solution__icon">
                        <img src={iconSrc} alt=""></img>
                      </div>
                      <div className="vz-card--custom-solution__line"></div>
                      <div className="vz-card--custom-solution__text">
                        <p className="text-white">{t(`${content}`)}</p>
                      </div>
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CustomSolution;
