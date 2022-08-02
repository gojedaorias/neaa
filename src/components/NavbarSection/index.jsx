import Logo from '../../assets/img/logo-neaa.svg';
import { CTAButton, MenuContainer, NavbarContainer } from './style';

export const NavbarSection = () => {
  return (
    <>
      <NavbarContainer>
        <MenuContainer>
          <a href='/'>
            <img src={Logo} alt='Logo' />
          </a>
          <ul>
            <li>
              <a href='/'>Inicio</a>
            </li>
            <li>
              <a href='#nosotros'>Nosotros</a>
            </li>
            <li>
              <a href='#services'>Servicios</a>
            </li>
          </ul>
        </MenuContainer>
        <CTAButton href='#contact'>Comienza hoy</CTAButton>
      </NavbarContainer>
    </>
  );
};

