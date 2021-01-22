import React from 'react'
import { StyleSheet, Text, View,ImageBackground,TouchableOpacity} from 'react-native'
import {BgColor} from '../../../assets' 

const Button = ({title,onPress}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
                <ImageBackground source={BgColor} style={styles.image}>
                    <Text style={styles.title}>{title}</Text>
                </ImageBackground>
            </TouchableOpacity>
        </View>
    )
}

export default Button

const styles = StyleSheet.create({
    container:{
        width:'80%',
        height:'80%',
        paddingHorizontal:2,
    },
    title:{
        textAlign:'center',
        color:'white',
        fontFamily:'Helvetica'
    },  
    image:{
        width:'100%',
        height:50,
        justifyContent:'center',
        alignItems:'center'
    }
})
