import * as firebase from "firebase"
import "firebase/firestore"
import store from "./store";

const configOptions = {
    apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
    authDomain: "fir-cookbook-e01da.firebaseapp.com",
    databaseURL: "https://fir-cookbook-e01da.firebaseio.com",
    projectId: "fir-cookbook-e01da",
    storageBucket: process.env.VUE_APP_FIREBASE_BUCKET,
    messagingSenderId: process.env.VUE_APP_FIREBASE_SENDER_ID,
    appId: process.env.VUE_APP_FIREBASE_APP_ID,
    measurementId: process.env.VUE_APP_FIREBASE_MESURE_ID
};

firebase.initializeApp(configOptions);

firebase.auth().onAuthStateChanged(user => {
    store.dispatch("fetchUser", user);
});

export const db = firebase.firestore();

//export default db;



