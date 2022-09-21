import ProjectGrid from "./ProjectGrid";

const Home = () => {
	const projects = [
		{
			title: "Minesweeper 2",
			description: "Minesweeper with debug and custom size setting",
			technologies: ["C++", "SFML", "OOP"],
			github: "",
			demo: "",
			key: 0
		},
		{
			title: "Minesweeper",
			description: "Minesweeper with debug and custom size setting",
			technologies: ["C++", "SFML", "OOP"],
			github: "",
			demo: "",
			key: 1
		},
		{
			title: "Minesweeper",
			description: "Minesweeper with debug and custom size setting",
			technologies: ["C++", "SFML", "OOP"],
			github: "",
			demo: "",
			key: 2
		},
		{
			title: "Minesweeper",
			description: "Minesweeper with debug and custom size setting",
			technologies: ["C++", "SFML", "OOP"],
			github: "",
			demo: "",
			key: 3
		},
		{
			title: "Minesweeper",
			description: "Minesweeper with debug and custom size setting",
			technologies: ["C++", "SFML", "OOP"],
			github: "",
			demo: "",
			key: 4
		}
	]

	return (  
		<div className="home">
			<ProjectGrid projects={projects} title={"All Projects"} />

		</div>
	);
}
 
export default Home;