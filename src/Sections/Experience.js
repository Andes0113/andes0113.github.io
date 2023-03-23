import ExperienceItem from '../Components/ExperienceItem';

const Experience = () => {
  return (
    <div className="section" id="experience">
      <h1>My Experience</h1>
      <div id="experience-container">
        <ExperienceItem
          company={'MIDL Technology'}
          title={'Software Engineer Intern'}
          technologies={['JavaScript', 'React', 'AWS', 'Python', 'OpenCV']}
          description={[
            'Built mission-critical software that helped expand the company from five employees to a fast-growing startup building security software with contracts with several high-profile organizations',
            'Built alert system using computer-vision to notify users if certain events occur needing attention. Allowed users to chain events and detections to create complex and individual case-specific triggers',
            'Built geography-based multi-camera event-querying system, allowing users to find, events, objects, etc that occurred on cameras within range of a user-drawn section. Uses computer vision to determine where and when events may have occurred',
            'Developed camera viewing pages and integrated other MIDL software in security system dashboard redesign',
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
