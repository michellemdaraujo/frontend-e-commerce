import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-color-content-1 py-5 shadow">
      <div className="mx-auto w-full max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-color-text-primary-inverted text-sm sm:text-center">
          © 2024{' '}
          <Link href="/" className="hover:underline">
            Mock™
          </Link>
          . All Rights Reserved.
        </span>
        <ul className="text-color-text-primary-inverted mt-3 flex flex-wrap items-center text-sm font-medium sm:mt-0 ">
          <li>
            <a href="#" className="me-4 hover:underline md:me-6">
              About
            </a>
          </li>
          <li>
            <a href="#" className="me-4 hover:underline md:me-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="me-4 hover:underline md:me-6">
              Licensing
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
