import { StyleSheet, Text, TouchableHighlight, TouchableOpacity } from 'react-native'
import Card from './Card'
import { colors } from '../global/colors'

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

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    margin: 7,
    padding: 15
  },
  text: {
    textTransform: 'capitalize',
    fontFamily: 'Roboto-regular'
  }
})