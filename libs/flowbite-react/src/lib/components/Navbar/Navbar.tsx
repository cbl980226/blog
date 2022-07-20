import type { ComponentProps, FC, PropsWithChildren } from 'react';
import classNames from 'classnames';
import { useState } from 'react';
import { useTheme } from '../Theme';
import { NavbarContext } from './NavbarContext';
import { useEffect } from 'react';

export interface NavbarProps extends Omit<PropsWithChildren<ComponentProps<'nav'>>, 'className'> {
  fluid?: boolean;
  bordered?: boolean;
  rounded?: boolean;
  menuOpen?: boolean;
}

export const Navbar: FC<NavbarProps> = ({ fluid, bordered, rounded, menuOpen, children, ...props }) => {
  const theme = useTheme().theme.navbar;
  const navbarTheme = classNames(theme.base, theme.bordered[bordered ? 'on' : 'off'], theme.rounded[rounded ? 'on' : 'off']);
  const navbarLayoutTheme = classNames(theme.layout.base, theme.layout.fluid[fluid ? 'on' : 'off']);

  const [isOpen, setIsOpen] = useState(menuOpen ?? false);

  useEffect(() => {
    setIsOpen(menuOpen ?? false);
  }, [menuOpen]);

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
  bordered: false,
  rounded: true,
  menuOpen: false,
};
