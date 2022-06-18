import * as firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB8hNxux7O8hI57QsvwxaDSiguJImg6zrM",
    authDomain: "clasificados-1873e.firebaseapp.com",
    projectId: "clasificados-1873e",
    storageBucket: "clasificados-1873e.appspot.com",
    messagingSenderId: "687335332355",
    appId: "1:539220817325:web:fbceef7ba3855bbd165d24",
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;
