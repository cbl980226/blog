import type { ComponentProps, FC, PropsWithChildren } from 'react';
import classNames from 'classnames';
import { useTheme } from '../Theme';
import { useNavbarContext } from './NavbarContext';

export interface NavbarLinkProps extends Omit<PropsWithChildren<ComponentProps<'a'>>, 'className'> {
  href?: string;
  active?: boolean;
  disabled?: boolean;
}

export const NavbarLink: FC<NavbarLinkProps> = ({ href, active, disabled, children, ...props }) => {
  const { setIsOpen } = useNavbarContext();
  const theme = useTheme().theme.navbar.link;
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
    <a className={navbarLinkTheme} aria-disabled={disabled} {...props} onClick={handleClick}>
      {children}
    </a>
  );
};

NavbarLink.displayName = 'Navbar.Link';
NavbarLink.defaultProps = {
  disabled: false,
};
