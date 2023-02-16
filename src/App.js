import './App.css';
import Navbar from './components/Navbar.js';
import React from 'react';
import Posts from './components/Posts.js';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Posts/>
    </div>
  );
}

export default App;
