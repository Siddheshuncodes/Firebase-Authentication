
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyCqRmMUCNPjdQKYa_2yYlUJ0FfNHrksopE",
  authDomain: "react-authentication-450cf.firebaseapp.com",
  projectId: "react-authentication-450cf",
  storageBucket: "react-authentication-450cf.appspot.com",
  messagingSenderId: "1079569440971",
  appId: "1:1079569440971:web:412adc3d380c968b43fb4e",
  measurementId: "G-MKQ0FKYTNQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;