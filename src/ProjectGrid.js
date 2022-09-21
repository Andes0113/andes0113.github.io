import ProjectPreview from "./ProjectPreview";
const ProjectGrid = ({ projects, title }) => {
	console.log(projects[0].title);
	return (  
		<div className="projects">
			<h2>{title}</h2>
			<div className="project-grid">
				{projects.map((project) => (
					<div key={project.key}>
						<ProjectPreview project={project} />
					</div>
				))}
			</div>

		</div>
	);
}
 
export default ProjectGrid;