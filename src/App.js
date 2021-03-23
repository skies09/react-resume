import React from 'react';
import './App.css';
import {
  BrowserRouter as Router, Switch,
  Route,
} from "react-router-dom";
// import Navbar from './components/Navbar';
import Home from './contents/Home';
import About from './contents/About';
import Education from './contents/Education';
import Skills from './contents/Skills';
import Contact from './contents/Contact';
import Navbar from './components/SideNav/Navbar';



function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/education">
              <Education />
            </Route>
            <Route path="/skills">
              <Skills />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </div>
      </Router>
    </>

  );
}

export default App;
