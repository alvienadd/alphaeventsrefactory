import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import {Header} from '../../components';

const Order = () => {
    return (
        <View style={styles.container}>
            <Header title="Book Table"/>
        </View>
    )
}

export default Order

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column'
    }
})
