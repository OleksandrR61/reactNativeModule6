import { useState, useEffect } from 'react';
import { Provider } from 'react-redux';

import * as Font from 'expo-font';

import { Container } from './components';
import { UserContainer } from './components/UserContainer/UserContainer';

import { store } from './redux/store';

export default function App() {
  const [ isReady, setIsReady ] = useState(false);

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

  if (!isReady) {
    return <Container/>;
  };

  return <Provider store={store}>
    <UserContainer />
  </Provider>;
};