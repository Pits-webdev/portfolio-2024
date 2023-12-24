import React from "react";
import Logo from "./ui/Logo";
import Nav from "./ui/Nav";
import HamMenu from "./ui/HamMenu";

const Header = () => {
  return (
    <header className='w-full h-20 z-50 bg-transparent'>
      <nav className='h-full container mx-auto flex items-center justify-between'>
        <Logo />
        <Nav />
        <HamMenu />
      </nav>
    </header>
  );
};

export default Header;
