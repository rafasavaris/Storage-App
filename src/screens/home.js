// src/screens/Home.js
import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';
import { getProdutos, deleteProduto, initDB } from '../database/dbFunctions';
import ProductItem from '../components/products';

export default function Home({ navigation }) {
  const [produtos, setProdutos] = useState([]);

  const carregarProdutos = async () => {
    const resultado = await getProdutos();
    setProdutos(resultado);
  };

  useEffect(() => {
    const setup = async () => {
      await initDB();
      await carregarProdutos();
    };
    setup();
  }, []);

  useFocusEffect(
    useCallback(() => {
      carregarProdutos();
    }, [])
  );

  const handleDelete = (id) => {
    Alert.alert('Excluir Produto', 'Deseja excluir este produto?', [
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

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {produtos.length === 0 ? (
          <View style={styles.empty}>
            <Ionicons name="cart-outline" size={64} color="#ccc" />
            <Text style={styles.emptyText}>Nenhum produto encontrado</Text>
          </View>
        ) : (
          <FlatList
            data={produtos}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <ProductItem item={item} onDelete={handleDelete} />
            )}
            contentContainerStyle={styles.list}
          />
        )}
      </View>

      <TouchableOpacity
        style={styles.fab}
        onPress={() => navigation.navigate('AddProductScreen')}
      >
        <Text style={styles.plus}>+</Text>
      </TouchableOpacity>
    </View>
  );
}