import { StyleSheet, Text, View } from 'react-native'
import {colors} from '../global/colors'
import { AntDesign } from '@expo/vector-icons'

const Header = ({ title , returnHandlerEvent}) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>{title}</Text>
      <AntDesign onPress={() => returnHandlerEvent()} name="home" size={30} color={colors.secondary} />
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  headerContainer: {
    height: 100,
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.primary,
    paddingHorizontal: 20
  },
  headerTitle: {
    color: colors.secondary,
    fontFamily: "Roboto-bold",
    fontSize: 25
  }
})