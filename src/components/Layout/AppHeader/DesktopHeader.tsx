import React from 'react';

import { BrowserView } from 'react-device-detect';
import { Nav, Navbar, NavbarBrand } from 'reactstrap';

import Menu from './Menu';

export interface DesktopHeaderProps {}

const DesktopHeader: React.FC<DesktopHeaderProps> = () => {
  return (
    <BrowserView>
      <Navbar>
        <NavbarBrand>Brand</NavbarBrand>
        <Nav className="align-items-center">
          <Menu />
        </Nav>
      </Navbar>
    </BrowserView>
  );
};

export default DesktopHeader;
