import { Text, View, ActivityIndicator, Image, StyleSheet, FlatList } from 'react-native'
import products_data from '../data/products_data.json'
import { useEffect, useState } from 'react'
import { Header } from '../components'

const ProductDetailScreen = ({ productId, returnHandlerEvent }) => {

 const [productSelect, setProductSelect] = useState({})
 const [isLoading, setIsLoading] = useState(true)

 useEffect(() => {
  const productFound = products_data.find(product => product.id === productId)
  setProductSelect(productFound)
  setIsLoading(false)
 }, [productId])

 const renderItem = ({ item }) => (
  <View>
    <View style={styles.containerImage}>
     <Image
       style={styles.productImage}
       resizeMode='cover'
       source={{ uri: item.images[0] }}
     />
    </View>
    <View style={styles.containerText}>
     <Text>{item.title}</Text>
     <Text>${item.price}</Text>
     <Text>{item.description}</Text>
    </View>
  </View>
 )

 return (
  <>
    {
      isLoading
        ?
        <View>
          <ActivityIndicator />
          <Text>Cargando...</Text>
        </View>
        :
        <View>
          <FlatList
            data={[productSelect]}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
            ListHeaderComponent={() => <Header title='Detalles del producto' returnHandlerEvent={() => returnHandlerEvent()} />}
            stickyHeaderIndices={[0]}
          />
        </View>
    }
  </>
 )
}

export default ProductDetailScreen

const styles = StyleSheet.create({
 productImage: {
  width: 300,
  height: 300
 },
 containerImage: {
  margin: 30,
  alignItems: 'center'
 },
 containerText: {
  alignItems: 'center',
  margin: 5
 }
})
