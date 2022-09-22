import Link from "next/link";
import { FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-center bg-white">
      <div className="px-4 py-12 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-6">
          <div id="social" className="flex justify-center gap-6">
            <Link
              href="https://www.instagram.com/plantburgertrailer"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram
                className="cursor-pointer hover:fill-secondary"
                size={40}
              />
            </Link>

            <Link
              href="https://github.com/hundehausen/plant-burger"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub
                className="cursor-pointer hover:fill-secondary"
                size={40}
              />
            </Link>
          </div>

          <nav className="p-6 border-4 border-gray-900 rounded-3xl">
            <ul className="flex flex-wrap justify-center text-sm font-bold gap-6">
              <li>
                <Link href="/" rel="noopener noreferrer">
                  <a className="text-gray-900 hover:text-secondary">Home</a>
                </Link>
              </li>

              <li>
                <Link href="/menu" rel="noopener noreferrer">
                  <a className="text-gray-900 hover:text-secondary">
                    Speisekarte
                  </a>
                </Link>
              </li>

              <li>
                <Link href="/impress" rel="noopener noreferrer">
                  <a className="text-gray-900 hover:text-secondary">
                    Impressum
                  </a>
                </Link>
              </li>
            </ul>
          </nav>

          <p className="max-w-lg mx-auto text-xs text-gray-500">
            <span className="block mt-4">
              &copy; {new Date().getFullYear()} Julian Daniel Kiesele & Marwin
              Löhmann Plant-Burger GbR
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
