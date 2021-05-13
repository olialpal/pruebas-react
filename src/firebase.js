import firebase from 'firebase/app';
import 'firebase/firestore';

  var firebaseConfig = {
    apiKey: "AIzaSyBN-uBdGeZLGh_LQwI05ppIuCOwECCnL5I",
    authDomain: "prueba-react-833ee.firebaseapp.com",
    projectId: "prueba-react-833ee",
    storageBucket: "prueba-react-833ee.appspot.com",
    messagingSenderId: "943248116766",
    appId: "1:943248116766:web:ebf2af635b1c5d49fc320f",
    measurementId: "G-WT2GBHWYMS"
  };
 
  const fb = firebase.initializeApp(firebaseConfig);
  export const db = fb.firestore();

