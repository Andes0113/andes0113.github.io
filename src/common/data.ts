import {
  SiTypescript,
  SiReact,
  SiAstro,
  SiGo,
  SiDocker,
  SiPython,
  SiKubernetes,
  SiPostgresql,
  SiNextdotjs,
  SiApachecassandra,
  SiCsharp,
  SiTailwindcss,
  SiMongodb,
  SiPytorch,
  SiSpring,
  SiDotnet,
} from 'react-icons/si';
import { DiRedis } from 'react-icons/di';
import { FaJava } from 'react-icons/fa';
import { FaAws } from 'react-icons/fa6';
import type { IconType } from 'react-icons';

export type SkillType = {
  name: string;
  Icon: IconType;
  type: string;
  color: string;
};

export const skills: SkillType[] = [
  { name: 'Go', Icon: SiGo, type: 'Languages', color: '#53ACD4' },
  {
    name: 'TypeScript',
    Icon: SiTypescript,
    type: 'Languages',
    color: '#3178C6',
  },
  { name: 'Java', Icon: FaJava, type: 'Languages', color: '#F7931A' },
  { name: 'Python', Icon: SiPython, type: 'Languages', color: '#FFD43B' },
  { name: 'C#', Icon: SiCsharp, type: 'Languages', color: '#9447FF' },
  { name: 'Next.js', Icon: SiNextdotjs, type: 'Frameworks', color: '#B8B7B7' },
  {
    name: 'Spring',
    Icon: SiSpring,
    type: 'Frameworks',
    color: '#6DB33D',
  },
  { name: 'PyTorch', Icon: SiPytorch, type: 'Frameworks', color: '#FF4F00' },
  { name: '.NET', Icon: SiDotnet, type: 'Frameworks', color: '#512BD4' },
  { name: 'Postgres', Icon: SiPostgresql, type: 'Databases', color: '#336791' },
  { name: 'Redis', Icon: DiRedis, type: 'Databases', color: '#c5302a' },
  {
    name: 'Cassandra',
    Icon: SiApachecassandra,
    type: 'Databases',
    color: '#C6E6F9',
  },
  { name: 'MongoDB', Icon: SiMongodb, type: 'Databases', color: '#4DB33D' },
  { name: 'React', Icon: SiReact, type: 'Frontend', color: '#61DAFB' },
  { name: 'Tailwind', Icon: SiTailwindcss, type: 'Frontend', color: '#38BDF8' },
  { name: 'Astro', Icon: SiAstro, type: 'Frontend', color: '#f35e14' },
  { name: 'AWS', Icon: FaAws, type: 'Deployment', color: '#FF9900' },
  { name: 'Docker', Icon: SiDocker, type: 'Deployment', color: '#2496ED' },
  {
    name: 'Kubernetes',
    Icon: SiKubernetes,
    type: 'Deployment',
    color: '#326CE5',
  },
];

export type ProjectStatus =
  | 'Deployed'
  | 'Completed'
  | 'Work in Progress'
  | 'Shelved';

export type ProjectType = {
  title: string;
  link: string;
  blurb: string;
  details: string[];
  images: RichImage[];
  tech: string[];
  status: ProjectStatus[];
};

export type RichImage = {
  id: string;
  src: string;
  alt: string;
};
