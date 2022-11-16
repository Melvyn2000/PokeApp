import React from 'react';
import { View, Text, Image, ScrollView, TextInput } from 'react-native';

const CoreApp = () => {
    return (
        <ScrollView>
            <Text>Title</Text>
            <View>
                <Text>Subtitle</Text>
                <Image source={{url: 'https://reactnative.dev/docs/assets/p_cat2.png'}} style={{width: 200,height: 200}} />
            </View>
            <TextInput style={{height:40,borderColor:'gray',borderWidth:1}} defaultValue="Default Value ..."/>
        </ScrollView>
    );
}

export default CoreApp;