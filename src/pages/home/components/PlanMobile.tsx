import React from 'react';
import { PLAN_PRICING_LIST } from '../constant';
import PlanCard from './PlanCard';

export interface PlanMobileProps {}

const PlanMobile: React.FC<PlanMobileProps> = () => {
  return (
    <div className="vz-home--scroll-plan">
      {PLAN_PRICING_LIST.map(({ name, ...restItem }) => (
        <div key={name} className="vz-home--scroll-item text-black">
          <PlanCard name={name} {...restItem} />
        </div>
      ))}
    </div>
  );
};

export default PlanMobile;
