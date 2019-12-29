import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import HomePage from "./Components/Pages/Homepages/Homepage.component";

function App() {
  return (
    <div>
        <Route exact path='/' component={HomePage}/>       
    </div>
  );
}

export default App;
