import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import {Header} from '../../components';

const Menu = () => {
    return (
        <View style={styles.container}>
            <Header title="Menu"/>
            <Text style={{flex:1,marginHorizontal:20}}>Menu Page</Text>
        </View>
    )
}

export default Menu

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column'
    }
})
