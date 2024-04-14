// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbKXCEyt0OXS6Q5jxzZl0iO1kKSxKqA8o",
  authDomain: "assignment-nine-e6d58.firebaseapp.com",
  projectId: "assignment-nine-e6d58",
  storageBucket: "assignment-nine-e6d58.appspot.com",
  messagingSenderId: "334571064751",
  appId: "1:334571064751:web:20cbdbd254431b606bb35a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;