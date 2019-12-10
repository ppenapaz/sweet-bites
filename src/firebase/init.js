import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAHEIu35cIeaohOaHuwiJaQAnGA2l0_oE8",
    authDomain: "sweet-bytes-cupcakes.firebaseapp.com",
    databaseURL: "https://sweet-bytes-cupcakes.firebaseio.com",
    projectId: "sweet-bytes-cupcakes",
    storageBucket: "sweet-bytes-cupcakes.appspot.com",
    messagingSenderId: "881922420053",
    appId: "1:881922420053:web:c8c5e773688d564c6a93dc"
  };

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore()