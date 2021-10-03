/**
 * Firebase Data
 * embryo comes with built in firebase database features
 * You Need To Add Your Firsebase App Account Details Here
 */
 import firebase from 'firebase';
 import 'firebase/database';
 import 'firebase/storage'; 
 
 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyAt4AhUmI_dHT1VpGkrL8kB3rqbApUgJNw",
    authDomain: "kiryat-yovel.firebaseapp.com",
    projectId: "kiryat-yovel",
    storageBucket: "kiryat-yovel.appspot.com",
    messagingSenderId: "553687529101",
    appId: "1:553687529101:web:df882624c790c05f4e14c4",
    measurementId: "G-7WF81TZ4VN"
  };
 const app = firebase.initializeApp(config);
 
 // Configure FirebaseUI.
 export const uiConfig = {
   // Popup signin flow rather than redirect flow.
   signInFlow: 'popup',
   // We will display Google and Facebook as auth providers.
   signInOptions: [
     firebase.auth.GoogleAuthProvider.PROVIDER_ID,
     firebase.auth.EmailAuthProvider.PROVIDER_ID
   ],
   callbacks: {
     // Avoid redirects after sign-in.
     signInSuccessWithAuthResult: () => false,
   },
 };
 
 export default firebase;