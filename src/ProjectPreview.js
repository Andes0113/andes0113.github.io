import { Link } from "react-router-dom";
const ProjectPreview = ({ project }) => {
	return (  
		<div className="preview" key={project.id}>
			<Link to={`/project/${project.title.split(' ').join('-')}`}>
				<h2>{project.title}</h2>
				<div className="preview-details">{project.description}</div>
			</Link>
		</div>
	);
}
 
export default ProjectPreview;