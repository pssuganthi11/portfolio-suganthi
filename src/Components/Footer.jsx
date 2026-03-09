import React from "react";

function Footer() {
  return (
    <footer className="mt-20 border-t border-[#F5AFAF]/40 py-6 text-center text-[#9f7b75]">
      
      <p className="text-sm">
        © {new Date().getFullYear()} @suganthi Pattappan. All Rights Reserved.
      </p>

      <div className="flex justify-center gap-6 mt-3">
        <a
          href="https://github.com/pssuganthi11"
          target="_blank"
          rel="noreferrer"
          className="hover:text-[#F5AFAF] transition"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/suganthi-pattappan-b7a3921b7/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-[#F5AFAF] transition"
        >
          LinkedIn
        </a>

        <a
          href="mailto:pssuganthi11@gmail.com"
          className="hover:text-[#F5AFAF] transition"
        >
          Email
        </a>
      </div>

    </footer>
  );
}

export default Footer;