import clsx from 'clsx';
import Image from 'next/future/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);
  const handleClick = () => setExpanded((oldValue) => !oldValue);

  return (
    <nav className="rounded border-gray-200 bg-white px-2 py-2.5">
      <div className="max-w-50 container mx-auto flex flex-wrap items-center justify-between md:px-24">
        <Link href="/">
          <a>
            <Image
              src="/plant-burger-logo.png"
              className="max-h-16 cursor-pointer"
              width={64}
              height={64}
              alt="Plant Burger Logo"
            />
          </a>
        </Link>
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white"></span>

        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 md:hidden"
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
          <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 text-right text-xl md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:text-base md:font-medium">
            <li>
              <Link href="/" aria-current="page">
                <a
                  className="text-gray-700 transition hover:text-secondary"
                  onClick={handleClick}
                >
                  Home
                </a>
              </Link>
            </li>

            <li>
              <Link href="/menu" aria-current="page">
                <a
                  className="text-gray-700 transition hover:text-secondary"
                  onClick={handleClick}
                >
                  Speisekarte
                </a>
              </Link>
            </li>

            <li>
              <Link href="/contact" aria-current="page">
                <a
                  className="text-gray-700 transition hover:text-secondary"
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
