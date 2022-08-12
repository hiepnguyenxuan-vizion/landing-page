import React from 'react';

import { MobileView } from 'react-device-detect';
import { Navbar, NavbarBrand, Nav, NavItem, Button } from 'reactstrap';
import { Menu as MenuIcon } from 'react-feather';

import { useLayout } from 'hooks';

export interface MobileHeaderProps {}

const MobileHeader: React.FC<MobileHeaderProps> = () => {
  const { onToggleSidebar } = useLayout();

  return (
    <MobileView>
      <Navbar>
        <NavbarBrand>Vizion</NavbarBrand>
        <Nav>
          <NavItem>
            <Button color="" onClick={onToggleSidebar}>
              <MenuIcon />
            </Button>
          </NavItem>
        </Nav>
      </Navbar>
    </MobileView>
  );
};

export default MobileHeader;
