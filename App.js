import { StyleSheet, Text, View } from 'react-native';
//import Props from './src/atividade_1';
import Exemplo_3 from './src/ex_3';

export default function App() {
  return (
    <View style={styles.container}>
      <Exemplo_3/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9FC7E7',
    alignItems: 'center',
    justifyContent: 'center',
    padding:10

  }
});
