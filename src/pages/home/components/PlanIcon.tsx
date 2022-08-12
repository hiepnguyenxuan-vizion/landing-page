import React from 'react';

export interface PlanIconProps {
  iconUrl: string;
}

const PlanIcon: React.FC<PlanIconProps> = ({ iconUrl }) => {
  return (
    <div className="vz-plan-icon border-circle">
      <img src={iconUrl} alt="icon" className="w-100" />
    </div>
  );
};

export default PlanIcon;
