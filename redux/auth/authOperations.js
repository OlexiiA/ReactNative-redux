import db from "../../firebase/config";

export const authSingUpUser = ({email, password, name}) => async (dispatch, getState) => {
    try {
        const user = await db.auth().createUserWithEmailAndPassword(email, password);
        console.log('user', user);
    } catch (error) {
        console.log('error', error);
        console.log('error.message', error.message);
    }
};


const authSingInUser = () => async (dispatch, getState) => {};


const authSingOutUser = () => async (dispatch, getState) => {};


