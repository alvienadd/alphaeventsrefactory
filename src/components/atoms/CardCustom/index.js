import React from 'react'
import { StyleSheet, Text, View,Image} from 'react-native'
import { Gap } from '../../atoms'
import { Accept, Calendar, Chat, Decline, Minutes, Person, ProfPic } from '../../../assets';


const CardCustom = ({nopesanan='F-156855991',name='Jhony',quantity='4 Person',time='07:00',detailstime='Wed, December 19,2018'}) => {
    return (
        <View style={{alignItems:'center'}}>
        <View style={{width:'86%',height:200,backgroundColor:'white'}}>
            <View style={{alignItems:'flex-end'}}>
            <Text style={{alignItems:'flex-end',fontFamily:'Helvetica',fontSize:14,paddingHorizontal:10,paddingVertical:10,color:'#C91130'}}>{nopesanan}</Text>
            </View>
            <Gap height={1}/>
            <View style={{flexDirection:'row'}}>
                <Image source={ProfPic} style={{width:80,height:80,marginHorizontal:20}}/>
                <View style={{flexDirection:'column'}}>
                    <Text style={{fontFamily:'Helvetica-Bold',fontSize:14}}>{name}</Text>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Image source={Person} style={{marginVertical:5}}/>
                        <Text style={{marginHorizontal:4,fontFamily:'Helvetica-Bold',fontSize:12,color:'#C91130'}}>{quantity}</Text>
                        <Image source={Minutes} style={{marginHorizontal:8}}/>
                        <Text style={{marginHorizontal:4,fontFamily:'Helvetica-Bold',fontSize:12,color:'#C91130'}}>{time}</Text>
                    </View>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Image source={Calendar} style={{marginVertical:8}}/>
                        <Text style={{marginHorizontal:4,fontFamily:'Helvetica-Bold',fontSize:12,color:'#C91130'}}>{detailstime}</Text>
                    </View>
                </View>
            </View>
            <View style={{flexDirection:'row',width:'90%',height:'26%',backgroundColor:'white',borderColor:'grey',borderWidth:1,marginHorizontal:14,marginVertical:10}}>
                <View style={{width:'33.33%',height:'100%',backgroundColor:'white',borderColor:'grey',borderWidth:1,justifyContent:'center',alignItems:'center'}}>
                    <Image source={Decline}/>
                    <Text style={{fontSize:12,fontFamily:'Helvetica'}}>Decline</Text>
                </View>
                <View style={{width:'33.33%',height:'100%',backgroundColor:'white',borderColor:'grey',borderWidth:1,justifyContent:'center',alignItems:'center'}}>
                    <Image source={Chat}/>
                    <Text style={{fontSize:12,fontFamily:'Helvetica'}}>Chat</Text>
                </View>
                <View style={{width:'33.34%',height:'100%',backgroundColor:'white',borderColor:'grey',borderWidth:1,justifyContent:'center',alignItems:'center'}}>
                    <Image source={Accept}/>
                    <Text style={{fontSize:12,fontFamily:'Helvetica'}}>Accept</Text>
                </View>

            </View>
        </View>
    </View>
    )
}

export default CardCustom

const styles = StyleSheet.create({})
