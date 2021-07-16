import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import usersReducer from './store/usersReducer';
import { Provider } from 'react-redux';
import { getFirebase, reduxReactFirebase } from 'react-redux-firebase';
import firebase from './firebase/config';
import { getFirestore, reduxFirestore } from 'redux-firestore';
import thunk from 'redux-thunk';


const store = createStore(usersReducer, 
  compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    reduxFirestore(firebase),
    reduxReactFirebase(firebase))
  );

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

