import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, getDocs, collection } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA_48T30wZY7ll8YxAlUlpDToN8Grr3JSA",
  authDomain: "project-teste-9ee70.firebaseapp.com",
  projectId: "project-teste-9ee70",
  storageBucket: "project-teste-9ee70.appspot.com",
  messagingSenderId: "2812345805",
  appId: "1:2812345805:web:0f436882cac576be5ad884"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

const signUp = (email, password) => { return createUserWithEmailAndPassword(auth, email, password)}
const signIn = (email, password) => { return signInWithEmailAndPassword(auth, email, password)}

const addTask = (obj) => { return addDoc(collection(db, "tarefas"), obj) }
const getTasks = () => { return getDocs(collection(db, "tarefas")) }

export const fb = {
  task: {
    add: addTask,
    list: getTasks
  },
  auth: {
    new: signUp,
    in:signIn

  }
}