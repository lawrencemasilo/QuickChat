import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


/*Setup of Firebase app and Firebase services */
const firebaseConfig = {
  apiKey: "AIzaSyDfwvLVCB7gUL37yYvb_lF8cSPBw7_YIt8",
  authDomain: "quickchat-706d3.firebaseapp.com",
  projectId: "quickchat-706d3",
  storageBucket: "quickchat-706d3.appspot.com",
  messagingSenderId: "119582055250",
  appId: "1:119582055250:web:67a9218dfa4c34529e788b",
  measurementId: "G-JQGJDTNY4P"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore()
