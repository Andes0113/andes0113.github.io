import '@/styles/Projects.css';
import ProjectCard from '@/components/ProjectCard';
import type { ProjectType } from '@/common/data';

import AnkiAlgoLogo from '../assets/projects/ankialgo.png';
import CeptronLogo from '../assets/projects/ceptron.png';
import CeptronComplete from '@/assets/projects/ceptron/complete.png';
import CeptronOpened from '@/assets/projects/ceptron/opened.png';
import RembrandtLogo from '@/assets/projects/rembrandt.png';
import RembrandtHome from '@/assets/projects/rembrandt/rembrandt home.jpg';
import Polaroid from '@/assets/projects/rembrandt/polaroid.png';
import DalleVsRembrandt from '@/assets/projects/rembrandt/dalle vs rembrandt.jpg';

import ClubfinityLogo from '@/assets/projects/clubfinity/ClubfinityLogo.png';

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
    images: [{ id: '1', src: AnkiAlgoLogo.src, alt: 'AnkiAlgo Logo' }],
    tech: ['TypeScript', 'Next.js', 'Postgres', 'Docker', 'Java', 'AWS'],
  },
  {
    title: 'Rembrandt',
    status: ['Completed', 'Shelved'],
    link: 'https://devpost.com/software/rembrandt',
    blurb: `Website for generating images in the style of a brand, given example images`,
    details: [
      'Rembrandt uses GPT Vision to analyze a set of images uploaded by a user for key branding aspects such as color scheme, general themes, and items.',
      `Users can then input prompts for images, which Ceptron then uses alongside their themes via prompt engineering to generate images in the brand's style.`,
      'Rembrandt is built in React and uses AWS Lambda for its backend.',
    ],
    images: [
      { id: '1', src: RembrandtLogo.src, alt: 'Rembrandt Logo' },
      {
        id: '2',
        src: RembrandtHome.src,
        alt: 'The home page for Rembrandt',
      },
      {
        id: '3',
        src: Polaroid.src,
        alt: 'A comparison of Dall-E and Rembrandt results for Polaroid',
      },
      {
        id: '4',
        src: DalleVsRembrandt.src,
        alt: `A comparison of DallE and Rembrandt results for TikTok`,
      },
    ],
    tech: [],
  },
  {
    title: 'Ceptron',
    status: ['Completed', 'Shelved'],
    link: 'https://devpost.com/software/ceptron',
    blurb: `An AI assistant tool suite, in the style of MacOS's spotlight`,
    details: [
      'I was making GPT wrappers before it was cool. 😎',
      'Ceptron provides an easy-to-use interface that brings all the power of AI to your fingertips.',
      'At the time of building, Ceptron used GPT-3 for text completion and self-hosted Stable Diffusion for image generation.',
      'This project was built for HackGT 9 in 2022. Special shoutout to my teammates and especially Jim Su, who helped me break \
      through to a whole new understanding of the process of building software.',
    ],
    images: [
      { id: '1', src: CeptronLogo.src, alt: 'Ceptron Logo' },
      {
        id: '2',
        src: CeptronOpened.src,
        alt: 'Ceptron, ready to be used',
      },
      {
        id: '3',
        src: CeptronComplete.src,
        alt: `Ceptron's "complete" command`,
      },
    ],
    tech: [],
  },
  {
    title: 'Clubfinity',
    status: ['Shelved'],
    link: 'https://gitlab.com/ufsec/clubfinity',
    blurb: `An app for clubs to coordinate, collaborate, and keep their members in the loop.`,
    details: [
      'As the Lead Developer, I led 5 teams totaling 23 people developing a full stack mobile app for clubs built using React Native and Node.js',
      `I developed features, fixed bugs, conducted code reviews, and implemented industry practices to mentor students`,
      'Finally, I managed deployment and led a closed beta with clubs around campus.',
    ],
    images: [{ id: '1', src: ClubfinityLogo.src, alt: 'Clubfinity Logo' }],
    tech: [],
  },
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
