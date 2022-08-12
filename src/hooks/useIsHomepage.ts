import { useMemo } from 'react';

import { useLocation } from 'react-router-dom';

const HOMEPAGE_PATH = '/';

export const useIsHomepage = () => {
  const { pathname } = useLocation();

  return useMemo(() => pathname === HOMEPAGE_PATH, [pathname]);
};
