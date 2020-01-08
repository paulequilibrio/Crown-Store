import React, {Component} from 'react';
import './App.css';
import {Route, Switch, Redirect} from 'react-router-dom';
import HomePage from "./Components/Pages/Homepages/Homepage.component";
import ShopPage from './Components/Pages/Homepages/Shop/Shop.component';
import SignInAndSignUp from './Components/Pages/Homepages/Sign-in and Sign-up/Sign-in and Sign-up.component';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import Header from './Components/Header/Header.component';
import { auth, createUserProfileDocument } from './Firebase/firebase.utils';

class App extends Component {
    unSubscribeFromAuth = null;

    componentDidMount() {

      const { setCurrentUser } = this.props;

      this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth =>  {
        
        if(userAuth) {
          const userRef = await createUserProfileDocument(userAuth);

          userRef.onSnapshot(snapShot => {
            setCurrentUser({
                id: snapShot.id,
                ...snapShot.data()
            })
          });
        }
        setCurrentUser(userAuth);
      });
    }

    componentWillUnmount() {
      this.unSubscribeFromAuth();
    }

  render() {
      return (
    <div>
    <Header/>
    <Switch>
       <Route exact path='/' component={HomePage}/>
       <Route path='/shop'   component={ShopPage}/> 
       <Route exact path='/sign' render={() => this.props.currentUser ? (<Redirect to='/'/>) : (<SignInAndSignUp/>)} />
    </Switch>
    </div>
  );
  }
}

const mapStateToProps = ({user}) => ({
  currentUser: user.setCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
