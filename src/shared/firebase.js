import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Authentication
import { getFirestore } from "firebase/firestore"; // Firestore
import { getStorage } from "firebase/storage"; // Storage

const firebaseConfig = {
  apiKey: "AIzaSyCeeMzaEpHe4TlYr08ZFE1ozdemvf5_ThQ",
  authDomain: "sparta-react-511ce.firebaseapp.com",
  projectId: "sparta-react-511ce",
  storageBucket: "sparta-react-511ce.appspot.com",
  messagingSenderId: "660957086507",
  appId: "1:660957086507:web:b6d2bbfca86a804e70fb6e",
  measurementId: "G-M62S0YZ70L",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
