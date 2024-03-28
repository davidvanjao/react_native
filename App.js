import { StyleSheet, Text, View } from 'react-native';


//import Props from from './src/atividade_1';
//import Atividade_3 from './src/atividade_3';
import Atividade_4 from './src/atividade_4';



//import Exemplo_3 from './src/ex_3';
//import Exemplo_4 from './src/ex_4';

export default function App() {
  return (
    <View style={styles.container}>
      <Atividade_4/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B71C1C',
    alignItems: 'center',
    justifyContent: 'center',
    padding:10,

  }
});
