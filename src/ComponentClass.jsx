import React, {Component} from "react";
import {Text, View} from 'react-native';

class HelloWorldClass extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
              }}>
              <Text>Hello, world!</Text>
              <Text>Component Class</Text>
            </View>
        );
    }
}

export default HelloWorldClass;