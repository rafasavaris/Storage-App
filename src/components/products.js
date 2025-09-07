import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';

export default function ProductItem({ item, onDelete, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={() => onDelete(item.id)}
      style={styles.card}
      activeOpacity={0.8}
    >
      <View style={styles.item}>
        <View>
          <Text style={styles.nome}>{item.nome}</Text>
          <Text style={styles.preco}>R$ {parseFloat(item.preco).toFixed(2)}</Text>
          {item.descricao && <Text style={styles.desc}>{item.descricao}</Text>}
        </View>
        <TouchableOpacity
          style={styles.delete}
          onPress={() => onDelete(item.id)}
        >
          <Ionicons name="trash" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}