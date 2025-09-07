import { StyleSheet } from 'react-native';

export default StyleSheet.create({
container: {
    flex: 1,
    paddingTop: 20,
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
modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    justifyContent: 'center',
    alignItems: 'center',
},
modalContent: {
    width: '85%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    elevation: 5,
},
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
},
modalText: {
    fontSize: 16,
    marginBottom: 8,
},
modalEditBtn: {
    marginTop: 15,
    backgroundColor: '#d65a75',
    paddingVertical: 10,
    borderRadius: 6,
    alignItems: 'center',
},
modalEditText: {
    color: '#fff',
    fontWeight: 'bold',
},
closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
}
});