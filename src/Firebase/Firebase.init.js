import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";
// initialize app 
const FirebaseInit = () => {
  initializeApp(firebaseConfig);
};

export default FirebaseInit;
