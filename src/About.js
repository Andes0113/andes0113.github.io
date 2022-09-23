const About = () => {
	return (  
		<div className="about">
			<h1>About Me</h1>
			<div className="aboutBody">
				<div className="aboutLinks">
					<h3>Important Links</h3>
					<div className="socialLink">
						<img height="35px" src={require("./images/Resume.png")}></img>
						<a href={require("./resume/Alex Rowe Resume.pdf")} target="_blank">Resume</a>
					</div>
					<div className="socialLink">
						<img height="35px" src={require("./images/Github.png")}></img>
						<a href="https://github.com/andes0113">Github</a>
					</div>
					<div className="socialLink">
						<img height="35px" src={require("./images/LinkedIn.png")}></img>
						<a href="https://www.linkedin.com/in/alex-rowe-code/">LinkedIn</a>
					</div>
				</div>
				{/* <div className="aboutText">
				</div> */}
			</div>
		</div>
	);
}
 
export default About;