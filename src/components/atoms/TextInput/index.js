import React from 'react'
import { StyleSheet, Text, View,TextInput as TextInputRN } from 'react-native'

const TextInput = ({placeholder}) => {
    return (
        <View style={styles.container}>
            <TextInputRN style={styles.inputView} placeholder={placeholder}></TextInputRN>
        </View>
    )
}

export default TextInput

const styles = StyleSheet.create({
    container:{
        width:'80%'
    },  
    inputView:{
        backgroundColor:'#FFFFFF',
        borderRadius:30,
        width:'100%',
        paddingLeft:25
    }
})
