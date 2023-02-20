// import db from "../../firebase/config";
import { auth, db } from "../../firebase/config";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    onAuthStateChanged
} from "firebase/auth";
import { authSlice } from "./authSlice";

export const authSingUpUser = ({ email, password, name }) => async (dispatch, getState) => {
    try {
        // console.log("user", email);
        // console.log("user", password);
      const {user} = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, {
        displayName: name,
    })
    const updatedUser = await auth.currentUser;
    const {uid, displayName} = updatedUser;
    dispatch(authSlice.actions.updateUserProfile({
        userId: uid,
        name: displayName,
    }))
      console.log("user", user);
    } catch (error) {
      console.log("error", error);
      console.log("error.message", error.message);
    }
  };


export const authSingInUser = ({ email, password }) => async (dispatch, getState) => {
    try {
        // console.log("user", email);
        // console.log("user", password);
      const {user} = await signInWithEmailAndPassword(auth, email, password);
      const loggedUser = await auth.currentUser;
      const {uid, displayName} = loggedUser;
      // console.log(displayName, uid);
      dispatch(authSlice.actions.updateUserProfile({
          userId: uid,
          name: displayName,
      }))
      console.log("user", user);
    } catch (error) {
      console.log("error", error);
      console.log("error.message", error.message);
    }
};


export const authSignOutUser = () => async (dispatch, getState) => {
  console.log('outUser');
  await auth.signOut();
  dispatch(authSlice.actions.authSignOut())
};


export const authStateChangeUser = () => async (dispatch, getState) => {

  try {
      await onAuthStateChanged(auth, (user) => {
          if (user) {
              const authUser = auth.currentUser;
              const {uid, displayName} = authUser;
              dispatch(authSlice.actions.updateUserProfile({
                  userId: uid,
                  name: displayName,
              }));
              dispatch(authSlice.actions.authStateChange({currentState: true}))
          }
      });

  } catch (err) {
      // console.log('error', err);
      console.log('error message', err.message);
  }
}
