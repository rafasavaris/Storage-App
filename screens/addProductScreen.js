import React, { useState } from 'react';
import {
  View, Text, TextInput, StyleSheet, TouchableOpacity, Alert,
} from 'react-native';
import * as SQLite from 'expo-sqlite';
import { useNavigation } from '@react-navigation/native';

// Abre o banco de forma moderna
const openDb = async () => {
  const db = await SQLite.openDatabaseAsync('produtos.db');
  return db;
};

export default function AddProductScreen({ }) {
  const navigation = useNavigation();
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [descricao, setDescricao] = useState('');

  const salvarProduto = async () => {
    if (!nome || !preco) {
      Alert.alert('Erro', 'Nome e preço são obrigatórios');
      return;
    }

    try {
      const db = await openDb();
      await db.runAsync(
        'INSERT INTO produtos (nome, preco, descricao) VALUES (?, ?, ?);',
        [nome, parseFloat(preco), descricao || null]
      );

      Alert.alert('Sucesso', 'Produto adicionado com sucesso', [
        {
          text: 'OK',
          onPress: () => navigation.goBack(), // volta para a Home
          
        },
      ]);
      const resultado = await db.getAllAsync('SELECT * FROM produtos;');
          console.log('Todos os produtos:', resultado);
    } catch (error) {
      console.error('Erro ao salvar produto:', error);
      Alert.alert('Erro', 'Falha ao salvar produto');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome do Produto</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o nome"
        value={nome}
        onChangeText={setNome}
      />

      <Text style={styles.label}>Preço</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: 99.90"
        value={preco}
        onChangeText={setPreco}
        keyboardType="decimal-pad"
      />

      <Text style={styles.label}>Descrição</Text>
      <TextInput
        style={[styles.input, styles.textarea]}
        placeholder="Descrição opcional"
        value={descricao}
        onChangeText={setDescricao}
        multiline
        numberOfLines={4}
      />

      <TouchableOpacity style={styles.button} onPress={salvarProduto}>
        <Text style={styles.buttonText}>Salvar Produto</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  label: { fontWeight: 'bold', fontSize: 16, marginTop: 16 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginTop: 8,
  },
  textarea: {
    height: 100,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#d65a75',
    padding: 15,
    borderRadius: 8,
    marginTop: 24,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
