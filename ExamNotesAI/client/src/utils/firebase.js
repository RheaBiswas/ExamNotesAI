import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "authexamnotes-63341.firebaseapp.com",
  projectId: "authexamnotes-63341",
  storageBucket: "authexamnotes-63341.firebasestorage.app",
  messagingSenderId: "729190353647",
  appId: "1:729190353647:web:3e31cf52fea1314379a91a"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };