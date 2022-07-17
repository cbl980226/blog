import { Navbar as NavbarComponent } from './Navbar';
import { NavbarBrand } from './NavbarBrand';
import { NavbarLink } from './NavbarLink';
import { NavbarCollapse } from './NavbarCollapse';
import { NavbarToggle } from './NavbarToggle';

export const Navbar = Object.assign(NavbarComponent, {
  Brand: NavbarBrand,
  Collapse: NavbarCollapse,
  Link: NavbarLink,
  Toggle: NavbarToggle,
});
