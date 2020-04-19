import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
	apiKey: "AIzaSyBlhW517Tq4iZch9g3npL-QE4xiIpAM1Rw",
    authDomain: "liarsdice-4c00d.firebaseapp.com",
    databaseURL: "https://liarsdice-4c00d.firebaseio.com",
    projectId: "liarsdice-4c00d",
    storageBucket: "liarsdice-4c00d.appspot.com",
    messagingSenderId: "474625669665",
    appId: "1:474625669665:web:63ae38d1b6d6b413514160",
    measurementId: "G-6S2W8N5Z0D"
});

const db = firebaseApp.firestore();

export {db};
