import React from 'react';

import { HwchyProps } from '../constant';

export interface WhyUsCardProps extends HwchyProps {}

const WhyUsCard: React.FC<WhyUsCardProps> = ({
  name,
  description,
  iconUrl,
}) => {
  return (
    <div className="vz-card--why-us ">
      <div className="d-flex align-items-center mb-3">
        <img src={iconUrl} alt="icon" />
        <h3 className="text-uppercase m-0">{name}</h3>
      </div>
      <p>{description}</p>
    </div>
  );
};

export default WhyUsCard;
