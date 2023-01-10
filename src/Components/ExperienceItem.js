const ExperienceItem = ({ company, title, technologies, description }) => {
  return (
    <div className="experience-item">
      <div className="experience-header">
        <div>
          <h2>{company}</h2>
          <h3>{title}</h3>
        </div>
        <div className="technologies">
          {technologies.map((technology) => (
            <div className="tech">{technology}</div>
          ))}
        </div>
      </div>
      <div className="experience-description">
        {description.map((item) => (
          <li>{item}</li>
        ))}
      </div>
    </div>
  );
};

export default ExperienceItem;
