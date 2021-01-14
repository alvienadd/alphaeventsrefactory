import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Header = () => {
    return (
        <View>
            <Text style={styles.title}>Sign In</Text>
            <Text>Find Your Best Ever Meal</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    title:{
        fontSize:22,
        fontFamily:'Poppins-Medium',
        color:'#020202'
    }
})
