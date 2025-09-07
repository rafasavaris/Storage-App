import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert, StatusBar } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';
import { getProdutos, deleteProduto } from '../database/dbFunctions';
import ProductItem from '../components/products';

export default function Home({ navigation }) {
  const [produtos, setProdutos] = useState([]);

  const carregarProdutos = async () => {
    try {
      const lista = await getProdutos();
      setProdutos(lista);
    } catch (error) {
      console.error('Erro ao carregar produtos:', error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      carregarProdutos();
    }, [])
  );

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

  const renderItem = ({ item }) => (
    <ProductItem item={item} onDelete={excluirProduto} />
  );

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