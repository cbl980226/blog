import type { ComponentProps, FC, PropsWithChildren } from 'react';
import classNames from 'classnames';
import { useState } from 'react';
import { useTheme } from '../Theme';
import { NavbarContext } from './NavbarContext';

export interface NavbarProps extends Omit<PropsWithChildren<ComponentProps<'nav'>>, 'className'> {
  fluid?: boolean;
  border?: false;
  rounded?: boolean;
  menuOpen?: boolean;
}

export const Navbar: FC<NavbarProps> = ({ fluid, border, rounded, menuOpen, children, ...props }) => {
  const theme = useTheme().theme.navbar;
  const navbarTheme = classNames(theme.base, theme.bordered[border ? 'on' : 'off'], theme.rounded[rounded ? 'on' : 'off']);
  const navbarLayoutTheme = classNames(theme.layout.base, theme.layout.fluid[fluid ? 'on' : 'off']);

  const [isOpen, setIsOpen] = useState(menuOpen ?? false);

  return (
    <NavbarContext.Provider value={{ isOpen, setIsOpen }}>
      <nav className={navbarTheme} {...props}>
        <div className={navbarLayoutTheme}>{children}</div>
      </nav>
    </NavbarContext.Provider>
  );
};

Navbar.displayName = 'Navbar';
Navbar.defaultProps = {
  fluid: false,
  border: false,
  rounded: true,
  menuOpen: false,
};
