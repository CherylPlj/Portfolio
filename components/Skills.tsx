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
      title: "Technical Skills",
      skills: [
        "Database Management",
        "Quality Assurance",
        "Data Analytics",
        "Excel",
        "Power BI",
        "UI Design",
      ],
    },
    {
      title: "Soft Skills & Tools",
      skills: [
        "Project Management",
        "Problem-Solving",
        "Team Collaboration",
        "Time Management",
        "Figma",
        "Canva",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
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
