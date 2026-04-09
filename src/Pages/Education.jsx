import React from "react";

export default function Journey() {
  const education = [
    {
      year: "2016 - 2020",
      title: "Bachelor of Engineering (CSE)",
      place: "Anna University",
    },
  ];

  const experience = [
    {
      year: "2025 - present",
      title: "Frontend Engineer",
      place: "Freelancer",
      responsibilities: [
        "Developed and maintained a responsive business website for an architecture firm using WordPress and PHP.",
        "Designed and customized frontend modules to showcase projects, services, and company information.",
        "Built reusable UI components and ensured a clean, user-friendly interface.",
        "Performed continuous website updates and content management through cPanel.",
        "Managed hosting, file deployment, and server-side configurations using cPanel.",
        "Optimized website performance, responsiveness, and cross-browser compatibility.",
        "Collaborated with stakeholders to implement design changes and improve user experience.",
      ],
    },
    {
      year: "2024 - 2025",
      title: "web Developer",
      place: "Techhyve connect",
      responsibilities: [
        "Developed scalable full-stack web applications using MERN stack (MongoDB, Express, React, Node.js)",
        "Built responsive and user-friendly UI with React.js, Tailwind CSS, and modern JavaScript (ES6+)",
        "Designed and integrated RESTful APIs, ensuring efficient client-server communication",
        "Implemented backend logic, authentication, and data handling using Node.js and Express.js",
        "Collaborated in Agile development environments using Git, GitHub, and version control workflows",
        "Optimized application performance, improving load time and responsiveness",
      ],
    },
    {
      year: "2021 - 2023",
      title: "Frontend Developer",
      place: "Decision Mind Pvt Ltd",
      responsibilities: [
        "Developed dynamic and responsive user interfaces using React.js and modern CSS frameworks",
        "Converted UI/UX designs into reusable and maintainable components",
        "Improved website performance through code optimization and efficient rendering techniques",
        "Worked closely with backend teams for seamless API integration",
        "Ensured cross-browser compatibility and mobile responsiveness",
        "Maintained clean, scalable, and modular code following best practices",
      ],
    },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-20 text-center">
          <h2 className="text-4xl font-bold text-gray-900 tracking-tight">
            My <span className="text-[#e6a4a4]">Journey</span>
          </h2>
          <p className="text-gray-500 mt-3 font-medium uppercase tracking-widest text-xs">
            Professional Experience & Academic Background
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* LEFT SECTION: EXPERIENCE */}
          <div>
            <div className="flex items-center gap-4 mb-10">
              <div className="p-3 bg-[#e6a4a4]/10 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M19.5 6H16V5a2.003 2.003 0 0 0-2-2h-4a2.003 2.003 0 0 0-2 2v1H4.5A2.5 2.5 0 0 0 2 8.5v10A2.5 2.5 0 0 0 4.5 21h15a2.5 2.5 0 0 0 2.5-2.5v-10A2.5 2.5 0 0 0 19.5 6M9 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1H9zm12 13.5a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 18.5v-6.473l5.842 1.948A.5.5 0 0 0 9 14h6a.5.5 0 0 0 .158-.025L21 12.027zm0-7.494a.5.5 0 0 0-.158.02L14.919 13H9.081l-5.923-1.975a.5.5 0 0 0-.158-.02V8.5A1.5 1.5 0 0 1 4.5 7h15A1.5 1.5 0 0 1 21 8.5z"
                  />
                </svg>{" "}
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Experience</h3>
            </div>

            <div className="relative border-l-2 border-dashed border-[#e6a4a4]/40 pl-8 space-y-12">
              {experience.map((item, index) => (
                <div key={index} className="relative">
                  {/* Glowing Dot */}
                  <div className="absolute -left-[41px] top-1.5 w-5 h-5 bg-white border-4 border-[#e6a4a4] rounded-full shadow-[0_0_10px_rgba(230,164,164,0.5)]"></div>

                  <div className="bg-white p-7 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group">
                    <span className="text-sm font-bold text-[#e6a4a4] bg-[#e6a4a4]/5 px-3 py-1 rounded-full">
                      {item.year}
                    </span>
                    <h4 className="text-xl font-bold text-gray-900 mt-3 group-hover:text-[#e6a4a4] transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-gray-500 font-medium mb-4">
                      {item.place}
                    </p>
                    <ul className="space-y-2">
                      {item.responsibilities.map((res, i) => (
                        <li
                          key={i}
                          className="flex text-left gap-2 text-sm text-gray-600 leading-relaxed"
                        >
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#e6a4a4] shrink-0"></span>
                          {res}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SECTION: EDUCATION */}
          <div>
            <div className="flex items-center gap-4 mb-10">
              <div className="p-3 bg-[#e6a4a4]/10 rounded-lg">
                <svg
                  className="w-6 h-6 text-[#e6a4a4]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14l9-5-9-5-9 5 9 5z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Education</h3>
            </div>

            <div className="relative border-l-2 border-dashed border-[#e6a4a4]/40 pl-8 space-y-12">
              {education.map((item, index) => (
                <div key={index} className="relative">
                  {/* Glowing Dot */}
                  <div className="absolute -left-[41px] top-1.5 w-5 h-5 bg-white border-4 border-[#e6a4a4] rounded-full shadow-[0_0_10px_rgba(230,164,164,0.5)]"></div>

                  <div className="bg-white p-7 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group">
                    <span className="text-sm font-bold text-[#e6a4a4] bg-[#e6a4a4]/5 px-3 py-1 rounded-full">
                      {item.year}
                    </span>
                    <h4 className="text-xl font-bold text-gray-900 mt-3 group-hover:text-[#e6a4a4] transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-gray-500 font-medium mb-2">
                      {item.place}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
