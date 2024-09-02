import { useEffect } from 'react';

interface CardProps {
  title: string;
  description: string;
}

export default function ProjectCard({ title, description }: CardProps) {
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
    <div className="project-card">
      <h3>
        {title.split('').map((char, index) => (
          <span key={index}>{char === ' ' ? '\u00A0' : char}</span>
        ))}
      </h3>
      <span></span>
      <p>{description}</p>
    </div>
  );
}
