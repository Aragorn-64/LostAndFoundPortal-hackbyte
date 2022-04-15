
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDYot47uSd9zOQM_AImA0p0sLWYBUGtMvU",
  authDomain: "lost-and-found-portal-a82d6.firebaseapp.com",
  projectId: "lost-and-found-portal-a82d6",
  storageBucket: "lost-and-found-portal-a82d6.appspot.com",
  messagingSenderId: "100198826649",
  appId: "1:100198826649:web:4bd9b1ef5faf71f315ae08",
  measurementId: "G-16DGMHJ73Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore = getFirestore(app);
