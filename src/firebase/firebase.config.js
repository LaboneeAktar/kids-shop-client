import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCSmBPf-3C0pZsWsV1IRboVJmLsd0S8JRM",
  authDomain: "kids-shop-86311.firebaseapp.com",
  projectId: "kids-shop-86311",
  storageBucket: "kids-shop-86311.appspot.com",
  messagingSenderId: "1074538768241",
  appId: "1:1074538768241:web:4f427cde80a99fdcc4f8d0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
