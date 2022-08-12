import VzLogo from 'components/VzLogo';
import { COLORS } from 'consts';
import { useLayout } from 'hooks';
import React from 'react';
import { Nav, Offcanvas, OffcanvasBody } from 'reactstrap';
import Menu from '../AppHeader/Menu';
// import { CONTACTS } from '../Footer/constants';

export interface AppSidebarProps {}

const AppSidebar: React.FC<AppSidebarProps> = () => {
  const { isSidebarOpen, onToggleSidebar } = useLayout();

  return (
    <Offcanvas isOpen={isSidebarOpen} toggle={onToggleSidebar} className="w-75">
      <div className="vz-sidebar--header">
        <div className="vz-sidebar--header-logo">
          <VzLogo textColor={COLORS.VZ_BLACK} />
        </div>
        {/* <div className="vz-sidebar--header-close">
          <Button className="p-2 bg-vz-light-gray">
            <X className="text-vz-red" />
          </Button>
        </div> */}
      </div>
      <OffcanvasBody>
        <Nav vertical justified className="text-vz-black">
          <Menu />
        </Nav>
        <div className="d-flex mt-4">
          {/* <div className="">
            {CONTACTS.map(({ to, name, content, icon }) => (
              <div key={name} className="d-flex align-items-center mb-3">
                <img src={icon} alt={name} />
                <p className="mx-4 mb-0">{content}</p>
              </div>
            ))}
          </div> */}
        </div>
      </OffcanvasBody>
    </Offcanvas>
  );
};

export default AppSidebar;
