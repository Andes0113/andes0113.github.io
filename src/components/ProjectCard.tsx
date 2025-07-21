import type { ProjectType } from '@/common/data';
import ProjectStatusIcon from './ProjectStatusIcon';
import ImagePreview from './ImagePreview';
import '@/styles/ImagePreview.css';

export default function ProjectCard({
  title,
  blurb,
  link,
  details,
  status,
  images,
}: ProjectType) {
  const strippedLink = link.substring('https://'.length);
  return (
    <div className="project-card">
      <div className="project-content">
        <a className="link-wrapper" href={link} target="_blank">
          <h3>
            {title.split('').map((char, index) => (
              <span style={{ animationDelay: `${index * 0.05}s` }} key={index}>
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </h3>
          <span className="stripped-link">{strippedLink}</span>
        </a>
        <p className="project-blurb project-text">{blurb}</p>
        <div className="project-details">
          {details.map((detail, idx) => (
            <p className="project-text" key={idx}>
              {detail}
            </p>
          ))}
        </div>
      </div>
      <ImagePreview images={images} />
    </div>
  );
}
