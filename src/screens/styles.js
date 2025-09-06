import { StyleSheet } from 'react-native';

export default StyleSheet.create({
container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#f5f5f5',
},
content: { flex: 1,},
list: { paddingBottom: 100, },
empty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
},
emptyText: {
    fontSize: 16,
    color: '#666',
    marginVertical: 16,
},
fab: {
    position: 'absolute',
    bottom: 75,
    right: 24,
    backgroundColor: '#d65a75',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
},
plus: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
},
label: { 
    fontWeight: 'bold', 
    fontSize: 16, 
    marginTop: 16 
},
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