import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';

function App() {
  return (
	<Router>
		<div className="App">
			<Navbar />
			<div className="content">
				<Routes>
					<Route 
						path="/portfolio" 
						element={<Home/>}
					/>
					<Route 
						path="/portfolio/about"
						element={<About/>}
					/>
					<Route
						path="/portfolio/project/:title"
					/>
				</Routes>
			</div>
    	</div>
	</Router>
  );
}

export default App;
