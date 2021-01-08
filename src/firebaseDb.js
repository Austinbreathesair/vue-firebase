import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAMLKyllgN8Wwe-WntdJW_mMLpRZo9bAe0",
  authDomain: "myleave-6d60f.firebaseapp.com",
  databaseURL: "https://myleave-6d60.firebaseio.com",
  projectId: "myleave-6d60f",
  storageBucket: "myleave-6d60f.appspot.com",
  messagingSenderId: "995696005849",
  appId: "1:995696005849:web:145061d95c00ca4c8ca4c8"
}

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
export default db;
