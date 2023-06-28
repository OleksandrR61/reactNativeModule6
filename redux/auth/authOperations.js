import { createUserWithEmailAndPassword } from 'firebase/auth';

import { auth } from '../../firebase/config';

const authSignIn = () => async (dispatch, getState) => {};

const authSignUp = ({avatar, login, email, password}) => async () => {
    try {
        await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.log("Error message: ", error.message);
    };
};

const authSignOut = () => async (dispatch, getState) => {};

export { authSignIn, authSignUp, authSignOut}