import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Home from './components/Home/Home';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Blog from './components/Blog/Blog';
import Navbar from './components/Navbar';

function App() {

  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/blog' element={<Blog />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
