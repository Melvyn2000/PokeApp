import React from 'react';
import { Text, View } from 'react-native';

const HelloWorldFunction = () => {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Text>Hello, world!</Text>
    <Text>Component Function</Text>
    </View>
  );
}

export default HelloWorldFunction;