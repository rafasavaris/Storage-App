import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'react-native';

import Home from './src/screens/home';
import AddProductScreen from './src/screens/addProductScreen';
import EditProductScreen from './src/screens/editProductScreen';

const Stack = createNativeStackNavigator();

function HeaderTitle() {
  return (
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Image
        source={require('./assets/logo.png')}
        style={{ width: 40, height: 40, resizeMode: 'contain', marginRight: 8 }}
      />
      <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold' }}>
        Minha Loja
      </Text>
    </View>
  );
}

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
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTitle: () =>
            <HeaderTitle />, }}
        />
        <Stack.Screen
          name="AddProductScreen"
          component={AddProductScreen}
          options={{ title: 'Adicionar Produto' }}
        />
        <Stack.Screen
        name="EditProductScreen"
        component={EditProductScreen}
        options={{ title: 'Editar Produto' }}
      />

      </Stack.Navigator>
    </NavigationContainer>
  );
}