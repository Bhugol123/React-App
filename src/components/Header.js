import React from "react";

const Header = () => {
  return (
    <header className="bg-black text-white flex items-baseline px-4 py-2 justify-between">
      <h1 className="text-2xl">Tail Web</h1>
      <nav className="space-x-2">
        <a className="same" href="">
          About
        </a>
        <a className="same" href="">
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;
