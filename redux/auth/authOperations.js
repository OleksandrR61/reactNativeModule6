import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile
} from 'firebase/auth';

import { auth } from '../../firebase/config';
import { authSlice } from './authReducer'

const authSignIn = ({email, password}) => async dispatch => {
    try {
        const { user } = await signInWithEmailAndPassword(auth, email, password);
        if (auth.currentUser) {
            dispatch(authSlice.actions.updateUser({
                userId: user.uid,
                userName: user.displayName,
                userEmail: user.email,
                userAvatar: user.photoURL,
            }));
        };
    } catch (error) {
        console.log("Error message: ", error.message);
    };
};

const authSignUp = ({avatar, login, email, password}) => async dispatch => {
    try {
        await createUserWithEmailAndPassword(auth, email, password);
        if (auth.currentUser) {
            await updateProfile(auth.currentUser, {displayName: login, photoURL: avatar});
                        
            dispatch(authSlice.actions.updateUser({
                userId: auth.currentUser.uid,
                userName: auth.currentUser.displayName,
                userEmail: auth.currentUser.email,
                userAvatar: auth.currentUser.photoURL,
            }));
        };
    } catch (error) {
        console.log("Error message: ", error.message);
    };
};

const authSignOut = () => async (dispatch, getState) => {};

const authStateChange = () => async () => {
    onAuthStateChanged(auth, user => setUser(user));
};

export { authSignIn, authSignUp, authSignOut, authStateChange};