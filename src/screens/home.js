import React, { useEffect, useState, useCallback, useLayoutEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Alert,
  StatusBar,
  Modal,
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';
import { getProdutos, deleteProduto } from '../database/dbFunctions';
import ProductItem from '../components/products';

export default function Home({ navigation }) {
  const [produtos, setProdutos] = useState([]);
  const [ordenacao, setOrdenacao] = useState('criação');
  const [produtoSelecionado, setProdutoSelecionado] = useState(null);
  const [modalVisivel, setModalVisivel] = useState(false);

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

  const alternarOrdenacao = () => {
    const novaOrdenacao = ordenacao === 'criação' ? 'alfabética' : 'criação';
    setOrdenacao(novaOrdenacao);
  };

  const abrirModal = (produto) => {
    setProdutoSelecionado(produto);
    setModalVisivel(true);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={alternarOrdenacao}
          style={{ marginRight: 10, flexDirection: 'row', alignItems: 'center' }}
        >
          <Ionicons name="swap-vertical" size={20} color="#fff" />
          <Text style={{ marginLeft: 4, color: '#fff', fontSize: 14 }}>
            {ordenacao === 'criação' ? 'Criação' : 'A-Z'}
          </Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation, ordenacao]);

  const renderItem = ({ item }) => (
    <ProductItem
      item={item}
      onDelete={excluirProduto}
      onPress={() => abrirModal(item)}
    />
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <Modal
        visible={modalVisivel}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisivel(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisivel(false)}>
            <Ionicons name="close" size={24} color="#333" />
            </TouchableOpacity>
            <Text style={styles.modalTitle}>Detalhes do Produto</Text>
            {produtoSelecionado && (
              <>
                <Text style={styles.modalText}>Nome: {produtoSelecionado.nome}</Text>
                <Text style={styles.modalText}>
                  Preço: R$ {parseFloat(produtoSelecionado.preco).toFixed(2)}
                </Text>
                {produtoSelecionado.descricao && (
                  <Text style={styles.modalText}>
                    Descrição: {produtoSelecionado.descricao}
                  </Text>
                )}
              </>
            )}
            <TouchableOpacity
              onPress={() => setModalVisivel(false)}
              style={styles.modalEditBtn}
            >
              <Text style={styles.modalEditText}>Editar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

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

      {/* BOTÃO FLUTUANTE */}
      <TouchableOpacity
        style={styles.fab}
        onPress={() => navigation.navigate('AddProductScreen')}
      >
        <Text style={styles.plus}>+</Text>
      </TouchableOpacity>
    </View>
  );
}