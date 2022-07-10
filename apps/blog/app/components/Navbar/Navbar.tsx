import Link from 'next/link';
import type { FormEvent } from 'react';
import { useRef, useState } from 'react';

// eslint-disable-next-line
export interface NavbarProps {}

// TODO: [ActiveLink](https://stackoverflow.com/a/53931405)
// TODO: [Navbar.Link](https://github.com/themesberg/flowbite-react/blob/main/src/lib/components/Navbar/NavbarLink.tsx)
// TODO: [Navbar.Brand](https://github.com/themesberg/flowbite-react/blob/main/src/lib/components/Navbar/NavbarBrand.tsx)
// TODO: [Navbar.Toggle](https://github.com/themesberg/flowbite-react/blob/main/src/lib/components/Navbar/NavbarToggle.tsx)
// TODO: [Navbar.Collapse](https://github.com/themesberg/flowbite-react/blob/main/src/lib/components/Navbar/NavbarCollapse.tsx)

// TODO: NavbarContext
// TODO: ThemeContext

// TODO: Navbar stories
// TODO: Navbar tests

export function Navbar(props: NavbarProps) {
  const navbarMenuRef = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState(false);

  const collapseToggle = (e: FormEvent<HTMLButtonElement>) => {
    const target = navbarMenuRef.current;

    setExpanded((prev) => !prev);

    if (expanded === false) {
      target.classList.remove('hidden');
    } else {
      target.classList.add('hidden');
    }
  };

  return (
    <nav
      {...props}
      className="flex flex-wrap justify-between items-center py-3"
    >
      <div className="flex flex-row flex-nowrap justify-between items-center w-full md:w-auto">
        <Link href="/">
          <a className="self-center text-xl font-semibold whitespace-nowrap">
            CBL
          </a>
        </Link>
        <button
          data-collapse-toggle="navbar-menu"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-menu"
          aria-expanded={expanded}
          onClick={collapseToggle}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
          <svg
            className="hidden w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
      <div
        id="navbar-menu"
        className="hidden w-full md:block md:w-auto"
        ref={navbarMenuRef}
      >
        <ul className="flex flex-col justify-center items-start mt-4 md:flex-row md:justify-start md:items-center md:space-x-4 md:mt-0 md:font-medium">
          <li className="w-full md:w-auto">
            <Link href="/">
              <a className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:md:text-white">
                Home
              </a>
            </Link>
          </li>
          <li className="w-full md:w-auto">
            <Link href="/about">
              <a className="block py-2 pr-4 pl-3 text-gray-700 rounded border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                About
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
