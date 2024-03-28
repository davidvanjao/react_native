import { View, Text, TextInput, Pressable} from "react-native";
import React, { useState } from "react";
import styles from "./styles";

export default function Atividade_4() {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [nomeSobrenome, setNomeSobrenome] = useState('Nome e Sobrenome');

  //mostra nome e sobrenome na tela
  function mostrarNome() {
    setNomeSobrenome(nome+' '+sobrenome);
    limpar();
    
  }

  //limpa os campos
  function limpar() {
    setNome(''); setSobrenome('');

  }

    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Exemplo 4</Text> 
        <Text style={styles.titulo}>{nomeSobrenome}</Text>

        <View style={styles.campoInput}>
          <Text style={styles.tituloInput}>Nome</Text>           
          <TextInput 
            style={styles.input}
            placeholder='Digite seu nome'
            onChangeText={(txt) => setNome(txt)}
            value={nome}
          />
        </View>

        <View style={styles.campoInput}>
          <Text style={styles.tituloInput}>Sobrenome</Text>           
          <TextInput 
            style={styles.input}
            placeholder='Digite seu sobrenome'
            onChangeText={(txt) => setSobrenome(txt)}
            value={sobrenome}
          />
        </View>

        <View style={styles.campoInput}>
          <Pressable 
            style={styles.botao}
            onPress={()=> mostrarNome()}
          >
              <Text style={styles.botaoTexto}>Exibir texto</Text> 
          </Pressable>


        </View>




      </View>
    );
  }