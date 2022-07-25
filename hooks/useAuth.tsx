import React from "react";

import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  User,
} from "firebase/auth";

import { useRouter } from "next/router";
import { auth } from "../firebase";

const useAuth = () => {
  const [user, setUser] = React.useState();

  return user;
};

export default useAuth;
