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
    details: [
      `I'm building AnkiAlgo to provide a streamlined and adaptive experience for 
      professionals to prepare for technical interviews.`,

      `AnkiAlgo uses a combination of an ELO system and user performance tracking
      to recommend questions to address a user's weaknesses at times designed to 
      cement understanding of question concepts and patterns.`,

      `I use the similiarity between vector embeddings of each question's optimal 
      solution to provide fine-grained comparisons of question strategies.`,
    ],
    images: [
      { id: '1', src: horseback.src, alt: 'horseback' },
      { id: '2', src: IllinoisLogo.src, alt: 'horseback' },
      { id: '3', src: horseback.src, alt: 'horseback' },
      { id: '4', src: IllinoisLogo.src, alt: 'horseback' },
      { id: '5', src: IllinoisLogo.src, alt: 'horseback' },
    ],
    tech: ['TypeScript', 'Next.js', 'Postgres', 'Docker', 'Java', 'AWS'],
  },
  {
    title: 'Ceptron',
    status: ['Completed', 'Shelved'],
    link: 'https://github.com/yimothysu/ceptron',
    blurb: `An AI assistant tool suite, in the style of MacOS's spotlight`,
    details: ['I was making GPT wrappers before it was cool. 😎'],
    images: [{ id: '1', src: horseback.src, alt: 'horseback'}],
    tech: [],
  }
];

export default function Projects() {
  return (
    <div className="projects">
      {projects.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </div>
  );
}
