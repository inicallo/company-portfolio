"use client"; // This ensures this file is treated as a client component

import React, { useState, useRef, useEffect } from "react";
import { NAV_LINKS } from "../../../constants";
import toggle from "../../../constants/toggle";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const ClientNavbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const hamburgerRef = useRef<HTMLButtonElement | null>(null);
  const navMenuRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        isMenuOpen &&
        navMenuRef.current &&
        !navMenuRef.current.contains(e.target as Node) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(e.target as Node)
      ) {
        setMenuOpen(false);
        toggle(hamburgerRef.current, navMenuRef.current);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  const handleClick = () => {
    setMenuOpen((prev) => !prev);
    toggle(hamburgerRef.current, navMenuRef.current);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-5 bg-white dark:bg-gray-900 shadow-md">
      <div className="flex justify-between items-center mx-auto px-4 lg:px-8">
        <Link href="/" aria-label="CAStudio Home">
          <Image
            src="/CASTUDIO.png"
            alt="CAStudio Logo"
            className="dark:invert w-auto h-auto"
            width={150}
            height={150}
          />
        </Link>
        <ul
          className={`absolute right-4 top-16 z-10 py-2 bg-slate-200 bg-opacity-95 shadow-xl rounded-3xl max-w-[250px] w-full lg:w-fit ${
            isMenuOpen ? "block" : "hidden"
          } lg:flex lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none lg:flex-row`}
          ref={navMenuRef}
        >
          {NAV_LINKS.map((link) => (
            <li key={link.key} className="my-2 lg:my-0 lg:mx-4">
              <Link
                href={link.href}
                className="block text-center regular-16 text-primary cursor-pointer py-2 px-4 transition-colors hover:font-bold"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="lg:hidden flex justify-center mb-3">
            <Link href={"/users"}>
              <Button
                type="button"
                title="login"
                icon="/user.svg"
                variant="btn_dark_red"
              />
            </Link>
          </li>
        </ul>

        <div id="login-button" className="hidden lg:flex lg:items-center">
          <Link href={"/users"}>
            <Button
              type="button"
              title="login"
              icon="/user.svg"
              variant="btn_dark_red"
            />
          </Link>
        </div>

        <button
          id="hamburger"
          name="hamburger"
          type="button"
          className="block lg:hidden"
          ref={hamburgerRef}
          aria-label="Toggle menu"
          onClick={handleClick}
        >
          <span className="hamburger-line transition duration-300 ease-in-out"></span>
          <span className="hamburger-line transition duration-300 ease-in-out"></span>
          <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
        </button>
      </div>
    </nav>
  );
};

export default ClientNavbar;
