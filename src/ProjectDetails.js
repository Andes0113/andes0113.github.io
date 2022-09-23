const ProjectDetails = ( { link } ) => {
	return (  
		<div className="project">
			{window.location.replace(link)}
		</div>
	);
}
 
export default ProjectDetails;