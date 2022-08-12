import CardBorder from 'components/CardBorder';
import React from 'react';

export interface RECardProps {
  no: string;
  text: string;
}

const RECard: React.FC<RECardProps> = ({ no, text }) => {
  return (
    <CardBorder className="vz-re--content-card shadow">
      <h4 className="vz-re--content-card-no">{no}</h4>
      <p className="m-0 vz-re--content-card-text">{text}</p>
    </CardBorder>
  );
};

export default RECard;
