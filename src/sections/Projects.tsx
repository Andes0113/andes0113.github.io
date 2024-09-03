import '@/styles/Projects.css';
import ProjectCard from '@/components/ProjectCard';
import { useEffect } from 'react';
import type { ProjectType } from '@/common/data';

import horseback from '../assets/horseback.png';
import IllinoisLogo from '../assets/illinoislogo.png';

const projects: ProjectType[] = [
  {
    title: 'AnkiAlgo',
    status: ['Work in Progress'],
    link: 'https://github.com/Andes0113/anki-algo',
    blurb:
      'A website for practicing algorithms questions using spaced repetition',
    details: [''],
    images: [
      { id: '1', src: horseback.src, alt: 'horseback' },
      { id: '2', src: IllinoisLogo.src, alt: 'horseback' },
      { id: '3', src: horseback.src, alt: 'horseback' },
      { id: '4', src: IllinoisLogo.src, alt: 'horseback' },
    ],
    tech: ['TypeScript', 'Next.js', 'Postgres', 'Docker', 'Java', 'AWS'],
  },
];

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
