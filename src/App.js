import React from 'react';

import { Landing, About, Experience, Projects } from './pages';
import { Header, Footer } from './components';

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
