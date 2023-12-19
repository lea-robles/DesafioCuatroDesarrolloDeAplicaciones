import { Text, TouchableOpacity } from 'react-native'
import Card from '../Card'
import { styles } from './styles'

const CategoryItem = ({ category, onSelectCategoryEvent }) => {

  return (
    <Card style={styles.container}>
      <TouchableOpacity onPress={() => onSelectCategoryEvent(category)} >
        <Text style={styles.text}>{category}</Text>
      </TouchableOpacity>
    </Card>
  )
}

export default CategoryItem

