import { useState } from 'react';
import '../styles/Projects.css';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  return (
    <div className="projects">
      <ProjectCard
        onHeaderClick={setSelectedProject}
        title="Project 1"
        body="Project 1"
      />
      {selectedProject && <div>{selectedProject}</div>}
    </div>
  );
}
