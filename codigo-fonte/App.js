import React from 'react';
import AuthNavigator from './Navigation/Auth';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './Navigation/AppNavigator';

import NovaSimulacao from './pages/NovaSimulacao';
import Register from './pages/Register';
import Configuracoes from './pages/Configuracoes';
import Home from './pages/Home';
import Usuario from './pages/Usuario';
import Simulador from './pages/Simulador';
import Login from './pages/login';



const App = () => {
  return (
    <NavigationContainer>
      <Login />
    </NavigationContainer>
  );
};

export default App;



