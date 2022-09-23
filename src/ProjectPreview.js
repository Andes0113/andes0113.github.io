import ProjectDetails from "./ProjectDetails";

const ProjectPreview = ({ project }) => {
	return (  
		<a className="preview" href={project.link} key={project.id}><h2 style={{backgroundColor: "#F9F6F2"}}>{project.title}</h2>
			{project.thumbnail && <img height="250px" src={require(`./images/${project.thumbnail}.png`)}></img>}
			<div className="technologies" style={{backgroundColor: "#FFF"}}>
				{project.technologies.map((tech) => (
					<div className="technology">
						{tech}
					</div>
				))}
			</div>
			<div className="preview-details">{project.description}</div>
		</a>
	);
}
 
export default ProjectPreview;