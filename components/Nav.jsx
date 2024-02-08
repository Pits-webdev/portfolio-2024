"use client";

import { Sun, Moon } from "lucide-react";
import Link from "next/link";

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
];

const Nav = () => {
  return (
    <header className='w-full h-[72px]'>
      <nav className='_container h-full flex justify-between items-center'>
        <div className='basis-1/5 flex items-center justify-start'>
          <Link href='/'>Logo</Link>
        </div>
        <ul className='basis-4/5 sm:flex items-center justify-center gap-16 hidden  '>
          {links.map(({ name, path }) => (
            <li key={name} className='capitalize'>
              <Link href={path}>{name}</Link>
            </li>
          ))}
        </ul>

        <div className='basis-1/5 flex items-center justify-end gap-6'>
          <button className='border-light border-[1px] rounded-lg flex p-2'>
            <Sun size={16} />
            {/* <Moon size={16} /> */}
          </button>
          <Link
            className='_gardient_right py-1 px-4 rounded-lg text-black font-semibold'
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
