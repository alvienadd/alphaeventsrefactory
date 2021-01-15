import React from 'react'
import { StyleSheet, Text, View,ImageBackground} from 'react-native'
import {HeaderImages} from '../../../assets' 

const Header = ({title,height=50,pdingTop=10}) => {
    return (
        <View style={styles.container}>
             <ImageBackground source={HeaderImages} style={styles.image(height)}>
                <Text style={styles.title(pdingTop)}>{title}</Text>
             </ImageBackground>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:50,
    },
    title:(pdingTop)=>({
        fontSize:22,
        fontFamily:'Poppins-Medium',
        color:'#FFFFFF',
        paddingHorizontal:40,
        paddingTop:pdingTop
    }),  
    image:(height)=>({
        width:'120%',
        height:height,
        flex:1,
        marginHorizontal:-20
    })
})
