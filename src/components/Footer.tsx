import Link from 'next/link';
import { FaEnvelope, FaFacebook, FaInstagram, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="text-center text-gray-700">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-6">
          <div id="social" className="flex justify-center gap-6">
            <a
              href="https://www.instagram.com/plantburgertrailer"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
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
              aria-label="Facebook"
            >
              <FaFacebook
                className="cursor-pointer hover:fill-secondary"
                size={40}
              />
            </a>

            <a
              href="mailto:info@plant-burger.de"
              target="_blank"
              rel="noopener noreferrer"
              title="Schreiben Sie uns gerne eine E-Mail!"
              aria-label="E-Mail"
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
              aria-label="Telefon"
            >
              <FaPhone
                className="cursor-pointer hover:fill-secondary"
                size={40}
              />
            </a>
          </div>

          <nav className="rounded-3xl border-4 border-gray-900 p-6">
            <ul className="flex flex-wrap justify-center gap-6 text-sm font-bold">
              <li>
                <Link href="/" rel="noopener noreferrer">
                  <a className="text-gray-800 hover:text-secondary">Home</a>
                </Link>
              </li>

              <li>
                <Link href="/menu" rel="noopener noreferrer">
                  <a
                    className="text-gray-800 hover:text-secondary"
                    aria-label="Speisekarte"
                  >
                    Speisekarte
                  </a>
                </Link>
              </li>

              <li>
                <Link href="/contact" rel="noopener noreferrer">
                  <a className="text-gray-800 hover:text-secondary">Catering</a>
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

          <p className="mx-auto max-w-lg text-xs text-gray-500">
            <span className="mt-4 block">
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
