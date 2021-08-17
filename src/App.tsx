import React, { useState } from 'react';
import './styles/App.scss'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './components/About';
import Stills from './components/Stills';
import Contact from './components/Contact';

function App() {
  const [aboutPage, setAboutPage] = useState(false)

  return (
  <Router>
      <div className='app'>
        <div className='about'>
          <Link to="/about">About</Link>
        </div>
        <div className='stills'>
        <Link to="/stills">Stills</Link>
        </div>
        <div className='contact'>
        <Link to="/contact">Contact</Link>
        </div>
      </div>
      <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/stills">
            <Stills />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
  </Router>
  );
}

export default App;
