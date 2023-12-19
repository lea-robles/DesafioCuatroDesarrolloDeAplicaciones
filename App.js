import { StatusBar, ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import { useFonts } from 'expo-font'
import CategoriesScreen from './src/screens/CategoriesScreen'
import { useState } from 'react'
import ProductsByCategoryScreen from './src/screens/ProductsByCategoryScreen'
import ProductDetailScreen from './src/screens/ProductDetailScreen'

export default function App() {

  const [categorySelected, setCategorySelected] = useState('')
  const [productSelected, setProductSelected] = useState(null)

  const [fontLoaded] = useFonts({
    'Roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
    'Roboto-italic': require('./assets/fonts/Roboto-Italic.ttf'),
    'Roboto-light': require('./assets/fonts/Roboto-Light.ttf')
  })

  if (!fontLoaded) return (
    <View style={styles.containerSpinner}>
      <ActivityIndicator style={styles.loadedSpinner} />
      <Text>Cargando...</Text>
    </View>
  )

  const onSelectCategory = (category) => {
    setCategorySelected(category)
  }

  const onReturnHome = () =>{
    setCategorySelected('')
    setProductSelected(null)
  }

  const onProducSelect = (id) => {
    setProductSelected(id)
  }

  return (
    <>{
      productSelected
      ?
      <ProductDetailScreen productId={productSelected} returnHandlerEvent={onReturnHome}/>
      :
      categorySelected
        ?
        <ProductsByCategoryScreen category={categorySelected} returnHandlerEvent={onReturnHome} onProducSelectEvent={onProducSelect}/>
        :
        <CategoriesScreen onSelectCategoryEvent={onSelectCategory} returnHandlerEvent={onReturnHome} />
    }
      <StatusBar style="auto" />
    </>
  )
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