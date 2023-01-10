import ProjectPreview from '../Components/ProjectPreview';
const Projects = () => {
  return (
    <div className="section" id="projects">
      <h1>Projects</h1>
      <div id="project-container">
        <ProjectPreview
          name={'Clubfinity'}
          image={'Clubfinity.png'}
          description={
            'As the Lead Developer for Clubfinity, I lead a development team \
            of over 20 people to build an app that consolidates all platforms \
            for clubs at UF into one app. I build features, lead workshops, \
            lead my own personal team of four, handle deployment, and have led \
            several major endeavors.'
          }
        />
        <ProjectPreview
          name={'VolunTurbo'}
          image={'Volunturbo.png'}
          description={
            'I built a website using React and Django that matches volunteers \
          with nonprofit organizations in their area based on their interests. \
          '
          }
        />
        <ProjectPreview
          name={'Ceptron'}
          image={'Ceptron.png'}
          description={
            "I built a Virtual Assistant ML tool suite with in the style of MacOS's \
            spotlight. With a similar interface, shortcut, and system-wide usability and \
            compatibility. Ceptron provides image generation using DALL-E 2, article \
            summaries, and instruction completion using GPT-3."
          }
        />
        <ProjectPreview
          name={'NYC SuperBNB'}
          image={'SuperBNB.png'}
          description={
            'My final project in Data Structures and Algorithms, where users search Airbnbs in New York City by neighborhood. \
          Read about how I implemented convex shape boundary detection to improve \
          the user experience, and cut query time by 98% by coding data structures from scratch \
          (including a clever combination that resulted in a never-before-implemented \
          data structure).'
          }
        />
      </div>
    </div>
  );
};

export default Projects;
