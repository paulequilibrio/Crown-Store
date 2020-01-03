import React, {Component} from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import HomePage from "./Components/Pages/Homepages/Homepage.component";
import ShopPage from './Components/Pages/Homepages/Shop/Shop.component';
import SignIn from './Components/Sign-in/Sign-in';
import Header from './Components/Header/Header.component';
import { auth } from './Firebase/firebase.utils';

class App extends Component {
    constructor() {
      super();
      this.state = {
        currentUser : null
      }
    }

    unSubscribeFromAuth = null;

    componentDidMount() {
      this.unSubscribeFromAuth = auth.onAuthStateChanged(user =>  {
        this.setState({currentUser: user})
      })
    }

    componentWillUnmount() {
      this.unSubscribeFromAuth();
    }

  render() {
      return (
    <div>
    <Header currentUser={this.state.currentUser}/>
    <Switch>
       <Route exact path='/' component={HomePage}/>
       <Route path='/shop'   component={ShopPage}/> 
       <Route path='/sign'   component={SignIn}/>
    </Switch>
    </div>
  );
  }

}

export default App;
