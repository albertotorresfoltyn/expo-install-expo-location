import * as firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB8hNxux7O8hI57QsvwxaDSiguJImg6zrM",
    authDomain: "clasificados-1873e.firebaseapp.com",
    databaseURL: "https://clasificados-1873e.firebaseio.com",
    projectId: "clasificados-1873e",
    storageBucket: "clasificados-1873e.appspot.com",
    messagingSenderId: "687335332355",
    appId: "1:687335332355:web:e4a129ab613b2936264c36",
    measurementId: "G-4QDEP81683"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;
