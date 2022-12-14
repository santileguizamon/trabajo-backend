// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDe06RT9B1YzP598mNMriF1o4og015w2e4",
  authDomain: "coderhouse-react-90094.firebaseapp.com",
  projectId: "coderhouse-react-90094",
  storageBucket: "coderhouse-react-90094.appspot.com",
  messagingSenderId: "846267279304",
  appId: "1:846267279304:web:bb0b9bb62adbf1e72642fd",
  measurementId: "G-DK287QY1WG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);