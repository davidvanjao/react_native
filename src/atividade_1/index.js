import { StyleSheet, View, Text, Image} from 'react-native';
import Lista from './lista';

export default function Props() {
  return (
    <View style={styles.container}>      
      <Image 
        source={require('../../assets/002-1-react-native.png')}
        style={styles.image}
      />
      <Lista/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E1F2FC',
    width:'100%'
  },
  image: {
    width:'90%',
    height: '15%',
    margin: 10,
    resizeMode: 'stretch'
  },
});