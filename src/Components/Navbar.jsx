import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navStyle = "hover:text-[#7C444F] transition duration-200 pb-1 cursor-pointer";

  return (
    <header className="w-full bg-[#FBEFEF] px-6 py-4 text-[#D9A299] font-[Science Gothic] font-bold flex justify-between items-center sticky top-0 z-50 shadow-sm">
      
      {/* Logo */}
      <div className="tracking-widest text-sm sm:text-2xl select-none">
        &lt; Suganthi Pattappan &gt;
      </div>

      {/* Desktop Menu */}
      <nav className="hidden md:flex">
        <ul className="flex items-center space-x-8 text-[18px]">
          <li><a href="/#home" className={navStyle}>Home</a></li>
          <li><a href="/#about" className={navStyle}>About</a></li>
          <li><a href="/#skills" className={navStyle}>Skills</a></li>
          <li><a href="/#project" className={navStyle}>My Works</a></li>
          <li><a href="/#contact" className={navStyle}>Contact</a></li>

          <li>
            <a
              href="https://github.com/pssuganthi11"
              target="_blank"
              rel="noreferrer"
              className="outline rounded px-3 py-1 shadow hover:text-[#7C444F] transition-all border-[#D9A299] border"
            >
              GitHub
            </a>
          </li>
        </ul>
      </nav>

      {/* Mobile Icon */}
      <div className="md:hidden">
        <button onClick={toggleMenu} aria-label="Toggle Menu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d={
                isOpen
                  ? "M18 6L6 18M6 6l12 12" 
                  : "M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z" 
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-[68px] left-0 w-full bg-[#FBEFEF] shadow-lg transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-5"
        } md:hidden`}
      >
        <ul className="flex flex-col items-center space-y-6 py-8 text-lg">
          <li><a href="/#home" onClick={closeMenu} className={navStyle}>Home</a></li>
          <li><a href="/#about" onClick={closeMenu} className={navStyle}>About</a></li>
          <li><a href="/#skills" onClick={closeMenu} className={navStyle}>Skills</a></li>
          <li><a href="/#project" onClick={closeMenu} className={navStyle}>My Works</a></li>
          <li><a href="/#contact" onClick={closeMenu} className={navStyle}>Contact</a></li>

          <li className="pt-2">
            <a
              href="https://github.com/pssuganthi11"
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
              className="outline px-6 py-2 rounded shadow border-[#D9A299] border"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}