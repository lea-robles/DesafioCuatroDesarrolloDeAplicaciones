import { FlatList, StyleSheet } from 'react-native'
import Header from '../components/Header'
import categories_data from '../data/categories_data.json'
import CategoryItem from '../components/CategoryItem'

const CategoriesScreen = ({ onSelectCategoryEvent, returnHandlerEvent }) => {

  const renderCategoryItem = ({ item }) => (
    <CategoryItem category={item} onSelectCategoryEvent={onSelectCategoryEvent} />
  )

  return (
    <>
      <Header title='Categorías' returnHandlerEvent={() => returnHandlerEvent()} />
      <FlatList
        data={categories_data}
        renderItem={renderCategoryItem}
        keyExtractor={item => item}
      />
    </>
  )
}

export default CategoriesScreen

const styles = StyleSheet.create({

})