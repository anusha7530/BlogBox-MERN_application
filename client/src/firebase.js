import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-36830.firebaseapp.com",
  projectId: "mern-blog-36830",
  storageBucket: "mern-blog-36830.appspot.com",
  messagingSenderId: "210154419721",
  appId: "1:210154419721:web:a9bae8b0c9f4ebb1382ad8"
};

export const app = initializeApp(firebaseConfig);

