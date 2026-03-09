import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
export default function Navbar() {
  const closeMenu = () => {
    const checkbox = document.getElementById("menu-toggle");
    if (checkbox) checkbox.checked = false;
  };

  const navStyle = ({ isActive }) =>
    `hover:text-[#7C444F] pb-1 ${
      isActive ? "border-b-2 border-[#7C444F]" : ""
    }`;

  return (
    <header className="w-full bg-[#FBEFEF] px-6 py-3 text-[#D9A299] font-[Science Gothic] font-bold flex justify-between items-center">
      <div className="tracking-widest text-lg sm:text-2xl">
        &lt; Suganthi Pattappan &gt;
      </div>

      <nav className="hidden sm:flex">
        <ul className="flex items-center space-x-6 text-[18px]">
          <li>
            <NavLink to="/" className={navStyle}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/about" className={navStyle}>
              About
            </NavLink>
          </li>

          <li>
            <NavLink to="/skills" className={navStyle}>
              Skills
            </NavLink>
          </li>

          <li>
            <NavLink to="/project" className={navStyle}>
              My Works
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact" className={navStyle}>
              Contact
            </NavLink>
          </li>

          {/* <li>
            <ThemeToggle />
          </li> */}
          <li>
            <a
              href="https://github.com/pssuganthi11"
              target="_blank"
              rel="noreferrer"
              className="outline rounded shadow-lg px-3 py-1 hover:text-[#7C444F]"
            >
              GitHub
            </a>
          </li>
        </ul>
      </nav>

      <div className="sm:hidden relative">
        <input type="checkbox" id="menu-toggle" className="hidden peer" />

        <label htmlFor="menu-toggle" className="cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"
            />
          </svg>
        </label>

        <ul className="hidden peer-checked:flex flex-col absolute right-0 mt-4 w-48 bg-[#FBEFEF] z-30 shadow-lg rounded-lg text-center space-y-3 py-4 text-lg">
          <li>
            <NavLink to="/" className={navStyle} onClick={closeMenu}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/about" className={navStyle} onClick={closeMenu}>
              About
            </NavLink>
          </li>

          <li>
            <NavLink to="/skills" className={navStyle} onClick={closeMenu}>
              Skills
            </NavLink>
          </li>

          <li>
            <NavLink to="/project" className={navStyle} onClick={closeMenu}>
              My Works
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact" className={navStyle} onClick={closeMenu}>
              Contact
            </NavLink>
          </li>

          <li>
            <a
              href="https://github.com/pssuganthi11"
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
              className="outline px-3 py-1 rounded shadow-md"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
