// src/components/ProductItem.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ProductItem({ item, onDelete }) {
  return (
    <View style={styles.card}>
      <View>
        <Text style={styles.nome}>{item.nome}</Text>
        <Text style={styles.preco}>R$ {parseFloat(item.preco).toFixed(2)}</Text>
        {item.descricao && <Text style={styles.desc}>{item.descricao}</Text>}
      </View>
      <TouchableOpacity style={styles.delete} onPress={() => onDelete(item.id)}>
        <Ionicons name="trash" size={20} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
  },
  nome: { fontSize: 16, fontWeight: 'bold' },
  preco: { fontSize: 14, color: '#d65a75', marginVertical: 4 },
  desc: { fontSize: 12, color: '#666' },
  delete: { backgroundColor: '#ff4757', padding: 8, borderRadius: 6 },
});
