import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, updateProfile, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";
import { getFirestore, collection, doc, getDoc, getDocs, setDoc, addDoc, deleteDoc, query, orderBy, limit, serverTimestamp, where } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";
let config;
try { config = (await import('./firebase-config.js')).firebaseConfig; } catch { config = null; }
export const firebaseReady = !!config && !String(config.apiKey||'').startsWith('YOUR_');
export const auth = firebaseReady ? getAuth(initializeApp(config)) : null;
export const db = firebaseReady ? getFirestore(auth.app) : null;
export const FB = { onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, updateProfile, GoogleAuthProvider, signInWithPopup, collection, doc, getDoc, getDocs, setDoc, addDoc, deleteDoc, query, orderBy, limit, serverTimestamp, where };
