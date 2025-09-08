import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, TouchableOpacity, Alert, KeyboardAvoidingView, Platform } from 'react-native';
import styles from './styles';
import { updateProduto } from '../database/dbFunctions';

export default function EditProductScreen({ route, navigation }) {
  const { produto } = route.params;

  const [nome, setNome] = useState(produto.nome);
  const [preco, setPreco] = useState(produto.preco.toString());
  const [descricao, setDescricao] = useState(produto.descricao || '');

  const salvarAlteracoes = async () => {
    if (!nome.trim()) {
      Alert.alert('Erro', 'O nome do produto é obrigatório.');
      return;
    }

    if (isNaN(parseFloat(preco)) || parseFloat(preco) < 0) {
      Alert.alert('Erro', 'Preço inválido.');
      return;
    }

    try {
      await updateProduto({
        id: produto.id,
        nome: nome.trim(),
        preco: parseFloat(preco),
        descricao: descricao.trim(),
      });
      Alert.alert(
      'Sucesso',
      'Produto atualizado!',
      [
        {
          text: 'OK',
          onPress: () => navigation.goBack(), // Volta para a tela inicial
        },
      ],
      { cancelable: false }
    );
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível salvar as alterações.');
      console.error(error);
    }
  };

  return (
      <View style={styles.container}>
        <Text style={styles.label}>Nome</Text>
        <TextInput
          style={styles.input}
          value={nome}
          onChangeText={setNome}
          placeholder="Nome do produto"
        />

        <Text style={styles.label}>Preço</Text>
        <TextInput
          style={styles.input}
          value={preco}
          onChangeText={setPreco}
          placeholder="Preço"
          keyboardType="numeric"
        />

        <Text style={styles.label}>Descrição</Text>
        <TextInput
          style={[styles.input, styles.textarea]}
          value={descricao}
          onChangeText={setDescricao}
          placeholder="Descrição (opcional)"
          multiline
        />

        <TouchableOpacity style={styles.button} onPress={salvarAlteracoes}>
          <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>
      </View>
  );
}
