import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import Construction from './Pages/Construction';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="portfolio" element={<Navigate to="/" />} />
            <Route path="project">
              <Route path="Clubfinity" element={<Construction />} />
              <Route path="Volunturbo" element={<Construction />} />
              <Route path="Ceptron" element={<Construction />} />
              <Route path="NYC-SuperBNB" element={<Construction />} />
              <Route path="*" element={<NotFound />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
