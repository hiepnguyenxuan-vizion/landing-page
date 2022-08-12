import React from 'react';

import { Check, ChevronsDown, X } from 'react-feather';
import { Card, CardBody, CardFooter } from 'reactstrap';

import PlanIcon from './PlanIcon';
import { PlanProps } from '../constant';

import bestPriceSrc from 'assets/img/best-value.png';
import VzBtn from 'components/VzBtn';
import { useNavigate } from 'react-router-dom';

export interface PlanCardProps extends PlanProps {}

const PlanCard: React.FC<PlanCardProps> = ({
  name,
  iconUrl,
  timeLimit,
  timeUnit,
  currencyUnit,
  feature,
  resourceLimit,
  isHighlight,
}) => {
  const navigate = useNavigate();

  const goToBookADemo = () => navigate('/contact-us');

  return (
    <Card className="vz-card--plan shadow cursor-default">
      <PlanIcon iconUrl={iconUrl} />
      <CardBody>
        {isHighlight && (
          <div className="vz-card--plan-highlight-wrapper center-items font-weight-bold text-white">
            <img src={bestPriceSrc} alt="best value img" className="w-100" />
          </div>
        )}
        <div className="head text-center">
          <h4 className="text-uppercase text-center">{name}</h4>
          <div className="d-flex center-items text-center font-weight-semibold vz-card--plan-time-limit">
            {timeLimit}
            {currencyUnit} {timeUnit && <sub>/{timeUnit}</sub>}{' '}
          </div>
          <ChevronsDown color="#f73e3e" size={32} />
          <h4 className="text-vz-red">{resourceLimit}</h4>
        </div>
        <div className="body mt-3">
          {feature.map(({ name: featName, hasFeat }) => (
            <div key={featName} className="d-flex">
              {hasFeat ? <Check color="#3C99FA" /> : <X color="#F73E3E" />}
              <p className={`px-2 ${!hasFeat && 'text-vz-disabled'}`}>
                {featName}
              </p>
            </div>
          ))}
        </div>
      </CardBody>
      <CardFooter className="vz-card--plan-footer">
        <VzBtn
          title="Book for Demo"
          onClick={goToBookADemo}
          color="vz-red"
          className="text-white w-100 vz-card--plan-btn"
        />
      </CardFooter>
    </Card>
  );
};

export default PlanCard;
