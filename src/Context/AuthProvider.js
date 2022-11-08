import React, { createContext, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import app from "../Firebase/firebase.init";

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  //   create user
  const userCreate = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // sign in with email , password
  const userSignIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const authCenter = { user, userCreate, userSignIn };
  return (
    <AuthContext.Provider value={authCenter}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
