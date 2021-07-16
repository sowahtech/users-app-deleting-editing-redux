import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAiHNRGBQOI3HVjKOpA0GgcSFsMTx4qN0A",
    authDomain: "userapp-745c2.firebaseapp.com",
    databaseURL: "https://userapp-745c2.firebaseio.com",
    projectId: "userapp-745c2",
    storageBucket: "userapp-745c2.appspot.com",
    messagingSenderId: "253629374679",
    appId: "1:253629374679:web:0793c2baf103c674861092"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;