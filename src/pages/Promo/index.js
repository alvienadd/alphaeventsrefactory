import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import {Header} from '../../components';

const Promo = () => {
    return (
        <View style={styles.container}>
            <Header title="Promo"/>
            <Text style={{flex:1,marginHorizontal:20}}>Promo Page</Text>
        </View>
    )
}

export default Promo

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column'
    }
})
