import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Home() {
  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <View style={styles.left}>
          <Text style={styles.title}>Produtos</Text>
        </View>

        <TouchableOpacity onPress={() => alert('Pesquisar')}>
          <Ionicons name="search" size={24} color="#ffff" />
        </TouchableOpacity>
      </View>

      {/* Conteúdo da tela */}
      <View style={styles.content}>
        <Text>Conteúdo aqui...</Text>
      </View>

      <TouchableOpacity
        style={styles.fab}
        onPress={() => alert('Adicionar novo item')}
      >
        <Text style={styles.text_button}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50, // espaço para status bar
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    verticalAlign: 'middle',
    justifyContent: 'space-between',
    paddingBottom: 20,
    borderBottomWidth: 0,
    borderBottomColor: '#ddd',
    backgroundColor: '#d65a75ff',
    paddingTop:  20, // espaço do status bar (varia por plataforma)
    paddingHorizontal: 16,
    borderRadius: 10,
    
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  logo: {
    width: 32,
    height: 32,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffff'
  },
  content: {
    marginTop: 20,
  },
  fab: {
    position: 'absolute',
    bottom: 75,
    right: 24,
    backgroundColor: '#d65a75ff',
    width: 60,
    height: 60,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5, // sombra Android
    shadowColor: '#000', // sombra iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  text_button: {
    color: '#fff',
    fontSize: 25,
    lineHeight: 30,
    fontStyle: 'bold',
  }
});
