import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from 'firebase/auth';

import { auth } from '../../firebase/config';

const authSignIn = ({email, password}) => async () => {
    try {
        const { user } = await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.log("Error message: ", error.message);
    };
};

const authSignUp = ({avatar, login, email, password}) => async () => {
    try {
        const { user } = await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.log("Error message: ", error.message);
    };
};

const authSignOut = () => async (dispatch, getState) => {};

export { authSignIn, authSignUp, authSignOut}