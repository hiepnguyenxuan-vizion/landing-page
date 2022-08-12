import React from 'react';

import { NavLink } from 'react-router-dom';
import { NavItem } from 'reactstrap';

import { IItem } from '../type';

export interface SingleItemProps extends IItem {}

const SingleItem: React.FC<SingleItemProps> = ({ name, path }) => {
  return (
    <NavItem className="nav-item__before">
      <NavLink to={path} className="nav-link">
        {name}
      </NavLink>
    </NavItem>
  );
};

export default SingleItem;
