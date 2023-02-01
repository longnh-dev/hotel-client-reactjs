import { createContext, useContext, useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom';
import axios from "axios";

import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

import { auth, db } from "../firebase";
import { child, get, ref, set } from "firebase/database";
import { uid } from "uid";

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const uuid = uid();


  async function logIn(username, password, rememberMe) {
    try{
      const userAuth = await axios.post("http://localhost:5200/api/v1/authentication/jwt/login",{username, password, rememberMe});
      
      if(userAuth.data.data.tokenString){
        navigate("/");
      }
      else{
        localStorage.clear();
        navigate("/error");
      }

      localStorage.setItem("tokenString", userAuth.data.data.tokenString);
      localStorage.setItem("userModel", JSON.stringify(userAuth.data.data.userModel));
      alert("Login success!");
      
    }
    catch(err){
      console.log(err.response.data.message);
      if(err.response.data.code == 400){
        alert(err.response.data.message);
        localStorage.clear();

      }
      if(err.response.data.code == 403){
        navigate("/unverify");
        localStorage.clear();
      }
    }
  }

  function signUp(email, password, name, number, id) {
    return createUserWithEmailAndPassword(auth, email, password).then(() => {
      set(ref(db, `users/${uuid}`), {
        email,
        name,
        number,
        id,
        isAdmin: false,
      });
    });
  }
  function logOut() {
    return signOut(auth);
  }
  function googleSignIn() {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      setUser(currentuser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <userAuthContext.Provider
      value={{ user, logIn, signUp, logOut, googleSignIn }}
    >
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}
