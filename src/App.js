import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header.component';
import Checkout from './Components/Pages/Checkout/Checkout.component';
import HomePage from "./Components/Pages/Homepages/Homepage.component";
import ShopPage from './Components/Pages/Homepages/Shop/Shop.component';
import SignInAndSignUp from './Components/Pages/Homepages/Sign-in and Sign-up/Sign-in and Sign-up.component';
import { addCollectionAndDocuments, auth, createUserProfileDocument } from './Firebase/firebase.utils';
import { selectCollectionsForPreview } from './redux/shop/shop.selector';
import { setCurrentUser } from './redux/user/user.actions';

import { selectCurrentUser } from './redux/user/user.selectors'
import { createStructuredSelector } from 'reselect'

class App extends Component {
    unSubscribeFromAuth = null;

    componentDidMount() {

      const { setCurrentUser, collectionsArray } = this.props;

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
        addCollectionAndDocuments('collections', collectionsArray.map(({title, items}) => ({title, items})));
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
       <Route path='/shop' component={ShopPage}/>
       <Route exact path='/checkout' component={Checkout}/>
       <Route exact path='/sign' render={() => this.props.currentUser ? (<Redirect to='/'/>) : (<SignInAndSignUp/>)} />
    </Switch>
    </div>
  );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collectionsArray: selectCollectionsForPreview
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
