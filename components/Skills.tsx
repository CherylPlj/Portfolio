export default function Skills() {
  const skillCategories = [
    {
      title: "Web Development",
      skills: [
        "C#",
        "Python",
        "Next.js",
        "ASP.NET Core",
        "MSSQL",
        "PostgreSQL",
      ],
    },
    {
      title: "Technical Skills & Tools",
      skills: [
        "Database Management",
        "Quality Assurance",
        "Data Analytics",
        "Excel",
        "Power BI",
        "UI Design",
        "Figma",
        "Canva",
      ],
    },
    {
      title: "Soft Skills",
      skills: [
        "Project Management",
        "Problem-Solving",
        "Detail-Oriented",
        "Team Collaboration",
        "Time Management",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg p-5 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 text-center">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-blue-800 dark:text-blue-200 rounded-full text-xs sm:text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
