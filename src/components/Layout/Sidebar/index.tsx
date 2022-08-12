import React from 'react';

import classNames from 'classnames';

import { useLayout } from 'hooks';

import SidebarHeader from './SidebarHeader';

const Sidebar: React.FC = () => {
  const { isSidebarOpen } = useLayout();

  return (
    <div
      className={classNames('vz-sidebar', {
        'vz-sidebar--open': isSidebarOpen,
      })}
    >
      <SidebarHeader close />
      <div className="vz-sidebar--body">Sidebar Body</div>
    </div>
  );
};

export default Sidebar;
