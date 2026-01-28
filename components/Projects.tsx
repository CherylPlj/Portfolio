export default function Projects() {
  const projects = [
    {
      title: "Human Resource Management System",
      role: "Full-Stack Developer",
      description:
        "Collaborated with a team to develop a human resource management system for a school using Next.js and Supabase (PostgreSQL) that allows users to manage employee information, recruitment, leave, scheduling, and documents.",
      technologies: ["Next.js", "Supabase", "PostgreSQL", "TypeScript"],
      image: "/api/placeholder/600/400",
      link: "https://hrms-v2-azure.vercel.app",
      github: "https://github.com/CherylPlj/HRMS",
    },
    {
      title: "E-Commerce, POS, and Inventory Integrated System",
      role: "Full-Stack Developer",
      description:
        "Collaborated with a team to develop an integration of an e-commerce, point-of-sale (POS), and inventory management system using ASP.NET Core (C#) and MSSQL that allows customers to browse and buy electronic products, and admins to monitor and manage the systems.",
      technologies: ["ASP.NET Core", "C#", "MSSQL"],
      image: "/api/placeholder/600/400",
      link: "#",
      github: "#",
      documentation: "https://drive.google.com/file/d/1smo62TtAp9bkRI5-gAlJlnrzZoIHcTEY/view",
    },
    {
      title: "Rental Management System",
      role: "Project Manager/Full-Stack Developer",
      description:
        "Led a team and helped develop a rental management system using C# and MSSQL that assists customers in renting units. The RMS helps manage rental properties, tenants, leases, payments, and maintenance requests.",
      technologies: ["C#", "MSSQL"],
      image: "/api/placeholder/600/400",
      link: "#",
      github: "https://github.com/CherylPlj/RMS",
      documentation: "https://drive.google.com/drive/folders/1vwvTVX9wDImHGSRM9F-54Fn5-AstR9VR",
    },
    {
      title: "Income and Expense Management System",
      role: "Project Manager/Full-Stack Developer",
      description:
        "Led a team and helped develop an income and expense management system using Python and MSSQL that allows users to manage their personal income and expenses.",
      technologies: ["Python", "MSSQL"],
      image: "/api/placeholder/600/400",
      link: "#",
      github: "#",
      documentation: "https://drive.google.com/drive/folders/1iAodYoBHLPlZsx7DcC6Xpvp2Nj_OGbUm?usp=sharing",
    },
  ];

  return (
    <section
      id="projects"
      className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4">
            A selection of projects I've worked on recently
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="h-40 sm:h-48 bg-gradient-to-br from-blue-400 to-purple-500 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center px-3 sm:px-4">
                  <span className="text-white text-lg sm:text-xl md:text-2xl font-bold text-center block w-full leading-tight">
                    {project.title}
                  </span>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                {project.role && (
                  <p className="text-xs sm:text-sm text-blue-600 dark:text-blue-400 mb-2 sm:mb-3 font-medium">
                    {project.role}
                  </p>
                )}
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-3 sm:mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 sm:px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {(project.link && project.link !== "#") ||
                (project.github && project.github !== "#") ||
                project.documentation ? (
                  <div className="flex flex-wrap gap-3 sm:gap-4">
                    {project.link && project.link !== "#" && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm sm:text-base text-blue-600 dark:text-blue-400 hover:underline font-semibold"
                      >
                        Live Demo →
                      </a>
                    )}
                    {project.github && project.github !== "#" && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm sm:text-base text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white font-semibold"
                      >
                        GitHub →
                      </a>
                    )}
                    {project.documentation && (
                      <a
                        href={project.documentation}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm sm:text-base text-purple-600 dark:text-purple-400 hover:underline font-semibold"
                      >
                        Documentation →
                      </a>
                    )}
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
