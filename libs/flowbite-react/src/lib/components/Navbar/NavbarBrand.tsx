import type { ComponentProps, FC, PropsWithChildren } from 'react';
import classNames from 'classnames';
import { useTheme } from '../Theme';

// eslint-disable-next-line
export interface NavbarBrandProps extends Omit<PropsWithChildren<ComponentProps<'a'>>, 'className'> {}

export const NavbarBrand: FC<NavbarBrandProps> = ({ href, children, ...props }) => {
  const theme = useTheme().theme.navbar.brand;
  const navbarBrandTheme = classNames(theme);

  return (
    <a href={href} className={navbarBrandTheme} {...props}>
      {children}
    </a>
  );
};

NavbarBrand.displayName = 'Navbar.Brand';
NavbarBrand.defaultProps = {};
