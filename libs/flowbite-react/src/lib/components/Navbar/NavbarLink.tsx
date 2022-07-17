import type { FC, PropsWithChildren } from 'react';
import type { LinkProps } from 'next/link';
import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTheme } from '../Theme';
import { useNavbarContext } from './NavbarContext';

export interface NavbarLinkProps extends PropsWithChildren<LinkProps> {
  href: string;
  as?: string;
  disabled?: boolean;
}

export const NavbarLink: FC<NavbarLinkProps> = ({ href, as, disabled, children, ...props }) => {
  const { setIsOpen } = useNavbarContext();
  const router = useRouter();
  const theme = useTheme().theme.navbar.link;
  const active = router.pathname === href || router.pathname === as;
  const navbarLinkTheme = classNames(
    theme.base,
    {
      [theme.active.on]: active,
      [theme.active.off]: !active && !disabled,
    },
    theme.disabled[disabled ? 'on' : 'off']
  );

  const handleClick = () => {
    setIsOpen(false);
  };

  return (
    <Link href={href} scroll={false}>
      <a className={navbarLinkTheme} aria-disabled={disabled} {...props} onClick={handleClick}>
        {children}
      </a>
    </Link>
  );
};

NavbarLink.displayName = 'Navbar.Link';
NavbarLink.defaultProps = {
  disabled: false,
};
