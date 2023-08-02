import ExperienceItem from '../Components/ExperienceItem';

const Experience = () => {
  return (
    <div className="section" id="experience">
      <h1>My Experience</h1>
      <div id="experience-container">
        <ExperienceItem
          company={'MIDL Technology'}
          title={'Software Engineer Intern'}
          technologies={['JavaScript', 'AWS', 'Next.js', 'Python', 'OpenCV']}
          description={[
            'Built mission-critical software that helped expand company from five employees to a fast-growing startup with contracts with several high-profile organizations in need of large-scale surveillance solutions.',
            'Secured private customer data by building full stack authentication/authorization service with fine-grain permissions to component level, two factor authentication, forgot password, and multi identity provider support.',
            'Engineered full stack floor map / satellite map system with support for live viewing of cameras, placing and editing camera markers, live control of facilities, and real-time digital cloning with accurate locations for objects captured on cameras',
            'Designed and created geography-based multi-camera event-querying system, allowing users to find events, objects, etc that on cameras within range of a user-drawn section',
            'Improved user experience and secured data by developing caching that sped page loads by 91% and requests 2x on average',
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
