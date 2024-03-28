import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#FECDD2',
        width:'100%',
        alignItems: 'center',
        padding: 8,
    },
    titulo: {
        fontSize:24,
        fontWeight:'bold',
        color:'#B71C1C',
        marginTop:20,
        marginBottom:20
    },
    campoInput: {
        width:'100%',
        padding:10

    },
    tituloInput: {
        fontSize:15,
        fontWeight:'bold',
        marginBottom:5

    },
    input: {
        borderWidth: 3,
        borderRadius: 4,
        borderColor:'#B71C1C',
        padding: 10
    },
    botao: {
        width:'100%',
        padding:10,
        borderRadius: 4,
        backgroundColor: '#000',
    },
    botaoTexto: {
        color:'#fff',
        fontWeight:'bold',
        textAlign:'center'

    }
    




  });

  export default styles;