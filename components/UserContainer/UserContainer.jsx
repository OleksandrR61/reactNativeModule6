import { useState } from "react";
import { useSelector } from "react-redux";

import { NavigationContainer } from '@react-navigation/native';

import { onAuthStateChanged } from "firebase/auth";

import { auth } from "../../firebase/config";

import MainRoute from '../../routes/MainRoute/MainRoute';
import AuthRoute from '../../routes/AuthRoute/AuthRoute';

export const UserContainer = () => {
    const [ user, setUser ] = useState(null);

    onAuthStateChanged(auth, user => setUser(user));

    return <NavigationContainer>
        {user 
            ? <MainRoute /*handleAuth={handleAuth}*/ />
            : <AuthRoute /*handleAuth={handleAuth}*/ />
        }
    </NavigationContainer>;
};