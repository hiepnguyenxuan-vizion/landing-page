import React from 'react';
import { Col, Row } from 'reactstrap';
import { PLAN_PRICING_LIST } from '../constant';
import PlanCard from './PlanCard';

export interface PlanDesktopProps {}

const PlanDesktop: React.FC<PlanDesktopProps> = () => {
  return (
    <Row className="mt-5 flex-grow-1">
      {PLAN_PRICING_LIST.map((item) => (
        <Col key={item.name} md="3" className="d-flex align-items-stretch">
          <PlanCard {...item} />
        </Col>
      ))}
    </Row>
  );
};

export default PlanDesktop;
