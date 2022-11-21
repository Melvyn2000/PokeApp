import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HelloWorldFunction from './src/ComponentFunction';
import HelloWorldClass from './src/ComponentClass';
import CoreApp from './src/CoreComponent';
import FirstComponent from './src/FirstComponent';
import { CafeProps, CatApp } from './src/Props';
import CafeState from './src/State';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

//export default HelloWorldFunction;
//export default HelloWorldClass;
//export default CoreApp;
// ...
export default CafeState;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
