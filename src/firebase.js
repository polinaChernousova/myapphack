// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAe7Bc8R7nTVnmGtf55hf80yi2GvwiJ4JU",
  authDomain: "myapp-11d02.firebaseapp.com",
  projectId: "myapp-11d02",
  storageBucket: "myapp-11d02.appspot.com",
  messagingSenderId: "671959398048",
  appId: "1:671959398048:web:0a331748dd9c4ac91afbc5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
