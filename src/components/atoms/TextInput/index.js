import React from 'react'
import { StyleSheet, Text, View,TextInput as TextInputRN,Dimensions } from 'react-native'

const windowWidth = Dimensions.get('window').width;

const TextInput = ({placeholder,widthx=windowWidth*0.8}) => {
    return (
        <View style={styles.container}>
            <TextInputRN style={styles.inputView(widthx)} placeholder={placeholder}></TextInputRN>
        </View>
    )
}

export default TextInput

const styles = StyleSheet.create({
    container:{
        width:'80%'
    },  
    inputView:(widthx)=>({
        backgroundColor:'#FFFFFF',
        borderRadius:30,
        width:widthx,
        paddingLeft:25
    })
})
