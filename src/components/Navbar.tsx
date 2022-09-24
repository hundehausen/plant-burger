import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);
  const handleClick = () => setExpanded((oldValue) => !oldValue);

  return (
    <nav className="bg-white border-gray-200 px-2 py-2.5 rounded">
      <div className="container flex flex-wrap justify-between items-center mx-auto max-w-50 md:px-24">
        <Link href="/">
          <a>
            <Image
              src="/plant-burger-logo.png"
              className="mr-3 h-6 sm:h-9 cursor-pointer"
              alt="Plant Burger Logo"
              width={60}
              height={60}
            />
          </a>
        </Link>
        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white"></span>

        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden"
          aria-controls="navbar-default"
          aria-expanded={expanded}
          onClick={handleClick}
        >
          <span className="sr-only">Menü öffnen</span>
          <FaBars className="text-2xl" />
        </button>
        <div
          className={clsx('w-full md:block md:w-auto', !expanded && 'hidden')}
          id="navbar-default"
        >
          <ul className="flex flex-col p-4 mt-4 bg-gray-50 text-right text-xl rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-base md:font-medium md:border-0 md:bg-white">
            <li>
              <Link href="/" aria-current="page">
                <a
                  className="text-gray-700 hover:text-secondary transition"
                  onClick={handleClick}
                >
                  Home
                </a>
              </Link>
            </li>

            <li>
              <Link href="/menu" aria-current="page">
                <a
                  className="text-gray-700 hover:text-secondary transition"
                  onClick={handleClick}
                >
                  Speisekarte
                </a>
              </Link>
            </li>

            <li>
              <Link href="/contact" aria-current="page">
                <a
                  className="text-gray-700 hover:text-secondary transition"
                  onClick={handleClick}
                >
                  Catering
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
