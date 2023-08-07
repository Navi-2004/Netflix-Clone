import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgUDjnl7r1AQxmdWIYGqFeAkkvk3xOOdw",
  authDomain: "react-netflix-clone-3ed26.firebaseapp.com",
  projectId: "react-netflix-clone-3ed26",
  storageBucket: "react-netflix-clone-3ed26.appspot.com",
  messagingSenderId: "50508321732",
  appId: "1:50508321732:web:66008d01591f51b20b8a91",
  measurementId: "G-XTHZ7JYEZE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth =getAuth(app);
