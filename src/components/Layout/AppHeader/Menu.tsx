import React from 'react';

import { MENU } from '../constants';

import BookADemoBtn from './BookADemoBtn';
import DropdownItem from './DropdownItem';
import SingleItem from './SingleItem';

export interface MenuProps {}

const Menu: React.FC<MenuProps> = () => {
  return (
    <>
      {MENU.map((menu) => {
        return menu?.children ? (
          <DropdownItem {...menu} />
        ) : (
          <SingleItem {...menu} />
        );
      })}
      <BookADemoBtn />
    </>
  );
};

export default Menu;
