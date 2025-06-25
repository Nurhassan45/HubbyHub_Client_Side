import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
} from 'react-icons/fa';
import Logo from '../Logo/Logo';

const Footer = () => {
  return (
    <footer className="bg-[#2563EB]  text-white mt-10">
      {/* ✅ Inner container with responsive width */}
      <div className="w-full md:w-11/12 mx-auto py-10 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Info */}
          <div>
            <Logo></Logo>
            <p className="mt-2 text-sm text-gray-300">
              Connect with people who share your passion. Build, learn, and play
              together!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-2 text-teal-400">
              Quick Links
            </h3>
            <ul className="space-y-1 text-sm">
              <li>
                <a href="/" className="hover:text-teal-300 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/allGroup" className="hover:text-teal-300 transition">
                  All Groups
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-teal-300 transition">
                  About
                </a>
              </li>
              <li>
                <a href="/dashboard" className="hover:text-teal-300 transition">
                  Dashboard
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Socials */}
          <div>
            <h3 className="text-lg font-semibold mb-2 text-teal-400">
              Contact Us
            </h3>
            <p className="text-sm mb-2 flex items-center gap-2">
              <FaEnvelope className="text-teal-300" />
              support@hobbygroups.com
            </p>

           
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-teal-700 mt-10 pt-4 text-center text-sm text-gray-300">
          &copy; {new Date().getFullYear()} HobbyGroups. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
