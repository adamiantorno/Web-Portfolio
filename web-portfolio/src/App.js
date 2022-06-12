import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Blog from './components/Blog/Blog';
import Header from './components/Header';
import Footer from './components/Footer';
import Iconbar from './components/Iconbar';


import './App.css';
import './scss/styles.scss';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <div className='App'>
        {/* <Header /> */}
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/blog' element={<Blog />} />
        </Routes>
        <Iconbar />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
