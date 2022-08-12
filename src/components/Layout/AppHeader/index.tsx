import React, { useMemo, useState } from 'react';

// import { isMobile } from 'react-device-detect';
// import { Menu as Hambuger } from 'react-feather';
import { useNavigate } from 'react-router-dom';
import { Container, Nav, Navbar, NavbarBrand } from 'reactstrap';

// import { useIsHomepage, useLayout } from 'hooks';

import { COLORS } from 'consts';

import VzLogo from 'components/VzLogo';
import ContactUsModal from 'components/ContactUsModal';

// import Menu from './Menu';
import BookADemoBtn from './BookADemoBtn';
import { isBrowser, isMobile } from 'react-device-detect';
import LanguageIcon from 'components/icons/LanguageIcon';
import { LANGUAGE_OPTIONS } from './const';

export interface AppHeaderProps { }

const AppHeader: React.FC<AppHeaderProps> = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isShowLanguage, setIsShowLanguage] = useState(false)

  const toggleContactModal = () => setIsOpen(!isOpen)

  const openChangeLanguage = () => setIsShowLanguage(!isShowLanguage)
  const changeLanguage = (lng: string) => {
    localStorage.setItem('i18nextLng',lng)
    setIsShowLanguage(false)
    window.location.reload()
  }
  // hooks
  // const { onToggleSidebar } = useLayout();
  // const isHomepage = useIsHomepage();

  // navigate
  const nav = useNavigate();
  const goToHome = () => nav('/');

  // logo colors
  // const { textColor, logoColor } = useMemo(
  //   () =>
  //     isHomepage
  //       ? { textColor: COLORS.VZ_BLACK, logoColor: COLORS.VZ_RED }
  //       : {
  //           textColor: COLORS.VZ_WHITE,
  //           logoColor: COLORS.VZ_WHITE,
  //         },
  //   [isHomepage]
  // );

  return (
    <>
      <header className={`vz-header w-100`} id='header'>
        <Container className="px-0">
          <Navbar>
            <NavbarBrand onClick={goToHome} className='col-4 col-lg-7 mx-0'>
              <div className="vz-nav--brand">
                <VzLogo textColor={COLORS.VZ_WHITE} logoColor={COLORS.VZ_RED} />
              </div>
            </NavbarBrand>
            <Nav
              className={`align-items-center vz-header__home d-flex col-5 justify-content-center`}
            >
              {isBrowser && <BookADemoBtn toggleContactModal={toggleContactModal} />}
              <div className='vz-header__icon-lang'>
                <LanguageIcon openChangeLanguage={openChangeLanguage}/>
                {isShowLanguage && (
                  <ul className="languages">
                    {LANGUAGE_OPTIONS.map(({ title, code, img }) => (
                      <li onClick={() => changeLanguage(code)}>
                        <div className="language" >
                          <div><img src={img} alt=""></img></div>
                          <span>{title}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </Nav>
          </Navbar>
        </Container>
      </header>
      <ContactUsModal isOpen={isOpen} toggle={toggleContactModal} />
    </>
  );
};

export default AppHeader;
