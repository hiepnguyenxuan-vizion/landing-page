import { useContext } from 'react';

import { LayoutContext } from 'components/Layout/context';

export const useLayout = () => useContext(LayoutContext);
