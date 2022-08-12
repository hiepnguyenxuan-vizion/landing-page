import React from 'react';
import { Col, Row } from 'reactstrap';
import RECard, { RECardProps } from './RECard';

export interface ReContentProps extends RECardProps {
  reverse?: boolean;
}

const ReContent: React.FC<ReContentProps> = ({
  no,
  text,
  reverse,
  children,
}) => {
  return (
    <Row className={`my-5 ${reverse && 'vz-reverse-card'}`}>
      <Col xs="12" md="5">
        <RECard no={no} text={text} />
      </Col>
      <Col xs="12" md="7">
        {children}
      </Col>
    </Row>
  );
};

export default ReContent;
