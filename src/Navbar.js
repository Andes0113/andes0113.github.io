import { Link } from "react-router-dom";

const Navbar = () => {
	return (  
		<nav className="navbar">
			<h1>Alex Rowe Portfolio</h1>
			<div className="links">
				<Link to="/portfolio">Home</Link>
				<Link to="/portfolio/about">About</Link>
			</div>
		</nav>
	);
}
 
export default Navbar;