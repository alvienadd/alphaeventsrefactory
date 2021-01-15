import React from 'react'
import { StyleSheet, Text, View,Dimensions } from 'react-native'

import {Header, HomeTabSection} from '../../components';

 
const Order = () => {

    return (
        <View style={styles.container}>
            <Header title="Book Table"/>
            <HomeTabSection/>
        </View>
    )
}

export default Order

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        justifyContent:'flex-start'
    }
})
