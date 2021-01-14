import React from 'react'
import { StyleSheet, Text, View,ImageBackground} from 'react-native'
import {HeaderImages} from '../../../assets' 

const Header = ({title}) => {
    return (
        <View style={styles.container}>
             <ImageBackground source={HeaderImages} style={styles.image}>
                <Text style={styles.title}>{title}</Text>
             </ImageBackground>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:50,
        flex:1
    },
    title:{
        fontSize:22,
        fontFamily:'Poppins-Medium',
        color:'#FFFFFF',
        paddingHorizontal:40,
        paddingTop:10
    },  
    image:{
        width:'120%',
        height:50,
        flex:1,
        marginHorizontal:-20
    }
})
