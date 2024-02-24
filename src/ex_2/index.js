import {View, Text} from 'react-native';

function Props({mensagem, nome}) {
    return (
      <View>
        <Text>{(mensagem ? mensagem : nome)}</Text>
      </View>
    );
}

export default Props;