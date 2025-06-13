import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white px-4 sm:px-6 md:px-14 py-16 m-3 rounded-3xl">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <h2 className="text-3xl md:text-5xl font-semibold">
            Subscribe to our<br />news later
          </h2>
          <form className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-[#272727] text-white px-6 py-4 rounded-full w-full sm:w-64"
            />
            <button
              type="submit"
              className="bg-orange-600 hover:bg-[#083630] text-white px-8 py-4 rounded-full transition"
            >
              Subscribe
            </button>
          </form>
        </div>

        <hr className="my-10 border-[#2e2e2e]" />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-base">
          <div>
            <h3 className="font-semibold mb-3">Support</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Home V.1</li>
              <li>Home V.2</li>
              <li>Home V.3</li>
              <li>Features</li>
              <li>Pricing</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Extra links</h3>
            <ul className="space-y-2 text-gray-300">
              <li>About V.1</li>
              <li>About V.2</li>
              <li>About V.3</li>
              <li>Blog</li>
              <li>Blog Post</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Developers</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Contact V.1</li>
              <li>Contact V.2</li>
              <li>Contact V.3</li>
              <li>Categories</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Solutions</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Sign In</li>
              <li>Sign Up</li>
              <li>Forgot password</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Advisory</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Licensing</li>
              <li>Style Guide</li>
              <li>Powered by Webflow</li>
            </ul>
          </div>
        </div>

        <hr className="my-8 border-[#2E2E2E]" />
        <div className="text-center text-sm sm:text-base text-gray-400 mt-6">
          © 2025 Temlis. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
