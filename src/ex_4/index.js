import { View, Text, TouchableOpacity, Pressable } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import { TextInput } from "react-native-web";

export default function Exemplo_4() {
    const [mensagem, setMensagem] = useState('MENSAGEM 1');
    const [mensagem2, setMensagem2] = useState('MENSAGEM 2');
    const [mensagemTela, setMensagemTela] = useState('');

  
    return (
    <View style={styles.container}>
        <Text style={styles.titulo}>Exemplo 4</Text> 

        <Text style={styles.txtSaida}>{mensagemTela}</Text> 

        <TextInput 
            style={styles.txtEntrada}
            placeholder=''
            inChangeText={(txt) => setMensagem(txt)}
        />

        <Text style={styles.txtSaida}>{mensagemTela}</Text> 

        <TextInput 
            style={styles.txtEntrada}
            placeholder=''
            inChangeText={(txt2) => setMensagem2(txt2)}
        />

        <Pressable onPress={()=> setMensagemTela(mensagem2)}>
            <Text>Exibir mensagem</Text> 
        </Pressable>
    </View>
    );
}