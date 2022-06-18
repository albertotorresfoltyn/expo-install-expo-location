import * as firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB8hNxux7O8hI57QsvwxaDSiguJImg6zrM-n6-GUyGcI",
    authDomain: "clasificados-1873e.firebaseapp.com",
    projectId: "react-native-restaurant-finder",
    storageBucket: "react-native-restaurant-finder.appspot.com",
    messagingSenderId: "539220817325",
    appId: "1:539220817325:web:fbceef7ba3855bbd165d24",
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;
