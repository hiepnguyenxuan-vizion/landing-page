import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';

export interface HwchyItemProps {
  name: string;
  iconUrl: string;
  description: string;
}

const HwchyItem: React.FC<HwchyItemProps> = ({
  name,
  iconUrl,
  description,
}) => {
  return (
    <Col xs="12" md="6" className="mt-4 position-relative">
      <Card className="vz-card--hwchy__asymmetrical shadow">
        <CardBody>
          <img src={iconUrl} alt="icon" />
          <h3 className="py-2">{name}</h3>
          <p>{description}</p>
        </CardBody>
      </Card>
    </Col>
  );
};

export default HwchyItem;
