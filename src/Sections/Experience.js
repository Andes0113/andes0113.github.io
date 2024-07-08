import ExperienceItem from '../Components/ExperienceItem';

const Experience = () => {
  return (
    <div className="section" id="experience">
      <h1>My Experience</h1>
      <div id="experience-container">
        <ExperienceItem
          company={'Wizards of the Coast'}
          title={'Software Engineer Intern'}
          technologies={['Go', 'C#', '.NET']}
          description={[
            'Reduced manual testing time by 80% and enabled continuous delivery by building a test client using C# with automated pipelines to test game services integration in a game development SDK.',
            'Saved hundreds of hours of developer time and enhanced the reliability of in-game transactions by integrating payment processing and code redemption services within the SDK using C# and .NET.',
            'Improved service reliability and maintainability by writing code and unit tests for microservices using Go.',
            'Built and called gRPC endpoints to enable efficient communication between microservices.',
          ]}
        />
        <ExperienceItem
          company={'MIDL Technology'}
          title={'Software Engineer'}
          technologies={['TypeScript', 'AWS', 'Next.js', 'React', 'Go']}
          description={[
            'Developed a full stack web application using TypeScript with Next.js for a fast-growing startup with high-profile clients in need of large-scale surveillance solutions.',
            'Wrote and optimized high-speed REST APIs with complex computation, storing data in MongoDB and PostgreSQL databases, reducing query times by up to 89% on high traffic API endpoints.',
            'Improved scalability by building logging microservice in Python with FastAPI that aggregated and served API call metadata, allowing for identification of underperforming routes and efficiency impacts of new changes.',
            'Secured important contracts by building and optimizing a real-world map feature, accurately and reliably providing real-time streamed data, enhancing the user experience.',
            'Successfully delivered intricate features under tight deadlines, constructing dynamic and responsive interfaces using React to handle real-time data via WebSockets, webhooks, and HTTPS requests.',
          ]}
        />
        <ExperienceItem
          company={'Microsoft'}
          title={'Summer Mentee'}
          technologies={['C#', 'Unity']}
          description={[
            'Won an internal company hackathon by collaborating with senior product managers to develop a prototype for the HoloLens line and a low-code app builder for the PowerApps suite.',
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
