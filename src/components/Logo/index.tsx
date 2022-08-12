import React from 'react';
import vizionLogoUrl from 'assets/logo/vizion-logo.svg';

export interface LogoProps {
  imgUrl?: string;
}

const Logo: React.FC<LogoProps> = ({ imgUrl }) => {
  return <img src={imgUrl || vizionLogoUrl} alt="Logo" className="vz-logo" />;
};

export default Logo;
