import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDC6AUWDjQSEl4CKKAtlAkKZeFro9xaqnA",
    authDomain: "socialmedia101-94.firebaseapp.com",
    databaseURL: "https://socialmedia101-94.firebaseio.com",
    projectId: "socialmedia101-94",
    storageBucket: "socialmedia101-94.appspot.com",
    messagingSenderId: "368922890178",
    appId: "1:368922890178:web:643175c611e7867f9e105b",
    measurementId: "G-51B8SLWKJR"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth,provider};
export default db;