const About = () => {
	return (  
		<div className="about">
			<h1>About Me</h1>
			<div className="aboutBody">
				<div className="aboutLinks">
					<h3>Important Links</h3>
					<div className="socialLink">
						<img src={require("./images/Resume.png")}/>
						<a href={require("./resume/Alex Rowe Resume.pdf")} target="_blank">Resume</a>
					</div>
					<div className="socialLink">
						<img src={require("./images/Github.png")}/>
						<a href="https://github.com/andes0113">Github</a>
					</div>
					<div className="socialLink">
						<img src={require("./images/LinkedIn.png")}/>
						<a href="https://www.linkedin.com/in/alex-rowe-code/">LinkedIn</a>
					</div>
				</div>
				<div className="contactMe">
					<h3>Contact Me</h3>
					<div className="socialLink">
						<img src={require("./images/Email.png")}/>
						<a>a.alexrowe@gmail.com</a>
					</div>
					<div className="socialLink">
						<img src={require("./images/Email.png")}/>
						<a>af.rowe@ufl.edu</a>
					</div>
				</div>
			</div>
		</div>
	);
}
 
export default About;