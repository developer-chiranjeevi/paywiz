import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";




const firebaseApp = initializeApp({
    apiKey: "AIzaSyBes17bZ6YqeGzI9KzNVuSUxz-g2y_qGMU",
    authDomain: "paywiz-a1c63.firebaseapp.com",
    projectId: "paywiz-a1c63",
    storageBucket: "paywiz-a1c63.appspot.com",
    messagingSenderId: "719424354832",
    appId: "1:719424354832:web:7f92d82e7e22ad1ce8a895"
});


const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);


export {auth, db};
