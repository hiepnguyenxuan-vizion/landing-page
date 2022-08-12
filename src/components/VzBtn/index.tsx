import React from 'react';
import { Button, ButtonProps } from 'reactstrap';

export interface VzBtnProps extends ButtonProps {
  onClick: () => void;
}

const VzBtn: React.FC<VzBtnProps> = ({
  color,
  title,
  className,
  outline = false,
  onClick,
}) => {
  return (
    <Button
      color={color}
      outline={outline}
      onClick={onClick}
      className={`vz-btn ${className}`}
    >
      {title}
    </Button>
  );
};

export default VzBtn;
