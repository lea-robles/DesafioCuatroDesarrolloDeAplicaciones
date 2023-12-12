import { FlatList, Text } from 'react-native'
import React from 'react'
import products_data from '../data/products_data.json'
import ProductItem from '../components/ProductItem'
import Header from '../components/Header'
import { useEffect, useState } from 'react'
import Search from '../components/Search'

const ProductsByCategoryScreen = ({category, returnHandlerEvent}) => {

  const [productsByCategory, setProductsByCategory] = useState([])
  const [search, setSearch] = useState('')

  useEffect(()=>{
    const productsFiltered = products_data.filter(product => product.category === category)
    const productsFilteredSearch = productsFiltered.filter(
      product => product.title.toLowerCase().includes(search.toLowerCase())
    )
    setProductsByCategory(productsFilteredSearch)
  },[category, search])

  const renderProductItem = ({ item }) => (
    <ProductItem product={item} />
  )

  const onSearch = (search) => {
    setSearch(search)
  }

  return (
    <>
      <Header title='Productos' returnHandlerEvent={() => returnHandlerEvent()}/>
      <Search onSearchHandlerEvent={onSearch}/>
      <FlatList
        data={productsByCategory}
        renderItem={renderProductItem}
        keyExtractor={item => item.id}
        ListEmptyComponent={<Text>No hay productos para mostrar</Text>}
      />
    </>
  )
}

export default ProductsByCategoryScreen