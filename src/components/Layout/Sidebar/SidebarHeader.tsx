import React from 'react';

import classNames from 'classnames';

export interface SidebarHeaderProps {
  close: boolean;
}

const SidebarHeader: React.FC<SidebarHeaderProps> = ({ close }) => {
  return <div className={classNames('vz-sidebar--header')}>Sidebar Header</div>;
};

export default SidebarHeader;
