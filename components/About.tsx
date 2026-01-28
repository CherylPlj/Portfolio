export default function About() {
  return (
    <section
      id="about"
      className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          <div className="space-y-4 sm:space-y-6">
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm a 4th-year BSIT student at Polytechnic University of the Philippines - 
              Quezon City Campus, skilled in project management, web development, database 
              management, and quality assurance. I'm willing to learn and able to adapt in 
              different environments.
            </p>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Determined and hardworking, with a strong sense of responsibility and work ethic. 
              I have experience leading teams and developing full-stack applications using 
              technologies like C#, Python, Next.js, and MSSQL.
            </p>
            <div className="pt-2 sm:pt-4 space-y-2">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">Education</h3>
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                <strong>Bachelor of Science in Information Technology</strong> (2022 - Present)<br />
                Polytechnic University of the Philippines - Quezon City Campus
              </p>
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                <strong>Science, Technology, Engineering, and Mathematics</strong> (2020 - 2022)<br />
                Batasan Hills National Senior High School | With High Honors
              </p>
            </div>
            <div className="pt-2 sm:pt-4">
              <a
                href="#contact"
                className="inline-block px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm sm:text-base"
              >
                Let's Connect
              </a>
            </div>
          </div>

          <div className="relative mt-8 md:mt-0">
            <div className="bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg p-1">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 sm:p-8">
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-3 h-3 rounded-full bg-green-500 flex-shrink-0"></div>
                    <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                      Available for new projects
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-3 h-3 rounded-full bg-yellow-500 flex-shrink-0"></div>
                    <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                      Open to collaboration
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-3 h-3 rounded-full bg-blue-500 flex-shrink-0"></div>
                    <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                      Always learning
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
