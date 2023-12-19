import { Text, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { styles } from './styles'

const Header = ({ title , returnHandlerEvent}) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>{title}</Text>
      <AntDesign style={styles.home} name={"home"} size={30} onPress={() => returnHandlerEvent()}/>
    </View>
  )
}

export default Header