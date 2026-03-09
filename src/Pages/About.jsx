import aboutImg from "../assets/Images/ai1.jpg";
import Education from "./Education";

export default function About() {
  return (
    <section
      id="about"
      className="w-full flex flex-col mt-30 text-center items-center text-[#9f7b75] animate-fadeUp"
    >
      <h1 className="text-2xl border-b-4 rounded text-center font-bold md:w-[5%]">
        About
      </h1>

      <div className="sm:flex sm:items-center sm:justify-center md:w-[90%] md:gap-4 lg:gap-x-20">
        <div className="hidden md:flex justify-center">
          <div className="w-80 h-80 bg-[#F9DFDF] rounded-full relative flex items-center justify-center">
            <div className="w-64 h-64 bg-[#FBEFEF] rounded-full flex items-center justify-center absolute">
              <div className="w-52 h-52 bg-[#FCF8F8] rounded-full flex items-center justify-center">
                <img
                  src={aboutImg}
                  alt="about"
                  className="w-50 h-auto rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="text-lg sm:text-2xl sm:w-[550px] mt-10 sm:mt-0">
          <p className="text-center sm:text-left leading-relaxed">
            Hello! I'm <strong>Suganthi Pattappan</strong>, a passionate
            Fullstack developer with strong attention to detail and a love for
            building modern, functional, and user-centric applications. My
            journey began with a fascination for how design meets technology,
            which led me to develop skills across both front-end aesthetics and
            back-end logic.
          </p>
        </div>
      </div>
      <Education />
    </section>
  );
}
