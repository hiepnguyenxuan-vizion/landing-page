import React from 'react';
import { Container } from 'reactstrap';

import defaultHeroSrc from 'assets/img/bg-hero.jpg';

export interface HeroProps {
  imgUrl?: string;
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ imgUrl, children, className }) => {
  return (
    <div
      className={`vz-hero d-flex align-items-end text-white ${className}`}
      style={{ backgroundImage: `url(${imgUrl || defaultHeroSrc})` }}
    >
      <Container className="w-100 position-relative">{children}</Container>
    </div>
  );
};

export default Hero;
