import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

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
export default app;
