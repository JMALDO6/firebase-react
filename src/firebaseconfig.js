import firebase from 'firebase';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCt8Jkb4A9V2lWf__Mk1uDIQW6oN9ytzGg",
    authDomain: "test-react-e7d91.firebaseapp.com",
    projectId: "test-react-e7d91",
    storageBucket: "test-react-e7d91.appspot.com",
    messagingSenderId: "896688390674",
    appId: "1:896688390674:web:f89a3e5b23dba4ec5e4ecb",
    measurementId: "G-2NWSRLS2ET"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  const auth = fire.auth()

  export {auth}