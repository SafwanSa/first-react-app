import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Home from './views/Home';
import About from './views/About';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <div className="switch-container">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
