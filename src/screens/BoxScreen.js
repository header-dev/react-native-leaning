import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>Box Screen #1</Text>
            <Text style={styles.textStyle}>Box Screen #2</Text>
            <Text style={styles.textStyle}>Box Screen #3</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        flexDirection:'row',
        height: 200
    },
    textStyle: {
        borderWidth: 3,
        borderColor: 'red'
    }
})

export default BoxScreen