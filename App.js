import { StatusBar } from 'expo-status-bar'
import { SafeAreaView, StyleSheet, View } from 'react-native'
import { Provider } from 'react-redux'
import { store } from './src/redux/store'
import MainNavigator from './src/navigation/MainNavigator'
import Home from './src/pages/Home'

export default function App() {

  return (

    <SafeAreaView style={styles.container}>
        <Provider store={store}>
          <Home />
          <StatusBar style="auto" />
        </Provider>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'

  },
  safeView:{
    marginTop:20
  }
});
