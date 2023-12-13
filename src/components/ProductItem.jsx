import React, { useState } from 'react'
import { StyleSheet, Text, Image, TouchableOpacity, View } from 'react-native'
import Card from './Card'
import { colors } from '../global/colors'

const ProductItem = ({ product }) => {
    const [isPressed, setIsPressed] = useState(false)

    const onPressButton = () => {
        setIsPressed(!isPressed)
    }

    return (
        <Card style={styles.container}>
            <TouchableOpacity onPress={onPressButton} underlayColor={colors.primary}>
                <View style={styles.containerFlex}>
                <Text style={styles.Text}>{product.title}</Text>
                <Image
                    style={styles.productImage}
                    resizeMode='cover'
                    source={{ uri: product.thumbnail}}
                />
                </View>
            </TouchableOpacity>
        </Card>

    )
}

export default ProductItem

const styles = StyleSheet.create({
    container: {
        margin: 10,
        padding: 15,
        backgroundColor: colors.secondary,
    },
    containerFlex: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    Text: {
        fontFamily: 'Roboto-regular'
    },
    productImage: {
        width: 50,
        height: 50
    }
})
