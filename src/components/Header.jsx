import { StyleSheet, Text, View } from 'react-native'
import {colors} from '../global/colors'
import { AntDesign } from '@expo/vector-icons'

const Header = ({ title , returnHandlerEvent}) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>{title}</Text>
      <AntDesign onPress={() => returnHandlerEvent()} name="home" size={24} color="black" />
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  headerContainer: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary
  },
  headerTitle: {
    color: colors.secondary,
    fontFamily: "Roboto-bold",
    fontSize: 25
  }
})