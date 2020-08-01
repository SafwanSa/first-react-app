import React from 'react';
import './App.css';
import HelloWorld from './components/HelloWorld.js'
import CounterExample from './components/CounterExample.js'
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';



function App() {
  return (
    <div>
      <Header />
      <HelloWorld name="Safwan" />
      <Footer />
    </div>
  );
}

export default App;
