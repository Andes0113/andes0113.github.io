import { useState } from 'react';
import '../styles/Projects.css';
import ProjectCard from './ProjectCard';

export default function Projects() {
  return (
    <div className="projects">
      <ProjectCard title="Project 1" description="Project 1" />
    </div>
  );
}
