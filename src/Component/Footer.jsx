import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#2563EB' }} className="--body-color py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold">HobbyGroups</h2>
          <p className="mt-2 text-sm text-gray-300">
            Connect with people who share your passion. Build, learn, and play together!
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2 text-teal-400">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="/" className="hover:text-teal-300 transition">Home</a></li>
            <li><a href="/all-groups" className="hover:text-teal-300 transition">All Groups</a></li>
            <li><a href="/about" className="hover:text-teal-300 transition">About</a></li>
            <li><a href="/contact" className="hover:text-teal-300 transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact & Socials */}
        <div>
          <h3 className="text-lg font-semibold mb-2 text-teal-400">Contact Us</h3>
          <p className="text-sm mb-2 flex items-center gap-2">
            <FaEnvelope className="text-teal-300" /> support@hobbygroups.com
          </p>

          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-teal-300 hover:text-teal-200">
              <FaFacebookF />
            </a>
            <a href="#" className="text-teal-300 hover:text-teal-200">
              <FaTwitter />
            </a>
            <a href="#" className="text-teal-300 hover:text-teal-200">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-teal-800 mt-10 pt-4 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} HobbyGroups. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
