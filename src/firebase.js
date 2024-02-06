import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBgayRs7UJKJKNNs6RGcpSlUob1gZ0wN90",
  authDomain: "leetcode-clone-d2d54.firebaseapp.com",
  projectId: "leetcode-clone-d2d54",
  storageBucket: "leetcode-clone-d2d54.appspot.com",
  messagingSenderId: "387566303719",
  appId: "1:387566303719:web:046e7171e8ab7556f9e542",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
export default app;
