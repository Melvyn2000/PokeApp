import { StatusBar } from 'expo-status-bar';
import { SectionList, StyleSheet, Text, View } from 'react-native';
import HelloWorldFunction from './src/ComponentFunction';
import HelloWorldClass from './src/ComponentClass';
import CoreApp from './src/CoreComponent';
import FirstComponent from './src/FirstComponent';
import { CafeProps, CatApp } from './src/Props';
import CafeState from './src/State';
import PizzaTranslator from './src/TextInput';
import AppScrolling from './src/ScrollView';
import {FlatlistBasics, SectionlistBasics} from './src/ListView';

// *---* Basic Function *---*
// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

export default function App() {
  return (
    <SectionlistBasics />
  );
}


//export default HelloWorldFunction;
//export default HelloWorldClass;
//export default CoreApp;
// ...
// export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
