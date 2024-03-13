import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#F5F5F5',
        width:'100%',
        alignItems: 'center',
        padding: 8,
    },
    titulo: {
        fontSize: 30,
        fontWeight:'bold', 
        margin: 8,
        marginBottom: 20,
    },
    corpoOlaMundo: {
        backgroundColor: '#ccc',
        width:'100%',
        padding:30
    },

    textoOlaMundo: {
        textAlign:'center',
        fontSize:20,

    },

    corpoRetangulo: {
        borderWidth: 1,
        width:'100%',
        marginTop:10,
        padding:10,

    },

    corpoDisplay: {
        flexDirection: 'row',
        justifyContent: 'center'

    },

    botao: {
        width: 40,
        height: 40,
        padding: 10,
        backgroundColor: '#000',
        color: '#f5f5f5',
        fontSize:20,
        alignItems: 'center',
    },
    txtBotao: {
        color: '#f5f5f5',
        fontSize: 20
    },
    numero: {
        width: 40,
        height: 40,
        textAlign:'center',
        lineHeight:40,
        fontSize: 20
    },

    corpoZerar: {
        marginTop:10,
        alignItems:'center'

    },
    botaoZerar: {
        backgroundColor:'black',
        padding:10,
        borderRadius:20,
        width:120,

    },
    txtZerar: {
        color:'#fff',
        textAlign:'center'
    }




  });

  export default styles;