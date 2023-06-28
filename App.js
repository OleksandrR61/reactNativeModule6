import { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';

import * as Font from 'expo-font';

import MainRoute from './routes/MainRoute/MainRoute';
import AuthRoute from './routes/AuthRoute/AuthRoute';

import { Container } from './components';

import { store } from './redux/store';

import { auth } from './firebase/config';
import { onAuthStateChanged } from 'firebase/auth';

export default function App() {
  const [ isReady, setIsReady ] = useState(false);
  const [ user, setUser ] = useState(null);

  useEffect(() => {
    const loadFonts = async () => {
      try {
        await Font.loadAsync({
          "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"), //500
          "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"), //400
          "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"), //700
          "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"), //500
        });
      } catch (error) {
        console.warn(error);
      } finally {
        setIsReady(true);
      };
    };

    loadFonts();
  }, [setIsReady]);

  const handleAuth = () => setUser(null);

  onAuthStateChanged(auth, user => setUser(user));

  if (!isReady) {
    return <Container/>;
  };

  return <Provider store={store}>
    <NavigationContainer>
      {user 
        ? <MainRoute handleAuth={handleAuth} />
        : <AuthRoute /*handleAuth={handleAuth}*/ />
      }
    </NavigationContainer>
  </Provider>;
};