import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
declare var firebaseApiKey: string;
declare var firebaseAppId: string;

const firebaseConfig = {
    apiKey: firebaseApiKey,
    authDomain: "games-3da50.firebaseapp.com",
    projectId: "games-3da50",
    storageBucket: "games-3da50.appspot.com",
    messagingSenderId: "7657189242",
    appId: firebaseAppId,
    measurementId: "G-D43NLMQ2ME"
};

export const firebaseApp = initializeApp(firebaseConfig)
export const firebaseAnalytics = getAnalytics(firebaseApp)
export const firebaseAuth = getAuth(firebaseApp)
export const firebaseDb = getFirestore(firebaseApp)
