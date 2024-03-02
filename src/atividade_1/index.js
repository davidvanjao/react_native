import { StyleSheet, View, Text, Image} from 'react-native';
import Lista from './lista';
import styles from './styles.js';

export default function Props() {
  return (
    <View style={styles.container}>      
      <Image 
        source={require('../../assets/002-1-react-native.png')}
        style={styles.image}        
      />
      <Text style={styles.titulo}>Titulo</Text>
      <Lista/>
    </View>
  );
}

