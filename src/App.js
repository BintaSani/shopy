import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import {setCurrentUser} from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selector';

class App extends React.Component{

  unsubscribeFromAuth = null;

  componentDidMount(){
    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.props.setCurrentUser({  
            id: snapShot.id,
            ...snapShot.data()
            
          }); 
        });
        
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div >
        <Header />
        <Routes>
          <Route path='/' Component={HomePage}/>
          <Route path='/shop/*' Component={ShopPage}/>
          <Route path='/checkout' Component={CheckoutPage}/>
          <Route exact path='/signin' 
            Component={() => 
            this.props.currentUser ? (
              <Navigate to='/' replace/>
            ) : (
              <SignInAndSignUpPage/>
            )
            }/>
        </Routes>
      </div>
    );
  }
  
}

const mapStateToProps = createStructuredSelector({

  currentUser: selectCurrentUser

});

const mapDispatchToProps = dispatch =>({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
