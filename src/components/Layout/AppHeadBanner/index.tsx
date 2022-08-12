import React from 'react';

import { useIsHomepage } from 'hooks';

import defaultBannerImg from 'assets/img/bg-hero.jpg';

export interface IAppHeadBanner {
  imgUrl?: string;
  height?: number;
}

const AppHeadBanner: React.FC<IAppHeadBanner> = ({
  imgUrl = defaultBannerImg,
  height = 50,
  children,
}) => {
  // hooks
  const isHomepage = useIsHomepage();

  return isHomepage ? null : (
    <header
      id="head-banner"
      className={`vz-head-banner `}
      style={{
        backgroundImage: `url(${imgUrl})`,
        height: `${height}vh`,
      }}
    >
      {children}
    </header>
  );
};

export default AppHeadBanner;
