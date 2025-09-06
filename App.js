// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/home';
import AddProductScreen from './src/screens/addProductScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: '#d65a75' },
          headerTintColor: '#fff',
        }}
      >
        <Stack.Screen name="Home" component={Home} options={{ title: 'Produtos' }} />
        <Stack.Screen name="AddProductScreen" component={AddProductScreen} options={{ title: 'Adicionar Produto' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}