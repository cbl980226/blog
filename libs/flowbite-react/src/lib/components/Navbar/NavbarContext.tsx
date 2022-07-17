import type { Dispatch, SetStateAction } from 'react';
import { createContext, useContext } from 'react';
import { Fun } from '@ephox/katamari';

interface NavbarContextProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const defaultProps: NavbarContextProps = {
  isOpen: false,
  setIsOpen: Fun.never,
};

export const NavbarContext = createContext<NavbarContextProps>(defaultProps);

export const useNavbarContext = () => useContext(NavbarContext);
