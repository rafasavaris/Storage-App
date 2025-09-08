/* ************************************************************************* *
 * Projeto: Cadastro de Produtos                                             *
 * Autor: Rafaela F. Savaris                                                 *
 * Data: 2025                                                                *
 * ************************************************************************* *
 * Descrição:                                                                *
 * Este é um aplicativo móvel desenvolvido com React Native e Expo.          *
 * Permite adicionar, editar e excluir produtos com as seguintes informações:*
 * - Nome                                                                    *
 * - Preço                                                                   *
 * - Descrição (opcional)                                                    *
 * ************************************************************************* *
 * Funcionalidades:                                                          *
 * - Tela Home: lista todos os produtos cadastrados                          *
 * - Tela de Adição: permite cadastrar novos produtos                        *
 * - Tela de Edição: permite atualizar informações de produtos existentes    *
 * - Banco de dados local: utiliza SQLite via Expo                           *
 * ************************************************************************* *
 * Observações:                                                              *
 * - Feito para ser usado com Expo Go no celular ou em emuladores Android/iOS*
 * - Cabeçalho personalizado simples implementado com View e Text            *
 * ************************************************************************* */

// Importações do React e React Native
import React from 'react';
import { View, Text } from 'react-native';

// Importações do React Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image } from 'react-native';

// Importação das telas do aplicativo
import Home from './src/screens/home';
import AddProductScreen from './src/screens/addProductScreen';
import EditProductScreen from './src/screens/editProductScreen';

// Criação do stack navigator
const Stack = createNativeStackNavigator();

// Personalização do cabeçalho
function HeaderTitle() {
  return (
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Image
        source={require('./assets/logo.png')}
        style={{ width: 40, height: 40, resizeMode: 'contain', marginRight: 8 }}
      />
      <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold' }}>
        Lista de Produtos
      </Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      {/* Tela inicial do aplicativo */}
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: '#d65a75' },
          headerTintColor: '#fff',
        }}
      >
        {/* Tela home */}
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTitle: () =>
            <HeaderTitle />, }}
        />
        {/* Tela de adição de produtos */}
        <Stack.Screen
          name="AddProductScreen"
          component={AddProductScreen}
          options={{ title: 'Adicionar Produto' }}
        />
        {/* Tela de edição de produtos */}
        <Stack.Screen
        name="EditProductScreen"
        component={EditProductScreen}
        options={{ title: 'Editar Produto' }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}