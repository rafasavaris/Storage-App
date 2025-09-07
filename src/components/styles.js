import { StyleSheet } from 'react-native';

export default StyleSheet.create({
card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
},
nome: { 
    fontSize: 16, 
    fontWeight: 'bold' 
},
preco: { 
    fontSize: 14,
    color: '#d65a75',
    marginVertical: 4
},
desc: { 
    fontSize: 12, 
    color: '#666'
},
delete: {
    backgroundColor: '#ff4757',
    padding: 8, 
    borderRadius: 6
},
});