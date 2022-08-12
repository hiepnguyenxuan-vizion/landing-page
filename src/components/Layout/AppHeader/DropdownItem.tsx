import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  DropdownItem as BSDropdown,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from 'reactstrap';
import { IItem } from '../type';

export interface DropdownItemProps extends IItem {}

const DropdownItem: React.FC<DropdownItemProps> = ({
  name,
  path,
  children,
}) => {
  // hooks

  return (
    <UncontrolledDropdown inNavbar nav>
      <DropdownToggle caret nav>
        {name}
      </DropdownToggle>
      <DropdownMenu>
        {children?.map((child) => (
          <BSDropdown key={child.key}>
            <NavLink to={`${path}${child.path}`} className="nav-link">
              {child.name}
            </NavLink>
          </BSDropdown>
        ))}
      </DropdownMenu>
    </UncontrolledDropdown>
  );
};

export default DropdownItem;
