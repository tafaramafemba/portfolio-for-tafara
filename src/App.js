import Home from './components/home';
import Sidebar from './components/sidebar';
import About from './components/about';
import Projects from './components/projects';
import Contact from './components/contact';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import './App.css';


function App() {
  return (
<BrowserRouter>
        <div className="App">
          <Sidebar />
          <div className='back'>
          <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />}/>
          <Route path="/contact" element={<Contact />} />
          </Routes>
          </div>
        </div>
      </BrowserRouter>
  );
}

export default App;
