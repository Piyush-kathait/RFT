// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNkzskg0iSvS2Ps7tKlZAgSogzcMHY6O8",
  authDomain: "my-projects-9faad.firebaseapp.com",
  projectId: "my-projects-9faad",
  storageBucket: "my-projects-9faad.firebasestorage.app",
  messagingSenderId: "304745554084",
  appId: "1:304745554084:web:da03905af4329bd2a1c631",
  measurementId: "G-8ZZHSN6D9G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
 