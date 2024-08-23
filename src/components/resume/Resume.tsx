export const Resume = () => {
  return (
    <div className='text-gray-800'>
      <div className='container mx-auto py-10 px-5 font-serif'>
        <div className='max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden'>
          <div className='p-4 sm:p-6'>
            <div className='flex items-center justify-between'>
              <div>
                <h2 className='text-2xl font-semibold'>Michael E. Banks</h2>
                <p className='text-sm text-gray-600'>
                  Senior Software Engineer
                </p>
              </div>
            </div>
            <hr className='my-4' />
            <div>
              <h3 className='text-lg font-semibold mb-2'>Summary</h3>
              <p className='text-sm leading-relaxed'>
                Curious and dependable Senior Software Engineer with 5+ years of
                experience designing, developing, and deploying complex software
                solutions. Proficient in a variety of programming languages and
                technologies. Proven track record of leading teams and
                delivering high-quality products.
              </p>
            </div>
            <hr className='my-4' />
            <div>
              <h3 className='text-lg font-semibold mb-2'>Experience</h3>
              <div>
                <h4 className='text-md font-semibold'>KEYSYS Consulting</h4>
                <p className='text-sm text-gray-600'>
                  Senior Software Engineer (Full Stack) | October 2021 - Present
                </p>
                <ul className='list-disc list-inside text-sm'>
                  <li>
                    Migrated KEYSYS Core from IdentityServer4 to Firebase Auth
                  </li>
                  <li>
                    Published a React component library as an internal NPM
                    package
                  </li>
                  <li>
                    Established patterns for KEYSYS Core frontend architecture
                    using React Query and was named Technical Lead of that
                    project in March 2024
                  </li>
                  <li>
                    Promoted to Team Lead in February 2024 of a team developing
                    3 different clients’ projects
                  </li>
                </ul>
              </div>
              <div className='mt-4'>
                <h4 className='text-md font-semibold'>2B Solutions, Inc</h4>
                <p className='text-sm text-gray-600'>
                  Software Developer (Full Stack) | May 2019 - October 2021
                </p>
                <ul className='list-disc list-inside text-sm'>
                  <li>
                    Developed Xamarin.Forms mobile applications for barcode
                    scanning devices
                  </li>
                  <li>
                    Developed an Asp.Net Web API with Entity Framework and SQL
                    database
                  </li>
                  <li>
                    Supplemented the development team of a local advertising
                    agency during a staff transition
                  </li>
                </ul>
              </div>
            </div>
            <hr className='my-4' />
            <div>
              <h3 className='text-lg font-semibold mb-2'>Projects</h3>
              <div>
                <h4 className='text-md font-semibold'>Optum Now</h4>
                <a
                  href='now.optum.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='font-medium text-blue-600 dark:text-blue-500 hover:underline'
                >
                  now.optum.com
                </a>
                <p className='text-sm'>
                  A public facing website to which I made significant
                  contributions while at KEYSYS. My role involved rendering
                  articles from data provided by one of the client’s many
                  internal APIs, the mobile hamburger menu which is powered by
                  dynamic content pulled from a CMS, and many other parts of the
                  application.
                </p>
              </div>
              <div className='mt-4'>
                <h4 className='text-md font-semibold'>michaelebanks.com</h4>
                <a
                  href='https://github.com/mbanks94/michaelebanks.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='font-medium text-blue-600 dark:text-blue-500 hover:underline'
                >
                  github.com/mbanks94/michaelebanks.com
                </a>
                <p className='text-sm'>
                  My personal website, built with Next.js and Tailwind CSS. I
                  learned how to integrate with the Github API and how to deploy
                  a Next.js app as a static export to Cloudflare.
                </p>
              </div>
            </div>
            <hr className='my-4' />
            <div>
              <h3 className='text-lg font-semibold mb-2'>Skills</h3>
              <ul className='list-disc list-inside text-sm'>
                <li>Programming Languages: JavaScript, TypeScript, C#</li>
                <li>
                  Frameworks & Libraries: React, Next.js, React Query, Tailwind
                  CSS, Asp.Net Core, Entity Framework Core
                </li>
                <li>Databases: PostgreSQL</li>
                <li>Agile Methodologies: Scrum</li>
                <li>Other Tools: Docker, Git</li>
              </ul>
            </div>
            <hr className='my-4' />
            <div>
              <h3 className='text-lg font-semibold mb-2'>Education</h3>
              <div>
                <h4 className='text-md font-semibold'>Innovate Birmingham</h4>
                <p className='text-sm text-gray-600'>
                  Birmingham, AL | January 2019 - May 2019
                </p>
                <p className='text-sm'>Certificate in Web Development</p>
                <ul className='list-disc list-inside text-sm'>
                  <li>
                    Learned the basics of web development: HTML, CSS,
                    JavaScript, and MySQL
                  </li>
                  <li>
                    Introduced to popular libraries and frameworks: Typescript,
                    React, Node.js, Express, and React Native
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
