import React from 'react';
import { Card, CardBody } from 'reactstrap';

export interface CardBorderProps {
  className?: string;
  xs?: string;
  md?: string;
}

const CardBorder: React.FC<CardBorderProps> = ({
  children,
  className,
  ...restProps
}) => {
  return (
    <Card {...restProps} className={`vz-card--border ${className}`}>
      <CardBody>{children}</CardBody>
    </Card>
  );
};

export default CardBorder;
