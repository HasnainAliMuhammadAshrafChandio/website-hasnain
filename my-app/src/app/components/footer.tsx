import Link from 'next/link';

export default function Footer() {
  return (
    <>
      <footer className="bg-gray-100">
        {/* Footer Content */}
        <div className="footer-container flex flex-wrap justify-between items-start p-5 gap-8 border-t-2 border-gray-300">
          {/* Brands Section */}
          <div className="brand w-full sm:w-auto">
            <h2 className="font-bold text-2xl">Funiro.</h2>
            <p className="text-gray-600 mt-2 leading-relaxed">
              400 University Drive Suite 200 Coral Gables, <br />
              FL 33134 USA
            </p>
          </div>

          {/* Navbar Section */}
          <div className="navbar">
            <h4 className="font-semibold text-lg mb-4">Navbar</h4>
            <ul className="space-y-2 text-gray-700">
              <li>
                <Link href="/" passHref>
                  <a className="hover:text-gray-900">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/shop" passHref>
                  <a className="hover:text-gray-900">Shop</a>
                </Link>
              </li>
              <li>
                <Link href="/about" passHref>
                  <a className="hover:text-gray-900">About</a>
                </Link>
              </li>
              <li>
                <Link href="/contact" passHref>
                  <a className="hover:text-gray-900">Contact</a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Help Section */}
          <div className="help">
            <h4 className="font-semibold text-lg mb-4">Help</h4>
            <ul className="space-y-2 text-gray-700">
              <li>
                <Link href="/payment-options" passHref>
                  <a className="hover:text-gray-900">Payment Option</a>
                </Link>
              </li>
              <li>
                <Link href="/returns" passHref>
                  <a className="hover:text-gray-900">Returns</a>
                </Link>
              </li>
              <li>
                <Link href="/privacy-policies" passHref>
                  <a className="hover:text-gray-900">Privacy Policies</a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="newsletter w-full sm:w-auto">
            <h4 className="font-semibold text-lg mb-4">Newsletter</h4>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your Email"
                className="p-2 border border-gray-300 rounded-md w-full sm:w-auto"
              />
              <button
                type="submit"
                className="font-bold bg-[#B88E2F] text-white px-4 py-2 rounded-md hover:bg-[#916b1e] transition"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="footer-bottom text-center py-4 bg-gray-200 text-gray-600">
          <hr className="mb-4 border-gray-300" />
          <p>2023 Funiro. All rights reserved</p>
        </div>
      </footer>
    </>
  );
}
