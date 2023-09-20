import ExperienceItem from '../Components/ExperienceItem';

const Experience = () => {
  return (
    <div className="section" id="experience">
      <h1>My Experience</h1>
      <div id="experience-container">
        <ExperienceItem
          company={'MIDL Technology'}
          title={'Software Engineer Intern'}
          technologies={[
            'JavaScript/TypeScript',
            'AWS',
            'Next.js',
            'Python',
            'Express',
          ]}
          description={[
            'Built full stack mission-critical software in Next.js that helped expand company from five employees to a fast-growing startup with contracts with several high-profile organizations in need of large-scale surveillance solutions.',
            'Built high-speed REST APIs using several languages and frameworks with complex queries across NoSQL (MongoDB) and SQL (PostgreSQL) databases, results of computer vision machine learning models, and distributed hardware systems.',
            'Improved scalability by building logging microservice in Python with FastAPI that aggregated and served API call metadata, allowing for identification of underperforming routes and efficiency impacts of new changes.',
            'Fortified customer data security through the development of a comprehensive full-stack authentication and authorization service, complete with two-factor authentication, fine-grained permissions, and support for identity providers.',
            'Achieved the successful and timely delivery of intricate features under tight deadlines, utilizing React to construct dynamic interfaces that seamlessly handled real-time data via web sockets, webhooks, and REST API requests',
            'Improved user experience by implementing caching mechanisms that sped page loads by 91% and requests 2x on average',
            'Ensured software reliability and efficient by introducing and building comprehensive unit tests and CI/CD pipelines',
          ]}
        />
        <ExperienceItem
          company={'Microsoft'}
          title={'Summer Mentee'}
          technologies={['C#', 'Unity']}
          description={[
            'Collaborated with senior product managers for HoloLens to develop prototype in the HoloLens line alongside a low-code app builder that won “Greatest Impact on Life in the Future” at Microsoft hackathon',
            'Learned professional and technical skills through 1-on-1 and group mentoring',
          ]}
        />
        <ExperienceItem
          company={'The Agency at UF'}
          title={'Full Stack Developer'}
          technologies={['HTML', 'CSS', 'JavaScript']}
          description={[
            'Communicated with marketing agency’s clients to meet their requests and specifications',
            'Reduced website completion time by 40% after addition to team',
          ]}
        />
      </div>
    </div>
  );
};

export default Experience;
