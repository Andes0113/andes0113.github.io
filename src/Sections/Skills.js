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
            <h2>Backend</h2>
            <div className="skill-list">
              <div className="skill-item">Python</div>
              <div className="skill-item">TypeScript</div>
              <div className="skill-item">Go</div>
              <div className="skill-item">C++</div>
              <div className="skill-item">Django</div>
              <div className="skill-item">Next.js</div>
            </div>
          </div>
          <div className="skill-section">
            <h2>Databases</h2>
            <div className="skill-list">
              <div className="skill-item">NoSQL {'(MongoDB, Firebase)'}</div>
              <div className="skill-item">SQL {'(PostgreSQL, Oracle)'}</div>
            </div>
          </div>
          <div className="skill-section">
            <h2>Frontend</h2>
            <div className="skill-list">
              <div className="skill-item">JavaScript/TypeScript</div>
              <div className="skill-item">React</div>
              <div className="skill-item">HTML/CSS</div>
              <div className="skill-item">R</div>
              <div className="skill-item">Svelte</div>
            </div>
          </div>
          <div className="skill-section">
            <h2>Tools</h2>
            <div className="skill-list">
              <div className="skill-item">AWS</div>
              <div className="skill-item">Docker</div>
              <div className="skill-item">Git</div>
              <div className="skill-item">Unix</div>
              <div className="skill-item">MS Azure</div>
              <div className="skill-item">Plenty more...</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
