import type { ProjectType } from '@/common/data';
import horseback from '@/assets/horseback.png';

export default function ProjectCard({ title, blurb, link }: ProjectType) {
  const strippedLink = link.substring('https://'.length);
  return (
    <div className="project-card">
      <div>
        <a className="link-wrapper" href={link} target="_blank">
          <h3>
            {title.split('').map((char, index) => (
              <span>{char === ' ' ? '\u00A0' : char}</span>
            ))}
          </h3>
          <span className="stripped-link">{strippedLink}</span>
        </a>
        <p className="project-blurb">{blurb}</p>
      </div>
      <img src={horseback.src} />
    </div>
  );
}
