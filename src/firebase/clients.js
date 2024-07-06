import { initializeApp } from "firebase/app";
import { getFirestore } from "firestore/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyA-fL_ppJSjDKVQCb6_x-BIQCCz3KLfQ2Y",
  authDomain: "ecommercereact-eacea.firebaseapp.com",
  projectId: "ecommercereact-eacea",
  storageBucket: "ecommercereact-eacea.appspot.com",
  messagingSenderId: "788873085943",
  appId: "1:788873085943:web:58f02ec87b6308adfde4f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)