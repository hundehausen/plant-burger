import clsx from 'clsx';
import dynamic from 'next/dynamic';
import Image from 'next/future/image';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);
  const handleClick = () => setExpanded((oldValue) => !oldValue);
  const ThemeSwitch = useMemo(
    () =>
      dynamic(() => import('../components/ThemeSwitch'), {
        loading: () => <p>ThemeSwitch is loading</p>,
        ssr: false,
      }),
    []
  );

  return (
    <nav className="mb-8 rounded border-gray-200 bg-white px-2 py-2.5 dark:bg-purple-700 dark:text-gray-100">
      <div className="max-w-50 container mx-auto flex flex-wrap items-center justify-between md:px-32 lg:px-48">
        <Link href="/">
          <a>
            <Image
              src="/plant-burger-logo-transparent.png"
              className="max-h-16 w-full cursor-pointer"
              width={64}
              height={73}
              alt="Plant Burger Logo"
            />
          </a>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 dark:bg-purple-700 dark:text-gray-100 md:hidden"
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
          <ul className="mt-4 flex flex-col rounded-lg border-2 border-gray-100 bg-gray-50 p-4 text-right text-xl text-gray-700 dark:bg-purple-600 dark:text-gray-200 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:text-base md:font-medium dark:md:bg-purple-700">
            <li>
              <Link href="/" aria-current="page">
                <a
                  className="transition hover:text-secondary dark:hover:text-amber-400"
                  onClick={handleClick}
                >
                  Home
                </a>
              </Link>
            </li>

            <li>
              <Link href="/menu" aria-current="page">
                <a
                  className="transition hover:text-secondary dark:hover:text-amber-400"
                  onClick={handleClick}
                >
                  Speisekarte
                </a>
              </Link>
            </li>

            <li>
              <Link href="/catering" aria-current="page">
                <a
                  className="transition hover:text-secondary dark:hover:text-amber-400"
                  onClick={handleClick}
                >
                  Catering
                </a>
              </Link>
            </li>

            <li>
              <ThemeSwitch className="inline-flex" />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
