import React from 'react';

import { Check } from 'react-feather';
import { Button, Col, Container, Row } from 'reactstrap';

import CardBorder from 'components/CardBorder';
import Hero from 'components/Hero';
import Title from 'components/Title';

import { PARTNER_LEVEL } from 'pages/contact-us/constants';
import { isMobile } from 'react-device-detect';

export interface IBecomeAPartner {}

const BecomeAPartner: React.FC = () => {
  return (
    <>
      <Hero>
        <Row className="vz-partner--hero">
          <Col xs="12" md="6">
            <h2 className="vz-partner--hero-title">
              VIZION <br /> PARTNERSHIP <br /> PROGRAM
            </h2>
          </Col>
          <Col xs="12" md="6">
            <CardBorder className={`p-4 vz-partner--hero-desc`}>
              <p className="vz-partner--hero-content">
                Become Vizion Partner just with a click and receive lots of
                interest and commission.
              </p>
              <Button
                color="vz-red"
                className="vz-btn--rounded text-white text-uppercase"
              >
                Contact us
              </Button>
            </CardBorder>
          </Col>
        </Row>
      </Hero>
      <section id="become-a-partner" className="vz-partner mt-5">
        <Container className="py-5">
          <Title title="COMMITMENT & BENEFITS" className="my-2" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            risus, curabitur sit nibh sociis ipsum. Senectus ornare vitae
            quisque aliquam lorem sit sit. Sociis mattis luctus quis at magnis.
            Ullamcorper in iaculis ut ante viverra urna. Sed velit, arcu, massa
            consequat metus. Euismod pulvinar morbi sapien leo phasellus amet a.
            Enim sagittis viverra posuere viverra mauris, suspendisse. Non
            elementum porta gravida et purus. Vitae adipiscing suscipit ut eu,
            gravida nec.
          </p>

          <Row>
            {PARTNER_LEVEL.map(({ icon, name, benefit, commitments }) => (
              <Col xs="12" md="4" key={name} className={isMobile ? 'mt-3' : ''}>
                <CardBorder xs="12" md="4" className="bg-secondary p-3">
                  <div className="d-flex align-items-center">
                    <div className="center-items border-circle">
                      <img src={icon} alt={name} />
                    </div>
                    <p className="m-0 vz-partner--card-title text-uppercase px-3">
                      {name}
                    </p>
                  </div>

                  <h3 className="mt-2 vz-partner--headline">Benefits</h3>
                  {benefit.map((val, index) => (
                    <div className="d-flex align-items-start py-2" key={index}>
                      <Check width={50} color="#6433E4" />
                      <p className="m-0">{val}</p>
                    </div>
                  ))}
                  <h3 className="mt-2 vz-partner--headline">Commitments</h3>
                  {commitments.map((val, index) => (
                    <div className="d-flex align-items-start py-2" key={index}>
                      <Check width={50} color="#6433E4" />
                      <p className="m-0">{val}</p>
                    </div>
                  ))}
                </CardBorder>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default BecomeAPartner;
