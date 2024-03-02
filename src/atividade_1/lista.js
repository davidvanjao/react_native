import { StyleSheet, View, Text} from 'react-native';

export default function Texto() {
  return (
    <View style={styles.container}>
      
      <Text style={styles.texto}>Nome 1</Text>
      <Text style={styles.texto}>Nome 2</Text>
      <Text style={styles.texto}>Nome 3</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  titulo: {
    fontSize:20,
    fontWeight: 'bold',
    marginBottom:20,
    color: '#405FAA'

  },
  texto: {
    fontSize:12,
    color: '#405FAA'

  }
});