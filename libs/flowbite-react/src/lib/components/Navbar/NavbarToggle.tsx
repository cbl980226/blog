import type { ComponentProps, FC, PropsWithChildren } from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../Theme';
import { useNavbarContext } from './NavbarContext';

// eslint-disable-next-line
export interface NavbarToggleProps extends Omit<PropsWithChildren<ComponentProps<'button'>>, 'className'> {}

export const NavbarToggle: FC<NavbarToggleProps> = (props) => {
  // TODO: toggle menu
  const { isOpen, setIsOpen } = useNavbarContext();
  const theme = useTheme().theme.navbar.toggle;
  const navbarToggleTheme = classNames(theme.base);

  return (
    <button type="button" aria-controls="navbar-menu" aria-expanded={isOpen} className={navbarToggleTheme} onClick={() => setIsOpen((prev) => !prev)}>
      {/* <span className="sr-only">Open main menu</span>
      <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
          clipRule="evenodd"
        ></path>
      </svg>
      <svg className="hidden w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clipRule="evenodd"
        ></path>
      </svg> */}

      <FontAwesomeIcon icon={faBars} className="" />
    </button>
  );
};

NavbarToggle.displayName = 'Navbar.Toggle';
