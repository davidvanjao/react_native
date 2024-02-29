//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Props from './src/atividade_1';

export default function App() {
  return (
    <View style={styles.container}>
      <Props/>
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
