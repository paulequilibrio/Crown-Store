import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import HomePage from "./Components/Pages/Homepages/Homepage.component";
import ShopPage from './Components/Pages/Homepages/Shop/Shop.component';
import Header from './Components/Header/Header.component';

function App() {
  return (
    <div>
    <Header/>
    <Switch>
       <Route exact path='/' component={HomePage}/>
       <Route path='/shop' component={ShopPage}/> 
    </Switch>
 
    </div>
  );
}

export default App;
