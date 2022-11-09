import React, { createContext, useState, useEffect } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import app from "../Firebase/firebase.init";

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  //   create user
  const userCreate = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // sign in with email , password
  const userSignIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // update user profile name, dispaly pic
  const userProfileUpdate = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };
  // google sign in
  const userGoogleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };
  // facebook sign in
  const userFacebookSignIn = () => {
    return signInWithPopup(auth, facebookProvider);
  };

  // user sign out
  const userSignOut = () => {
    return signOut(auth);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);
  const authCenter = {
    user,
    userCreate,
    userSignIn,
    userProfileUpdate,
    userGoogleSignIn,
    userFacebookSignIn,
    userSignOut,
  };
  return (
    <AuthContext.Provider value={authCenter}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
