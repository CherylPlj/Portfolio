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
    },
    {
      title: "Hotel Management System",
      role: "Project Manager/Full-Stack Developer",
      description:
        "Led a team and helped develop a hotel management system using C# and MSSQL that assists customers in booking hotel units.",
      technologies: ["C#", "MSSQL"],
      image: "/api/placeholder/600/400",
      link: "#",
      github: "#",
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
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-white dark:bg-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A selection of projects I've worked on recently
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center px-4">
                  <span className="text-white text-2xl font-bold text-center block w-full">
                    {project.title}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                {project.role && (
                  <p className="text-sm text-blue-600 dark:text-blue-400 mb-3 font-medium">
                    {project.role}
                  </p>
                )}
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {(project.link && project.link !== "#") ||
                (project.github && project.github !== "#") ? (
                  <div className="flex gap-4">
                    {project.link && project.link !== "#" && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 hover:underline font-semibold"
                      >
                        Live Demo →
                      </a>
                    )}
                    {project.github && project.github !== "#" && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white font-semibold"
                      >
                        GitHub →
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
