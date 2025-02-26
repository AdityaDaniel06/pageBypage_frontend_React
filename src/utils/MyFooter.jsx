"use client";

import { Footer } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

export function MyFooter() {
  return (
    <Footer container className="rounded-none bg-slate-800 text-white">
      <div className="w-full">
        {/* Top Section */}
        <div className="grid w-full justify-between sm:flex sm:justify-between md:grid-cols-1">
          {/* Brand Section */}
          <div>
            <Footer.Brand
              src="https://flowbite.com/docs/images/logo.svg"
              alt="Page By Page Logo"
              name="Page By Page"
            />
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            {/* About Links */}
            <div>
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Page by Page</Footer.Link>
                <Footer.Link href="#">Tailwind CSS</Footer.Link>
              </Footer.LinkGroup>
            </div>

            {/* Follow Us Links */}
            <div>
              <Footer.Title title="Follow Us" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Github</Footer.Link>
                <Footer.Link href="#">Discord</Footer.Link>
              </Footer.LinkGroup>
            </div>

            {/* Legal Links */}
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms & Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>

        {/* Divider */}
        <Footer.Divider />

        {/* Bottom Section */}
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          {/* Copyright */}
          <Footer.Copyright href="#" by="PageByPage™" year={2024} />

          {/* Social Media Icons */}
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon
              href="#"
              icon={BsFacebook}
              aria-label="Facebook"
              className="hover:text-emerald-400"
            />
            <Footer.Icon
              href="#"
              icon={BsInstagram}
              aria-label="Instagram"
              className="hover:text-pink-400"
            />
            <Footer.Icon
              href="#"
              icon={BsTwitter}
              aria-label="Twitter"
              className="hover:text-blue-400"
            />
            <Footer.Icon
              href="#"
              icon={BsGithub}
              aria-label="GitHub"
              className="hover:text-gray-400"
            />
            <Footer.Icon
              href="#"
              icon={BsDribbble}
              aria-label="Dribbble"
              className="hover:text-purple-400"
            />
          </div>
        </div>
      </div>
    </Footer>
  );
}
