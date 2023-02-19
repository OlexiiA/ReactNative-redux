// import db from "../../firebase/config";
import { auth, db } from "../../firebase/config";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    onAuthStateChanged
} from "firebase/auth";

export const authSingUpUser = ({ email, password, name }) => async (dispatch, getState) => {
    try {
        console.log("user", email);
        console.log("user", password);
      const {user} = await createUserWithEmailAndPassword(auth, email, password);
      console.log("user", user);
    } catch (error) {
      console.log("error", error);
      console.log("error.message", error.message);
    }
  };

export const authSingInUser = ({ email, password }) => async (dispatch, getState) => {
    try {
        console.log("user", email);
        console.log("user", password);
      const {user} = await signInWithEmailAndPassword(auth, email, password);
      console.log("user", user);
    } catch (error) {
      console.log("error", error);
      console.log("error.message", error.message);
    }
};

const authSingOutUser = () => async (dispatch, getState) => {};
