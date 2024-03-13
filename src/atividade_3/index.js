import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import styles from "./styles";

export default function Atividade_3() {
  //let numero = 0;
  const [numero, setNumero] = useState(0);

  function Ola(nome) {
    alert(`Olá ${nome}`);
  }

  function adicionar() {
    const inc = numero + 1;
    setNumero(inc);
  }

  function subtrair() {
    if(numero > 0) {
      const inc = numero - 1;
      setNumero(inc);

    }
  }

  function zerar() {
    const inc = 0;
    setNumero(inc);
  }


    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Exemplo 3</Text> 

        <View style={styles.corpoOlaMundo}>
          <Text style={styles.textoOlaMundo}>Diga "Olá mundo!"</Text> 
        </View>

        <View style={styles.corpoRetangulo}>

          <View style={styles.corpoDisplay}>

            <TouchableOpacity 
              style={styles.botao} 
              onPress={()=> subtrair()}
            >
              <Text style={styles.txtBotao}>-</Text> 
            </TouchableOpacity>

            <Text style={styles.numero}>{numero}</Text> 

            <TouchableOpacity 
              style={styles.botao} 
              onPress={()=> adicionar()}
            >
              <Text style={styles.txtBotao}>+</Text> 
            </TouchableOpacity>

          </View>


          <View style={styles.corpoZerar}>
            <TouchableOpacity 
              style={styles.botaoZerar} 
              onPress={()=> zerar()}
            >
              <Text style={styles.txtZerar}>ZERAR</Text> 
            </TouchableOpacity>
          </View>




        </View>

      </View>
    );
  }