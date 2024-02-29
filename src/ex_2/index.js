import {View, Text} from 'react-native';

function Props({mensagem}) {
    return (
      <View>
        <Text>Mensagem: {mensagem}</Text>
      </View>
    );
}

export default Props;