import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import { useState } from 'react'
import { Ionicons, Entypo } from '@expo/vector-icons'

const Search = ({onSearchHandlerEvent}) => {

    const [searchInput, setSearchInput] = useState('')

    return (
        <View style={styles.container}>
            <TextInput
                onChangeText={setSearchInput}
                style={styles.input}
                placeholder='Buscar...'
                value={searchInput}
            />
            <TouchableOpacity onPress={() => onSearchHandlerEvent(searchInput)}>
                <Ionicons name="search" size={24} color="#646464" />
            </TouchableOpacity>
            <TouchableOpacity onPress={null}>
                <Entypo name="cross" size={24} color="#646464" />
            </TouchableOpacity>
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        borderWidth: 2,
        borderRadius: 10,
        margin: 5,
        padding: 3,
        borderColor: '#BFBDBD'
    },
    input: {
        width: '80%'
    }
})