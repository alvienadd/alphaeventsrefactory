import React from 'react'
import { StyleSheet, View,Text,Image } from 'react-native'
import {Google as GImage} from '../../../assets';

const Google = () => {
    return (
        <View style={styles.card}>
            <View style={{flexDirection:'row',paddingTop:6}}>
                <Image source={GImage} style={styles.image}/>
                <Text style={{color:'#BB163A',fontFamily:'Helvetica'}}>Sign In With Google</Text>
            </View>
        </View>
    )
}

export default Google

const styles = StyleSheet.create({
    card:{
        width:'70%',
        height:32,
        marginTop:12,
        backgroundColor:'#E5DED9',
        elevation:3,
        shadowOffset:{width:1,height:1},
        shadowColor:'#333',
        shadowOpacity:0.5
    },
    image:{
        marginHorizontal:30,
    }
})
