import type { ComponentProps, FC, PropsWithChildren } from 'react';
import type { LinkProps } from 'next/link';
import classNames from 'classnames';
import Link from 'next/link';
import { useTheme } from '../Theme';

type Url = LinkProps['href'];

export interface NavbarBrandProps extends Omit<PropsWithChildren<ComponentProps<'a'>>, 'className' | 'href'> {
  href?: Url;
}

export const NavbarBrand: FC<NavbarBrandProps> = ({ href, children, ...props }) => {
  const theme = useTheme().theme.navbar.brand;
  const navbarBrandTheme = classNames(theme);

  return (
    (href && (
      <Link href={href}>
        <a className={navbarBrandTheme} {...props}>
          {children}
        </a>
      </Link>
    )) || (
      <span className={navbarBrandTheme} {...props}>
        {children}
      </span>
    )
  );
};

NavbarBrand.displayName = 'Navbar.Brand';
NavbarBrand.defaultProps = {};
