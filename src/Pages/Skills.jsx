import {
  HtmlIcon,
  CssIcon,
  JsIcon,
  TailwindIcon,
  NodeIcon,
  FigmaIcon,
  ViteIcon,
  GithubIcon,
  ExpressIcon,
  ExprIcon,
  FirebaseIcon,
  NextIcon,
  ReactIcon,
  DockerIcon,
  BootstrapIcon
} from "../Components/icon";

export default function Skills() {
 const skills = [
    { name: "HTML", icon: <HtmlIcon /> },
    { name: "CSS", icon: <CssIcon /> },
    { name: "Bootstrap", icon: <BootstrapIcon /> }, 
    { name: "JavaScript", icon: <JsIcon /> },
    { name: "React", icon: <ReactIcon /> },
    { name: "Tailwind", icon: <TailwindIcon /> },
    { name: "Node", icon: <NodeIcon /> },
    { name: "MongoDB", icon: <ExpressIcon /> },
    { name: "Git", icon: <GithubIcon /> },
    { name: "Vite", icon: <ViteIcon /> },
    { name: "Express", icon: <ExprIcon /> },
    { name: "Firebase", icon: <FirebaseIcon /> },
    { name: "Figma", icon: <FigmaIcon /> },
    { name: "Nextjs", icon: <NextIcon /> },
    { name: "Ai sdk", icon: <DockerIcon /> },
  ];
  let rows = [];
  let index = 0;

  for (let i = 7; i >= 1; i--) {
    let items = [];

    for (let j = 0; j < i; j++) {
      if (skills[index]) {
        items.push(
          <div
            key={index}
            className=" animate-fadeUp
            w-24 h-24 
            sm:w-28 sm:h-28 
            md:w-32 md:h-32 
            lg:w-36 lg:h-36 
            flex flex-col items-center justify-center 
            rounded-xl shadow-lg 
            bg-gradient-to-b from-[#FCF8F8] via-[#F9DFDF] to-[#F5AFAF]
            hover:scale-110 hover:-translate-y-2
            transition 
            gap-2
            text-sm sm:text-base md:text-lg
            "
          >
            <span className="text-xl sm:text-2xl md:text-3xl text-[#9f7b75] group-hover:text-white transition-colors duration-300">
              {skills[index].icon}
            </span>
            <span className="font-medium text-[#7a5c57] group-hover:text-white transition-colors duration-300">
              {skills[index].name}
            </span>
          </div>,
        );
        index++;
      }
    }

    rows.push(
      <div
        key={i}
        className="flex justify-center flex-wrap gap-4 sm:gap-6 mb-6"
      >
        {items}
      </div>,
    );
  }

  return (
    <section className="text-center mt-20 px-4">
      <h1 className="text-2xl md:text-3xl font-bold mb-10 text-[#e6a4a4]">
        Skills
      </h1>
      {rows}
    </section>
  );
}
