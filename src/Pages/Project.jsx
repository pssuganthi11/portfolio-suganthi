import Musicdownloader from "../assets/Images/music downloader.png";
import courselanding from "../assets/Images/courselandingpage.png";
import resumebuilder from "../assets/Images/resumebuilder.png";
import blogsite from "../assets/Images/blogsite.png";
import profilecard from "../assets/Images/profilecard.png";
import coffeeshop from "../assets/Images/coffee shop.png";
import jsbuilds from "../assets/Images/jsimg.png";

export default function Projects() {
  const projects = [
    {
      title: "Music Downloader",
      image: Musicdownloader,
      link: "https://pluseloader.netlify.app/",
      github: "",
    },
    {
      title: "coffee Shop",
      image: coffeeshop,
      link: "https://suganthicoffeehunt.netlify.app/",
      github: "https://github.com/pssuganthi11/Music-downloader",
    },
    {
      title: "Course Landing Page",
      image: courselanding,
      link: "https://cyberdudenetworks.vercel.app/",
      github: "https://github.com/pssuganthi11/Landing-page",
    },
    {
      title: "Resume Builder",
      image: resumebuilder,
      link: "https://resume-builder-olive-seven.vercel.app/",
      github: "https://github.com/pssuganthi11/resume-builder",
    },
    {
      title: "Profile Card",
      image: profilecard,
      link: "https://profilecard-frontendmentor-4r8f39wsd.vercel.app/",
      github: "https://github.com/pssuganthi11/profilecard_frontendmentor",
    },
    {
      title: "Blog site",
      image: blogsite,
      link: "https://blogsitescrud.netlify.app/",
      github: "https://github.com/pssuganthi11/cdn_crud_blog",
    },
    {
      title: "Js builds",
      image: jsbuilds,
      link: "https://suganthi-js.vercel.app/",
      github: "https://github.com/pssuganthi11/suganthi-js",
    },
  ];

  return (
    <section className=" animate-fadeUp w-full flex flex-col text-center items-center text-[#9f7b75] mt-10 sm:mt-20 lg:mb-10">
      <h1 className="text-2xl border-b-4 rounded text-center font-bold">
        My Works
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center border rounded shadow-lg w-[250px] lg:w-[300px] hover:shadow-[#F5AFAF] cursor-pointer"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto"
            />

            <div className="p-3 space-x-4">
              <h3 className="font-bold uppercase mb-2">{project.title}</h3>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#F5AFAF] px-3 py-1 rounded text-amber-900"
              >
                Live
              </a>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#F5AFAF] px-3 py-1 rounded text-amber-900"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
