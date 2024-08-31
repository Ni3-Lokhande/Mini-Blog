

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBNprI-ycjq_-a4IKbUiX7Tu9DUrYGJoro",
  authDomain: "myblog-b8be9.firebaseapp.com",
  projectId: "myblog-b8be9",
  storageBucket: "myblog-b8be9.appspot.com",
  messagingSenderId: "728666474627",
  appId: "1:728666474627:web:2ad964396a570cac3db3b6"
};

const app = initializeApp(firebaseConfig);

const fireDb = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export {fireDb, auth, storage}