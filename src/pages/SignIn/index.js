import React from 'react'
import { ImageBackground, StyleSheet, Text, View,Image,ScrollView} from 'react-native'

import {BackgroundImages,Logo} from '../../assets'
import {Button,Header,TextInput,Gap,Google} from '../../components'
import {BgColor} from '../../assets' 



const SignIn = ({navigation}) => {
    return (
        <View style={styles.container}>
           
            <ImageBackground source={BackgroundImages} style={styles.image}>
            <ScrollView>
                <View style={styles.logo}>
                    <Image source={Logo}/>
                </View>
                <View style={styles.input}>
                    <TextInput style={styles.textinput} placeholder="email address" paddingLeft={12}/>
                    <Gap height={14}/>
                    <TextInput style={styles.textinput} placeholder="password"/>
                    <Gap height={14}/>
                    <Button title="Login" onPress={()=>navigation.navigate('MainApp')}/>
                </View>
                <Gap height={14}/>
                    <Text style={{color:'#BB163A',textAlign:'center',fontFamily:'Helvetica'}}>Forgot Password ?</Text>
                <Gap height={14}/>
                <View style={styles.highlightor}>
                  {/* <Button title="Sign UP"/> */}
                  <Text style={{textAlign:'center'}}>OR</Text>
                  <Google/>
                  <Gap height={20}/>
                  <View style={{    width:'80%',height:'80%',paddingHorizontal:2,}}>
                  <ImageBackground source={BgColor} style={styles.imagebtn}>
                  <View style={{flexDirection:'row'}}>
                    <Text style={{fontFamily:'Brown-Bold',color:'#ffffff'}}>Don't Have Account ? </Text>
                    <Text style={{color:'#ffffff',fontFamily:'Brown-Bold'}}>Sign Up Here</Text>
                  </View>
                  </ImageBackground>
                </View>
                </View>
            </ScrollView>
            </ImageBackground>
        </View>
    )
}

export default SignIn

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column'
    },
    image:{
        flex:1,
        resizeMode:'cover',
    },
    textinput:{
        height:48,
    },
    logo:{
        flex:1,
        paddingTop:40,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    },
    input:{
        flex:2,
        flexDirection:'column',
        alignItems:'center'
    },
    highlightor:{
        flex:1,
        flexDirection:'column',
        alignItems:'center'
    },
    imagebtn:{
        width:'100%',
        height:50,
        justifyContent:'center',
        alignItems:'center'
    }
})
