import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';

const Cat = (props) => {
    const [isHungry, setIsHungry] = useState(true);

    return (
        <View>
            <Text>
                I'm {props.name}, and I am {isHungry ? 'Hungry' :['full']}!
            </Text>
            <Button 
                onPress={() => { setIsHungry(false); }}
                disabled={!isHungry}
                title={isHungry ? "Pour me some milk, please!" : "Thank you!"}
            />
        </View>
    );
}

const CafeState = () => {
    return (
        <View>
            <Cat name="Laurine" />
            <Cat name="Boubou" />
        </View>
    );
}

export default CafeState;