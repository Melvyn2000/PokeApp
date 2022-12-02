import React from "react";
import { FlatList, StyleSheet, Text, View, SectionList } from 'react-native';

const styles = StyleSheet.create({
    container : {
        flex : 1,
        paddingTop: 22,
        //backgroundColor: 'orange'
    },
    item : {
        padding: 10,
        fontSize: 18,
        height: 44,
        //backgroundColor: 'lightblue'
    },
    sectionHeader : {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
    } 
});

const FlatlistBasics = () => {
    return (
        <View style={styles.container}>
            <FlatList 
                data={[
                    {key: 'Devin'},
                    {key: 'Dan'},
                    {key: 'Dominic'},
                    {key: 'Jackson'},
                    {key: 'James'},
                    {key: 'Joel'},
                    {key: 'John'},
                    {key: 'Jillian'},
                    {key: 'Jimmy'},
                    {key: 'Julie'},
                    {key: 'Devin'},
                    {key: 'Dan'},
                    {key: 'Dominic'},
                    {key: 'Jackson'},
                    {key: 'James'},
                    {key: 'Devin'},
                    {key: 'Dan'},
                    {key: 'Dominic'},
                    {key: 'Jackson'},
                    {key: 'James'},
                    {key: 'Joel'},
                    {key: 'John'},
                    {key: 'Jillian'},
                    {key: 'Jimmy'},
                    {key: 'Julie'},
                    {key: 'Devin'},
                    {key: 'Dan'},
                    {key: 'Dominic'},
                    {key: 'Jackson'},
                    {key: 'James'},
                ]}
                renderItem={
                    ({item}) => <Text style={styles.item}>{item.key}</Text>
                }
            />
        </View>
    );
}

const SectionlistBasics = () => {
    return (
        <View>
            <SectionList
                sections={[
                    {title: 'D', data: ['Devin', 'Dan', 'Dominic']},
                    {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
                ]}
                renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
                renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                keyExtractor={(item, index) => `basicListEntry-${item.title}`}
            />
        </View>
    );
}

export {FlatlistBasics, SectionlistBasics};