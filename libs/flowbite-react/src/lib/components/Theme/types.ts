export interface Theme {
  navbar: {
    base: string;
    rounded: Switchable;
    bordered: Switchable;
    layout: {
      base: string;
      fluid: Switchable;
    };
    brand: string;
    collapse: {
      base: string;
      layout: string;
      hidden: Switchable;
    };
    link: {
      base: string;
      active: Switchable;
      disabled: Switchable;
    };
    toggle: {
      base: string;
      icon: string;
    };
  };
}

interface Switchable {
  off: string;
  on: string;
}
