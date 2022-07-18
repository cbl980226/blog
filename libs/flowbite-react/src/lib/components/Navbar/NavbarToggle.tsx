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
  const navbarIconTheme = classNames(theme.icon);

  return (
    <button type="button" aria-controls="navbar-menu" aria-expanded={isOpen} className={navbarToggleTheme} onClick={() => setIsOpen((prev) => !prev)}>
      <FontAwesomeIcon icon={faBars} className={navbarIconTheme} />
    </button>
  );
};

NavbarToggle.displayName = 'Navbar.Toggle';
