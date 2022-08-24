// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import  { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrAU5wTQHVzd-LgKt6g2PAdZcdJNmZbyM",
  authDomain: "ecommerce-react-e6389.firebaseapp.com",
  projectId: "ecommerce-react-e6389",
  storageBucket: "ecommerce-react-e6389.appspot.com",
  messagingSenderId: "783002415800",
  appId: "1:783002415800:web:51882ba06e84cba8883a4d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export default db
