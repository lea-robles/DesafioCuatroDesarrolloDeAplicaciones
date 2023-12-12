import { StyleSheet, View } from 'react-native'
import React from 'react'

const Card = ({ children, style }) => {
  return (
    <View style={{...styles.container, ...style}}>
      {children}
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
  container: {
    shadowColor: 'black',
    shadowOffset: {
      width: 5,
      height: 7
    },
    elevation: 7,
    shadowOpacity: 1,
  }

})