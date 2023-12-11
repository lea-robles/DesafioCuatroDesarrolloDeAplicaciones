import {StyleSheet, Text, TouchableHighlight, TouchableOpacity} from 'react-native'
import Card from './Card'
import { colors } from '../global/colors'

const CategoryItem = ({ category }) => {

  return (
    <TouchableOpacity onPress={null} > 
      <Card style={styles.container}>
        <Text style={styles.text}>{category}</Text>
      </Card>
    </TouchableOpacity>
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
    textTransform: 'capitalize'
  }
})