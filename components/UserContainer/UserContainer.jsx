import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { NavigationContainer } from '@react-navigation/native';

import { authStateChange } from "../../redux/auth/authOperations";

import MainRoute from '../../routes/MainRoute/MainRoute';
import AuthRoute from '../../routes/AuthRoute/AuthRoute';

export const UserContainer = () => {
    const isAuth = useSelector(state => state.auth.userState);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(authStateChange());
    }, []);

    return <NavigationContainer>
        {isAuth 
            ? <MainRoute />
            : <AuthRoute />
        }
    </NavigationContainer>;
};