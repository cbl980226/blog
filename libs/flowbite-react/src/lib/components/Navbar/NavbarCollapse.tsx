import type { ComponentProps, FC, PropsWithChildren } from 'react';
import classNames from 'classnames';
import { Children } from 'react';
import { useTheme } from '../Theme';
import { useNavbarContext } from './NavbarContext';

// eslint-disable-next-line
export interface NavbarCollapseProps extends Omit<PropsWithChildren<ComponentProps<'div'>>, 'className'> {}

export const NavbarCollapse: FC<NavbarCollapseProps> = ({ children, ...props }) => {
  const { isOpen } = useNavbarContext();
  const theme = useTheme().theme.navbar.collapse;
  const collapseTheme = classNames(theme.base, theme.hidden[isOpen ? 'off' : 'on']);
  const collapseMenuTheme = classNames(theme.layout);

  return (
    <div className={collapseTheme} {...props}>
      <ul className={collapseMenuTheme}>
        {Children.map(children, (child, index) => {
          return <li key={index}>{child}</li>;
        })}
      </ul>
    </div>
  );
};

NavbarCollapse.displayName = 'Navbar.Collapse';
