//Import firebase!
import firebase from 'firebase/app';
import 'firebase/database';

const config = { 
  apiKey: "Your apiKey",
  authDomain: "Your authDomain",
  databaseURL: "Your databaseURL",
  projectId: "Your projectID",
  storageBucket: "Your storageBucket",
  meshsagingSenderId: "Your meshasginSenderID",
  appId: "Your appID",
  measurementId: "Your G-measurementId"
}

firebase.initializeApp(config);

function getFirebaseRef(refPath) {
    return firebase.database().ref(refPath);
  }
  
  export default {
    getFirebaseRef: getFirebaseRef
  };