import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import FirebaseInt from "../Firebase/Firebase.init";

FirebaseInt();

const useFirebase = () => {
  const [user, setuser] = useState({});
  const [isloading, setloading] = useState(true);
  const auth = getAuth();
  const googleprovider = new GoogleAuthProvider();

  const googleSignIn = () => {
    setloading(true);
    return signInWithPopup(auth, googleprovider);
    setloading(false);
  };

  const logOut = () => {
    setloading(true);
    signOut(auth)
      .then(() => {
        setuser({});
      })
      .finally(() => {
        setloading(false);
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setuser(user);
      } else {
        setuser({});
      }
      setloading(false);
    });
  }, []);

  return {
    user,
    googleSignIn,
    logOut,
    setuser,
    isloading,
  };
};
export default useFirebase;
