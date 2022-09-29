import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, getDocs, collection } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAFtz7F5zOUcGW_kNCt-T3uj_VMiFBSmnY",
  authDomain: "projeto-tester-d7289.firebaseapp.com",
  projectId: "projeto-tester-d7289",
  storageBucket: "projeto-tester-d7289.appspot.com",
  messagingSenderId: "630745349893",
  appId: "1:630745349893:web:11a5eedd00576dde10416c"
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