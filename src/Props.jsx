import React from 'react';
import { Text, View, Image } from 'react-native';

const Cat = (props) => {
    return (
        <View>
            <Text>Hello, I am {props.name} !</Text>
        </View>
    );
}

// First example for props
const CafeProps = () => {
    return (
        <View>
            <Cat name="Riiètte"/>
            <Cat name="Ruby" />
        </View>
    );
}

// Real example of props with <Image />
const CatApp = (props) => {
    return (
        <View>
            <Image
                source={{uri: "https://reactnative.dev/docs/assets/p_cat1.png"}}
                style={{width: 200, height: 200}}
            />
            <Cat name="Puddyng" />
        </View>
    );
}
 
export default CatApp;