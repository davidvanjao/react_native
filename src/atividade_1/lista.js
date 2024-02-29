import { StyleSheet, View, Text, Image} from 'react-native';

export default function Texto() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Titulo</Text>
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
    marginBottom:20

  },
  texto: {
    fontSize:12

  }
});