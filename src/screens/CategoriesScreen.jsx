import { FlatList } from 'react-native'
import { CategoryItem, Header } from '../components'
import categories_data from '../data/categories_data.json'

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