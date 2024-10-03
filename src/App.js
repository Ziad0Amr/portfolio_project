
import './App.css';
import Navbar from './Components/Navbar';
import {Routes , Route} from "react-router-dom"
import Home from './Pages/Home';
import Project from './Pages/Projects';
import About from './Pages/About';
import Contact from './Pages/Contact';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route  path='/portfolio_project/' element={<Home />} />
        <Route  path='/portfolio_project/project' element={<Project />} />
        <Route  path='/portfolio_project/about' element={<About />} />
        <Route  path='/portfolio_project/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
