import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyAZh9px1CA-3H7SObP1q6dzm1zCoTl_NzU",
  authDomain: "book-review-f49bc.firebaseapp.com",
  projectId: "book-review-f49bc",
  storageBucket: "book-review-f49bc.appspot.com",
  messagingSenderId: "316399394935",
  appId: "1:316399394935:web:9dc62023e62147ca2ae672",
  measurementId: "G-M36LYN8D6G"
};

export const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getStorage(app);
export const provider = new GoogleAuthProvider();