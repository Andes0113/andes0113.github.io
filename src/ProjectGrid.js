import ProjectPreview from "./ProjectPreview";
const ProjectGrid = ({ projects, title }) => {
	return (  
		<div className="projects">
			<h1>{title}</h1>
			<br />
			<div className="project-grid">
				{projects.map((project) => (
					<ProjectPreview project={project} />
				))}
			</div>

		</div>
	);
}
 
export default ProjectGrid;