import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './src/screens/CategoriesScreen'
import { useFonts } from 'expo-font'

export default function App() {

  const [fontLoaded] = useFonts({
    'Roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-regular': require('./assets/fonts/Roboto-Regular.ttf')
  })
  
  if(!fontLoaded) return (
    <View style={styles.containerSpinner}>
      <ActivityIndicator style={styles.loadedSpinner}/>
      <Text>Cargando...</Text>
    </View>
  )

  return (
    <CategoriesScreen/>
  );
}

const styles = StyleSheet.create({
  containerSpinner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loadedSpinner: {
    paddingBottom: 15
  }
})