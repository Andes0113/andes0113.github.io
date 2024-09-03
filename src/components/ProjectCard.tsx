import type { ProjectType } from '@/common/data';
import ProjectStatusIcon from './ProjectStatusIcon';
import ImagePreview from './ImagePreview';
import '@/styles/ImagePreview.css';

export default function ProjectCard({
  title,
  blurb,
  link,
  images,
  status,
}: ProjectType) {
  const strippedLink = link.substring('https://'.length);
  return (
    <div className="project-card">
      <div>
        <a className="link-wrapper" href={link} target="_blank">
          <h3>
            {title.split('').map((char, index) => (
              <span key={index}>{char === ' ' ? '\u00A0' : char}</span>
            ))}
          </h3>
          <span className="stripped-link">{strippedLink}</span>
        </a>
        {/* <div>
          {status.map((status) => (
            <ProjectStatusIcon status={status} />
          ))}
        </div> */}
        <p className="project-blurb">{blurb}</p>
      </div>
      <ImagePreview images={images} />
    </div>
  );
}
