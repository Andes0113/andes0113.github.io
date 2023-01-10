const Skills = () => {
  return (
    <div className="section" id="skills">
      <h1>My Skills</h1>
      <div id="skills-body">
        <p className="description">
          Through my classes, professional experience, and personal studies, I
          have gained experience with a variety of languages, frameworks, and
          tools that I have spent enough time with to consider myself proficient
          at a professional level.
        </p>
        <div id="skills-list">
          <div className="skill-section">
            <h2>Programming Languages</h2>
            <div className="skill-list">
              <li>JavaScript</li>
              <li>Python</li>
              <li>C++</li>
              <li>C#</li>
              <li>R</li>
            </div>
          </div>
          <div className="skill-section">
            <h2>Frameworks</h2>
            <div className="skill-list">
              <li>React</li>
              <li>Django</li>
              <li>Express</li>
              <li>Node</li>
              <li>scikit-learn</li>
              <li>Unity</li>
            </div>
          </div>
          <div className="skill-section">
            <h2>Tools</h2>
            <div className="skill-list">
              <li>AWS</li>
              <li>Docker</li>
              <li>Git</li>
              <li>Unix</li>
              <li>MS Azure</li>
              <li>Plenty more...</li>
            </div>
          </div>
          <div className="skill-section">
            <h2>Databases</h2>
            <div className="skill-list">
              <li>NoSQL {'(MongoDB, Firebase)'}</li>
              <li>SQL {'(PostgreSQL, MySQL)'}</li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
