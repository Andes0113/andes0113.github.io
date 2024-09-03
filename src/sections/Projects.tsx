import '@/styles/Projects.css';
import ProjectCard from '@/components/ProjectCard';
import { useEffect } from 'react';
import { projects } from '@/common/data';

export default function Projects() {
  useEffect(() => {
    const titleElement = document.querySelector('.project-card h3');
    if (titleElement) {
      const children = titleElement.children;
      for (let i = 0; i < children.length; i++) {
        const child = children[i] as HTMLElement;
        child.style.animationDelay = `${i * 0.05}s`;
      }
    }
  }, []);

  return (
    <div className="projects">
      {projects.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </div>
  );
}
