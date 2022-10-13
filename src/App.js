import React from 'react';
import Landing from './components/Landing/Landing';
import About  from './components/About/About';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Header from './components/Header';
import Footer from './components/Footer';


import './App.css';
import './scss/styles.scss';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className='App'>
      <Header />
      <Landing />
      <About />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
