"use client";

import { useColorTheme } from "@/store/store";
import { Sun, Moon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "leistungen",
    path: "/services",
  },
  {
    name: "arbeit",
    path: "/work",
  },
  {
    name: "über mich",
    path: "/about",
  },
];

const Nav = () => {
  const theme = useColorTheme((state) => state.theme);
  const toggleTheme = useColorTheme((state) => state.toggleTheme);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, [theme]);

  return (
    <header className='w-full h-[72px]'>
      <nav className='_container h-full flex justify-between items-center text-base'>
        <div className='basis-1/5 flex items-center justify-start'>
          <Link href='/'>
            {theme === "dark" ? (
              <Image
                src='/images/Logo_white.png'
                alt='Logo'
                width={90}
                height={60}
              />
            ) : (
              <Image
                src='/images/Logo_black.png'
                alt='Logo'
                width={80}
                height={40}
              />
            )}
          </Link>
        </div>
        <ul className='basis-4/5 sm:flex items-center justify-center gap-16 hidden  '>
          {links.map(({ name, path }) => (
            <li key={name} className='capitalize'>
              <Link href={path}>{name}</Link>
            </li>
          ))}
        </ul>

        <div className='basis-1/5 flex items-center justify-end gap-6'>
          <button
            type='button'
            className='border-light border-[1px] rounded-lg flex p-2'
            onClick={toggleTheme}
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <Link
            className='_gardient_right py-1 px-4 rounded-lg text-[hsl(0,0%,5%)] font-semibold'
            href='/contact'
          >
            Kontakt
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
