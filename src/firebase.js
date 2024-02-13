
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyAJdTfu5UNkQ4RQP7DWP49La3ng6azvzVY",
  authDomain: "medanon-123.firebaseapp.com",
  projectId: "medanon-123",
  storageBucket: "medanon-123.appspot.com",
  messagingSenderId: "983409360146",
  appId: "1:983409360146:web:7064300b53f31a905dc7cb",
  measurementId: "G-0ZMF0WHSWQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);