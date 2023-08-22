import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    onAuthStateChanged,
    signOut,
} from 'firebase/auth';

import { auth } from '../../firebase/config';
import { uploadToServer } from '../../firebase/api';
import { authSlice } from './authReducer';

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
            await updateProfile(auth.currentUser, {displayName: login, photoURL: await uploadToServer(avatar, "avatars", auth.currentUser.uid)});
                        
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

const authSignOut = () => async dispatch => {
    try {
        await signOut(auth);

        dispatch(authSlice.actions.signOut());
    } catch (error) {
        console.log(error.message);
    };
};

const authStateChange = () => async dispatch => {
    try {
        onAuthStateChanged(auth, user => {
            if (user) {
                dispatch(authSlice.actions.changeState(true));

                dispatch(authSlice.actions.updateUser({
                    userId: user.uid,
                    userName: user.displayName,
                    userEmail: user.email,
                    userAvatar: user.photoURL,
                }));
            }
        });
    } catch (error) {
        console.log(error.message);
    };
};

export { authSignIn, authSignUp, authSignOut, authStateChange };