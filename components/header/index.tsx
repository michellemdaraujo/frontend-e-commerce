import Link from 'next/link';
import { useMemo } from 'react';
import Image from 'next/image';
import NextLogo from '../../public/next.svg';

const Header = () => {
  const links = useMemo(
    () => [
      {
        name: 'Products',
        href: '/',
      },
    ],
    [],
  );

  return (
    <header>
      <nav className="border-gray-200 bg-gray-800 px-4 py-4 lg:px-6">
        <div className="mx-auto flex max-w-screen-xl items-center">
          <Link href="/" className="mr-10 flex items-center">
            <Image src={NextLogo} alt="logo" width="90" className="mr-3" />
          </Link>
          <div
            className="order-1 flex w-auto items-center justify-between"
            id="mobile-menu"
          >
            <ul className="mt-0 flex space-x-8 font-medium">
              {links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="bg-primary-700 lg:text-primary-700 block rounded py-2 pl-3 pr-4 text-white lg:bg-transparent lg:p-0 dark:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
