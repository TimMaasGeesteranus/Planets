import React from 'react';

import {
  View,
  Text,
  ImageBackground,
  StyleSheet
} from 'react-native';
import StartScreen from './components/screens/StartScreen.js';

const image = require('./public/stars.gif')

const App = () => {

  return (
    <StartScreen />
  );
};

export default App;
