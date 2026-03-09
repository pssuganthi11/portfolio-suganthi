import { useState } from "react";

export default function Journey() {
  const [activeTab, setActiveTab] = useState("education");

  const education = [
    {
      year: "2016 - 2020",
      title: "Bachelor of Engineering (C.S.E.)",
      place: "Anna University",
    },
  ];

  const experience = [
    {
      year: "2025 - Present",
      title: "Full Stack Developer",
      place: "CyberDude Networks Pvt. Ltd.",
      responsibilities: [
        "Developed full stack web applications using modern frameworks",
        "Built responsive UI using React and Tailwind CSS",
        "Integrated REST APIs and handled backend logic",
        "Collaborated with team members using Git and Agile workflow",
      ],
    },
    {
      year: "2021 - 2022",
      title: "Frontend Developer",
      place: "Decision Mind Pvt Ltd",
      responsibilities: [
        "Created responsive user interfaces using React",
        "Converted UI/UX designs into functional components",
        "Optimized website performance and loading speed",
        "Worked closely with backend developers for API integration",
      ],
    },
  ];

  const data = activeTab === "education" ? education : experience;

  return (
    <section className="py-20 px-6 text-white">

  <div className="text-center mb-10">
    <h2 className="text-4xl font-bold text-[#9f7b75] border-b-4 border-[#9f7b75] 
    rounded md:w-[70%] mx-auto pb-2">
      My Journey
    </h2>

    <p className="text-gray-400 mt-2 tracking-widest text-sm">
      KNOWLEDGE AND EXPERIENCE
    </p>
  </div>

  <div className="flex justify-center gap-6 mb-14">
    <button
      onClick={() => setActiveTab("education")}
      className={`px-6 py-2 rounded-full border border-[#F5AFAF] transition ${
        activeTab === "education"
          ? "bg-[#F5AFAF] text-black"
          : "text-[#F5AFAF]"
      }`}
    >
      Education
    </button>

    <button
      onClick={() => setActiveTab("experience")}
      className={`px-6 py-2 rounded-full border border-[#F5AFAF] transition ${
        activeTab === "experience"
          ? "bg-[#F5AFAF] text-black"
          : "text-[#F5AFAF]"
      }`}
    >
      Experience
    </button>
  </div>

  <div className="space-y-6 w-full max-w-4xl mx-auto">
    {data.map((item, index) => (
      <div
        key={index}
        className="border border-[#F5AFAF]/40 rounded-xl p-6 
        bg-slate-800/60 hover:border-[#F5AFAF] 
        hover:shadow-lg hover:shadow-black/40 
        transition duration-300"
      >
        <p className="text-[#F5AFAF] font-semibold">{item.year}</p>
        <h4 className="text-xl font-bold mt-1">{item.title}</h4>
        <p className="text-gray-400 mb-3">{item.place}</p>

        {activeTab === "experience" && (
          <ul className="pl-5 text-gray-300 space-y-1 text-sm">
            {item.responsibilities.map((role, i) => (
              <li key={i}>{role}</li>
            ))}
          </ul>
        )}
      </div>
    ))}
  </div>

</section>
  );
}
