import type { FC } from 'react';
import type { LayoutProps } from './types';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Navbar } from '@cbl980226/flowbite-react';

export const BaseLayout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col flex-nowrap justify-start items-center m-auto min-h-screen gap-y-1 bg-white text-black dark:bg-gray-800 dark:text-white">
      <Navbar fluid={false} rounded={true}>
        <div className="flex items-center">
          <Navbar.Brand>
            <span>CBL</span>
            <div className="relative ml-6 xl:ml-16">
              <div className="absolute flex inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <FontAwesomeIcon icon={faSearch} className="text-base text-gray-500" />
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search..."
              />
            </div>
          </Navbar.Brand>
        </div>
        <div className="flex items-center md:order-2">
          <Link href="https://github.com/cbl980226">
            <a target="_blank">
              <FontAwesomeIcon icon={faGithub} className=" text-2xl p-2 ml-3" />
            </a>
          </Link>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="/">Home</Navbar.Link>
          <Navbar.Link href="/about">About</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
      <div className="flex-1 w-full px-2 py-2.5">
        <div className="container m-auto h-full">{children}</div>
      </div>
      <footer className="w-full px-2 py-2.5">
        <div className="container m-auto h-full">footer</div>
      </footer>
    </div>
  );
};

BaseLayout.displayName = 'BaseLayout';
