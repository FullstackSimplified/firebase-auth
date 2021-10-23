import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCzGKXxJ8IUpYRa5xqQkWZOmUChSAlVKMo",
  authDomain: "fir-auth-react-e8399.firebaseapp.com",
  projectId: "fir-auth-react-e8399",
  storageBucket: "fir-auth-react-e8399.appspot.com",
  messagingSenderId: "962605851630",
  appId: "1:962605851630:web:8a54bce7d9047760a9e4ff",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
