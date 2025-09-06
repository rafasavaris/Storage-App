import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screens/home';  // ajuste o caminho conforme o arquivo
import AddProductScreen from './screens/addProductScreen';

const Stack = createNativeStackNavigator();

export default function App({ navigation }) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"screenOptions={{
      headerStyle: {
        backgroundColor: '#d65a75',  // ex: cor de fundo do cabeçalho
      },
      headerTintColor: '#fff', // cor dos títulos e ícones do cabeçalho
    }}>
        <Stack.Screen name="Home" component={Home} options={{ title: 'Produtos' }}/>
        <Stack.Screen
          name="AddProductScreen"
          component={AddProductScreen}
          options={{ title: 'Adicionar Produto' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}