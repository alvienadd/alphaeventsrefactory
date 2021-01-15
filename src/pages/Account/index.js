import React from 'react'
import { StyleSheet, Text, View,Image,ScrollView,Dimensions} from 'react-native'

import {Gap, Header, TextInput} from '../../components';
import {ProfPic,Maps} from '../../assets';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Account = () => {
    return (
        <ScrollView style={styles.container} style={{marginTop:-18}}>
             <View style={{flex:1}}>
                <Header title="My Account" height={160} pdingTop={22}/>
             </View>
            <View style={{flex:1,alignItems:'center',paddingVertical:10}}>
                <Image source={ProfPic}/>
                <Gap height={14}/>
                <Text style={{fontFamily:'Helvetica',color:'#9F9F9F'}}>change photo</Text>
            </View>
            <Gap height={20}/>
            <Text style={{marginLeft:windowWidth*0.1+20}}>Vendor Name :</Text>
            <Gap height={10}/>
            <View style={{alignItems:'center'}}>    
                <TextInput style={styles.textinput} placeholder="Eden" paddingLeft={12}/>
            </View>
            <Gap height={10}/>
            <Text style={{marginLeft:windowWidth*0.1+20}}>Last Name :</Text>
            <Gap height={10}/>
            <View style={{alignItems:'center'}}>    
                <TextInput style={styles.textinput} placeholder="Cafe And Restaurant" paddingLeft={12}/>
            </View>
            <Gap height={10}/>
            <Text style={{marginLeft:windowWidth*0.1+20}}>Email :</Text>
            <Gap height={10}/>
            <View style={{alignItems:'center'}}>    
                <TextInput style={styles.textinput} placeholder="edenresto@gmail.com" paddingLeft={12}/>
            </View>
            <Gap height={10}/>
            <Text style={{marginLeft:windowWidth*0.1+20}}>Phone Number :</Text>
            <Gap height={10}/>
            <View style={{flexDirection:'row',justifyContent:'center'}}>
                <View style={{justifyContent:'space-between'}}>    
                    <TextInput style={styles.textinput} widthx={windowWidth*0.2} placeholder="+62" paddingLeft={12}/>
                </View>
                <View style={{marginLeft:6}}>    
                    <TextInput style={styles.textinput} widthx={windowWidth*0.55} placeholder="" paddingLeft={12}/>
                </View>
            </View>
            <Gap height={10}/>
            <Text style={{marginLeft:windowWidth*0.1+20}}>Location :</Text>
            <Gap height={10}/>
            <View style={{flex:1,alignItems:'center',paddingVertical:10}}>
                <Image source={Maps} style={{alignItems:'center',width:windowWidth*0.7,height:windowHeight*0.2}}/>
            </View>
            <Gap height={20}/>
        </ScrollView>
    )
}

export default Account

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column'
    },
    profpic:{
        alignItems:'center',
        justifyContent:'center'
    },
    textinput:{
        height:48,
    },
    input:{
        flex:1,
        flexDirection:'column',
        alignItems:'center',
    },
})
