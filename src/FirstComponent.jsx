import React from 'react';
import {Text, View} from 'react-native';

const getNameforPets = (secondname, thirdname) => {
    return secondname+' '+thirdname;
}

// Attention !!! Pour créer des "balises" React personnalisées il faut utiliser le nommage CamelCase !!!
const Repeat = () => {
    return (
        <View>
            <Text>I'm also a cat...</Text>
        </View>
    );
}

const FirstComponent = () => {
    const firstname = 'Riiètte';
    return (
        <View>
            <Text>Hello, my name is {firstname}, {getNameforPets('Ruby', 'and Puddyng')}, we are cat !</Text>
            <Repeat />
            <Repeat />
            <Repeat />
            <Repeat />
        </View>
    );
}

export default FirstComponent;