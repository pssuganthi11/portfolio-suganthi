import { useState, useEffect } from "react";

import photo from "../assets/Images/photo.png";

function Home() {
  const [text, setText] = useState("");

  useEffect(() => {
    const name = "I'm Suganthi Pattappan";
    let i = 0;

    const timer = setInterval(() => {
      setText(name.slice(0, i + 1));
      i++;

      if (i === name.length) clearInterval(timer);
    }, 100);
  }, []);
  return (
    <section className="w-full max-w-screen-2xl mx-auto flex flex-col overflow-x-hidden md:flex-row items-center justify-between gap-10 md:gap-20 mt-10 2xl:mt-20 px-10  text-[#9f7b75] animate-fadeUp">
      <div className="z-10 flex flex-col gap-4 text-center md:text-center ">
        <h1 className="text-4xl md:text-6xl font-monospace 2xl:text-5xl leading-tight">
          {text}
        </h1>

        <h3 className="text-2xl font-semibold">FullStack Developer ✨</h3>

        <p className="text-lg md:text-xl opacity-90">
          I build complete, responsive, and scalable web applications and turn
          ideas into fast, production-ready applications.
        </p>

        <div className="flex flex-col md:flex-row gap-3 justify-center md:justify-center mt-4">
          <button className="bg-[#F5AFAF] w-full md:w-40 p-2 rounded shadow-lg text-lg hover:bg-[#f29898] transition-colors text-white font-bold">
            <a href="/contact">Hire Me</a>
          </button>

          <button className="bg-[#F5AFAF] w-full md:w-40 p-2 rounded shadow-lg text-lg hover:bg-[#f29898] transition-colors text-white font-bold">
            <a
              href="/Documents/Suganthi-resume.pdf"
              target="_blank"
              rel="noreferrer"
                download

            >
              Download CV
            </a>
          </button>
        </div>
      </div>

      <div className=" hidden lg:flex items-center justify-center w-full md:w-1/2 min-h-[350px] md:min-h-[500px]">
        <div className="relative flex items-center justify-center">
          <img
            src={photo}
            alt="profile"
            className="z-10 w-48 sm:w-64 md:w-72 lg:w-96 aspect-square object-cover 
        rounded-full 
        bg-[#F5AFA4] 
        p-2                         
        shadow-[0_0_60px_15px_rgba(245,175,176,0.6)]"
          />
        </div>
      </div>
    </section>
  );
}
export default Home;
