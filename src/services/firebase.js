import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup, 
  signOut,
  // Add these imports so the new functions work:
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-jAlylCBVzA8pkTYtPJ0wfHBMFy5GWOQ",
  authDomain: "react-study-companion.firebaseapp.com",
  projectId: "react-study-companion",
  storageBucket: "react-study-companion.firebasestorage.app",
  messagingSenderId: "528706496960",
  appId: "1:528706496960:web:5e3f821bd3fea3c9ec4025"
};

// Initialize Firebase
let app, auth, db;

try {
  app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  db = getFirestore(app);
} catch (error) {
  console.error("Firebase initialization failed:", error);
}

// Auth Functions

export const signInWithGoogle = async () => {
  if (!auth) throw new Error("Firebase not configured");
  const provider = new GoogleAuthProvider();
  return await signInWithPopup(auth, provider);
};

export const signOutUser = async () => {
  if (!auth) throw new Error("Firebase not configured");
  return await signOut(auth);
};

// --- ADDED FUNCTIONS TO FIX THE ERROR ---

export const loginWithEmail = async (email, password) => {
  if (!auth) throw new Error("Firebase not configured");
  return await signInWithEmailAndPassword(auth, email, password);
};

export const registerWithEmail = async (email, password) => {
  if (!auth) throw new Error("Firebase not configured");
  return await createUserWithEmailAndPassword(auth, email, password);
};

// ----------------------------------------

export { auth, db };