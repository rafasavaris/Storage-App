import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Alert,
  StatusBar,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as SQLite from 'expo-sqlite';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';

export default function Home({navigation}) {
  const [db, setDb] = useState(null);
  const [produtos, setProdutos] = useState([]);

  useFocusEffect(
  useCallback(() => {
    if (db) {
      carregarProdutos();
    }
  }, [db])
);
  // Abre o banco e cria a tabela
  useEffect(() => {
    const iniciarBanco = async () => {
      try {
        const database = await SQLite.openDatabaseAsync('produtos.db');
        setDb(database);

        // Cria a tabela
        await database.execAsync(`
          CREATE TABLE IF NOT EXISTS produtos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT NOT NULL,
            preco REAL NOT NULL,
            descricao TEXT
          );
        `);

        await carregarProdutos(database);
      } catch (error) {
        console.error('Erro ao inicializar o banco:', error);
      }
    };

    iniciarBanco();
  }, []);

  const carregarProdutos = async (database = db) => {
    if (!database) return;

    try {
      const resultado = await database.getAllAsync(`SELECT * FROM produtos;`);
      setProdutos(resultado);
    } catch (error) {
      console.error('Erro ao carregar produtos:', error);
    }
  };

  const deletarProduto = async (id) => {
    if (!db) return;

    Alert.alert('Excluir Produto', 'Tem certeza que deseja excluir?', [
      { text: 'Cancelar', style: 'cancel' },
      {
        text: 'Excluir',
        style: 'destructive',
        onPress: async () => {
          try {
            await db.runAsync('DELETE FROM produtos WHERE id = ?;', [id]);
            await carregarProdutos();
          } catch (error) {
            console.error('Erro ao deletar produto:', error);
          }
        },
      },
    ]);
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View>
        <Text style={styles.nome}>{item.nome}</Text>
        <Text style={styles.preco}>R$ {parseFloat(item.preco).toFixed(2)}</Text>
        {item.descricao && <Text style={styles.desc}>{item.descricao}</Text>}
      </View>
      <TouchableOpacity
        style={styles.delete}
        onPress={() => deletarProduto(item.id)}
      >
        <Ionicons name="trash" size={20} color="#fff" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <View style={styles.content}>
        {produtos.length === 0 ? (
          <View style={styles.empty}>
            <Ionicons name="cart-outline" size={64} color="#ccc" />
            <Text style={styles.emptyText}>Nenhum produto encontrado</Text>
            <TouchableOpacity
              style={styles.addBtn}
              onPress={() => navigation.navigate('AddProductScreen')}
            >
              <Text style={styles.addText}>Adicionar exemplos</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <FlatList
            data={produtos}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
            contentContainerStyle={styles.list}
          />
        )}
      </View>

      <TouchableOpacity style={styles.fab} onPress={() => navigation.navigate('AddProductScreen')}>
        <Text style={styles.plus}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 50, paddingHorizontal: 16, backgroundColor: '#f5f5f5' },
  header: { flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#d65a75', padding: 20, borderRadius: 10, marginBottom: 20 },
  title: { fontSize: 20, fontWeight: 'bold', color: '#fff' },
  subtitle: { fontSize: 12, color: '#fff', opacity: 0.8 },
  content: { flex: 1 },
  list: { paddingBottom: 100 },
  card: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#fff', padding: 16, borderRadius: 8, marginBottom: 12 },
  nome: { fontSize: 16, fontWeight: 'bold' },
  preco: { fontSize: 14, color: '#d65a75', marginVertical: 4 },
  desc: { fontSize: 12, color: '#666' },
  delete: { backgroundColor: '#ff4757', padding: 8, borderRadius: 6 },
  empty: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  emptyText: { fontSize: 16, color: '#666', marginVertical: 16 },
  addBtn: { backgroundColor: '#d65a75', padding: 12, borderRadius: 8 },
  addText: { color: '#fff', fontWeight: '600' },
  fab: { position: 'absolute', bottom: 75, right: 24, backgroundColor: '#d65a75', width: 60, height: 60, borderRadius: 30, justifyContent: 'center', alignItems: 'center' },
  plus: { color: '#fff', fontSize: 20}
});
