import React, { useEffect, useState, useCallback, useLayoutEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert, StatusBar  } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles'; // seu styles.js existente
import { getProdutos, deleteProduto } from '../database/dbFunctions';
import ProductItem from '../components/products';

export default function Home({ navigation }) {
  const [produtos, setProdutos] = useState([]);
  const [ordenacao, setOrdenacao] = useState('criação'); // 'criação' ou 'alfabética'

  const carregarProdutos = async () => {
    try {
      let lista = await getProdutos();

      if (ordenacao === 'alfabética') {
        lista.sort((a, b) => a.nome.localeCompare(b.nome));
      }

      setProdutos(lista);
    } catch (error) {
      console.error('Erro ao carregar produtos:', error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      carregarProdutos();
    }, [ordenacao])
  );
  
  useEffect(() => {
    carregarProdutos();
  }, [ordenacao]);

  const excluirProduto = (id) => {
    Alert.alert('Excluir Produto', 'Tem certeza que deseja excluir?', [
      { text: 'Cancelar', style: 'cancel' },
      {
        text: 'Excluir',
        style: 'destructive',
        onPress: async () => {
          await deleteProduto(id);
          carregarProdutos();
        },
      },
    ]);
  };

  useLayoutEffect(() => {
  navigation.setOptions({
    headerRight: () => (
      <TouchableOpacity
        onPress={alternarOrdenacao}
        style={{ marginRight: 10, flexDirection: 'row', alignItems: 'center' }}
      >
        <Ionicons name="swap-vertical" size={20} color="#ffffffff" />
        <Text style={{ marginLeft: 4, color: '#ffffffff', fontSize: 14 }}>
          {ordenacao === 'criação' ? 'Criação' : 'A-Z'}
        </Text>
      </TouchableOpacity>
    ),
  });
}, [navigation, ordenacao]);

  const renderItem = ({ item }) => (
    <ProductItem item={item} onDelete={excluirProduto} />
  );

  const alternarOrdenacao = () => {
    const novaOrdenacao = ordenacao === 'criação' ? 'alfabética' : 'criação';
    setOrdenacao(novaOrdenacao);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={produtos.length === 0 && styles.emptyContainer}
        ListEmptyComponent={
          <View style={styles.empty}>
            <Ionicons name="cart-outline" size={64} color="#ccc" />
            <Text style={styles.emptyText}>Nenhum produto encontrado</Text>
            <TouchableOpacity
              style={styles.addBtn}
              onPress={() => navigation.navigate('AddProductScreen')}
            >
              <Text style={styles.addText}>Adicionar Produto</Text>
            </TouchableOpacity>
          </View>
        }
      />

      <TouchableOpacity
        style={styles.fab}
        onPress={() => navigation.navigate('AddProductScreen')}
      >
        <Text style={styles.plus}>+</Text>
      </TouchableOpacity>
    </View>
  );
}