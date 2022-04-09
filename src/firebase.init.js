// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgBk3ZYKrSOB0nJ2H3KEa--Ng-jxLylak",
  authDomain: "my-influencer-products.firebaseapp.com",
  projectId: "my-influencer-products",
  storageBucket: "my-influencer-products.appspot.com",
  messagingSenderId: "412932211798",
  appId: "1:412932211798:web:710de64b0acddfcfac67f7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;