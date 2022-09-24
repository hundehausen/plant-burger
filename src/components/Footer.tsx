import Link from 'next/link';
import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaPhone,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="text-center text-gray-700">
      <div className="px-4 py-12 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-6">
          <div id="social" className="flex justify-center gap-6">
            <a
              href="https://www.instagram.com/plantburgertrailer"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram
                className="cursor-pointer hover:fill-secondary"
                size={40}
              />
            </a>

            <a
              href="https://www.facebook.com/plantburgertrailer"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook
                className="cursor-pointer hover:fill-secondary"
                size={40}
              />
            </a>

            <a
              href="https://github.com/hundehausen/plant-burger"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub
                className="cursor-pointer hover:fill-secondary"
                size={40}
              />
            </a>

            <a
              href="mailto:info@plant-burger.de"
              target="_blank"
              rel="noopener noreferrer"
              title="Schreiben Sie uns gerne eine E-Mail!"
            >
              <FaEnvelope
                className="cursor-pointer hover:fill-secondary"
                size={40}
              />
            </a>

            <a
              href="tel:01608121951"
              target="_blank"
              rel="noopener noreferrer"
              title="Rufen Sie uns gerne an!"
            >
              <FaPhone
                className="cursor-pointer hover:fill-secondary"
                size={40}
              />
            </a>
          </div>

          <nav className="p-6 border-4 border-gray-900 rounded-3xl">
            <ul className="flex flex-wrap justify-center text-sm font-bold gap-6">
              <li>
                <Link href="/" rel="noopener noreferrer">
                  <a className="text-gray-800 hover:text-secondary">Home</a>
                </Link>
              </li>

              <li>
                <Link href="/menu" rel="noopener noreferrer">
                  <a className="text-gray-800 hover:text-secondary">
                    Speisekarte
                  </a>
                </Link>
              </li>

              <li>
                <Link href="/impress" rel="noopener noreferrer">
                  <a className="text-gray-800 hover:text-secondary">
                    Impressum
                  </a>
                </Link>
              </li>

              <li>
                <Link href="/privacy" rel="noopener noreferrer">
                  <a className="text-gray-800 hover:text-secondary">
                    Datenschutzerklärung
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
