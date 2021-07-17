import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyB3XF4Bx2ITSN71w9777rpUArbMM7RuQts",
    authDomain: "userapp01-9bcc8.firebaseapp.com",
    projectId: "userapp01-9bcc8",
    storageBucket: "userapp01-9bcc8.appspot.com",
    messagingSenderId: "16268133500",
    appId: "1:16268133500:web:274963e864d4fd5b58b5f9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;