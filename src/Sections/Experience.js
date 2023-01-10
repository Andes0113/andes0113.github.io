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
            'Built alert system using computer-vision to notify users if certain events occur needing attention',
            'Expanded product offerings by using the MERN stack to develop parking payment platform for security service',
            'Developed camera viewing pages and integrated other MIDL software in security system dashboard redesign',
          ]}
        />
        <ExperienceItem
          company={'Introduction to Software Engineering'}
          title={'Teaching Assistant'}
          technologies={[]}
          description={[
            'Teach students about common software engineering practices like Agile, Scrum, system architecture, testing, quality management, security, code analysis, and more.',
            'Handle conflicts between students working in final group project.',
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
