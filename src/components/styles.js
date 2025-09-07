import { StyleSheet } from 'react-native';

export default StyleSheet.create({
card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 10,
    marginHorizontal: 5,
    elevation: 2,
},
nome: { 
    fontSize: 16, 
    fontWeight: 'bold' 
},
preco: { 
    fontSize: 14,
    color: '#d65a75',
    marginTop: 4
},
desc: { 
    fontSize: 12, 
    color: '#666',
    marginTop: 4,
},
delete: {
    backgroundColor: '#d11a2a',
    borderRadius: 4,
    padding: 6,
    marginLeft: 10,
},
item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
},
});