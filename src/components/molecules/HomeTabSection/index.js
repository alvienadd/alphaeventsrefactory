import React from 'react'
import { StyleSheet, Text, View,Dimensions,Image,ScrollView} from 'react-native'
import { TabView, SceneMap, TabBar} from 'react-native-tab-view';
import { Calendar, Minutes, Person, ProfPic } from '../../../assets';
import { CardCustom, Gap } from '../../atoms';
import { Accept, Chat, Decline } from '../../../assets';

const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: '#C9113D' }}
      style={{ backgroundColor: 'white' }}
      tabStyle={{}}
      renderLabel={({ route, focused, color }) => (
        <Text style={{fontFamily:'Brown-Bold',color:focused?'#C9113D':'#777777'}}>
        {route.title}
        </Text>
      )}
    />
  );

const FirstRoute = ({foo}) => (
    // console.log('Foo',{foo})
    <ScrollView style={{ backgroundColor:'#000000',flex:1,marginTop:30}}>
        {/* <CardCustom contents={content}/> */}
        {/* <Gap height={30}/>
        <CardCustom name='Silva'/>
        <Gap height={30}/>
        <CardCustom name='Nopa'/>
        <Gap height={30}/>
        <CardCustom name='Alvien'/>
        <Gap height={30}/> */}
        {foo.map((person, i) => {
        return(
        <View style={{alignItems:'center'}}>
        <Gap height={30}/>
        <View key={i} style={{width:'86%',height:200,backgroundColor:'white'}}>
            <View style={{alignItems:'flex-end'}}>
            <Text style={{alignItems:'flex-end',fontFamily:'Helvetica',fontSize:14,paddingHorizontal:10,paddingVertical:10,color:'#C91130'}}>F-156855991</Text>
            </View>
            <Gap height={1}/>
            
                    <View key={i} style={{flexDirection:'row'}}>
                        <Image source={ProfPic} style={{width:80,height:80,marginHorizontal:20}}/>
                        <View style={{flexDirection:'column'}}>
                            <Text style={{fontFamily:'Helvetica-Bold',fontSize:14}}>{person.name}</Text>
                            <View style={{flexDirection:'row',alignItems:'center'}}>
                                <Image source={Person} style={{marginVertical:5}}/>
                                <Text style={{marginHorizontal:4,fontFamily:'Helvetica-Bold',fontSize:12,color:'#C91130'}}>4 Person</Text>
                                <Image source={Minutes} style={{marginHorizontal:8}}/>
                                <Text style={{marginHorizontal:4,fontFamily:'Helvetica-Bold',fontSize:12,color:'#C91130'}}>07:00</Text>
                            </View>
                            <View style={{flexDirection:'row',alignItems:'center'}}>
                                <Image source={Calendar} style={{marginVertical:8}}/>
                                <Text style={{marginHorizontal:4,fontFamily:'Helvetica-Bold',fontSize:12,color:'#C91130'}}>Wed, December 19,2018</Text>
                            </View>
                        </View>
                
                    </View>
            
            <View style={{flexDirection:'row',width:'90%',height:'26%',backgroundColor:'white',borderColor:'white',borderWidth:1,marginHorizontal:14,marginVertical:10}}>
                <View style={{width:'33.33%',height:'100%',backgroundColor:'#C91130',borderColor:'white',borderWidth:1,justifyContent:'center',alignItems:'center'}}>
                    <Image source={Decline}/>
                    <Text style={{fontSize:12,fontFamily:'Helvetica',color:'white'}}>Accept</Text>

                </View>
                <View style={{width:'33.33%',height:'100%',backgroundColor:'#C91130',borderColor:'white',borderWidth:1,justifyContent:'center',alignItems:'center'}}>
                    <Image source={Chat}/>
                    <Text style={{fontSize:12,fontFamily:'Helvetica',color:'white'}}>Chat</Text>
                </View>
                <View style={{width:'33.34%',height:'100%',backgroundColor:'#C91130',borderColor:'white',borderWidth:1,justifyContent:'center',alignItems:'center'}}>
                    <Image source={Accept}/>
                    <Text style={{fontSize:12,fontFamily:'Helvetica',color:'white'}}>Decline</Text>
                </View>

            </View>
            
        </View>
    </View>

    );
    })}
    <Gap height={30}/>
    </ScrollView>
  );
   
  const SecondRoute = () => (
    <ScrollView style={{ backgroundColor:'#000000',flex:1,marginTop:30}}>
        <View style={{flexDirection:'column',alignItems:'center'}}>
            <View style={{flexDirection:'row',height:30,backgroundColor:'white',alignItems:'center',justifyContent:'center'}}>
                <View style={{backgroundColor: '#C9113D',flexDirection:'row',justifyContent:'center',alignItems:'center',width:'24%',height:30,borderColor:'#000000',borderWidth:0.2}}>
                    <Text style={{fontFamily:'Helvetica',fontSize:12,color:'white'}}>
                        View Today
                    </Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',width:'24%',height:30,borderColor:'#000000',borderWidth:0.2}}>
                    <Text style={{fontFamily:'Helvetica',fontSize:12,color:'#C9113D'}}>
                        By Week
                    </Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',width:'24%',height:30,borderColor:'#000000',borderWidth:0.2}}>
                    <Text style={{fontFamily:'Helvetica',fontSize:12,color:'#C9113D'}}>
                        By Month
                    </Text>
                </View>
            </View>
        </View>
        <Gap height={30}/>
        <CardCustom/>
        <Gap height={30}/>
    </ScrollView>
  );

  const ThirdRoute = () => (
    <ScrollView style={{ backgroundColor:'#000000',flex:1,marginTop:30}}>
      <View style={{alignItems:'center'}}>
        <View style={{width:'86%',height:200,backgroundColor:'#FFFFFF'}}>
            <View style={{alignItems:'flex-end'}}>
            <Text style={{alignItems:'flex-end',fontFamily:'Helvetica',fontSize:14,paddingHorizontal:10,paddingVertical:10,color:'#C91130'}}>F-156855991</Text>
            </View>
            <Gap height={1}/>
            <View style={{flexDirection:'row'}}>
                <Image source={ProfPic} style={{width:80,height:80,marginHorizontal:20}}/>
                <View style={{flexDirection:'column'}}>
                    <Text style={{fontFamily:'Helvetica-Bold',fontSize:14}}>Jhony</Text>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Image source={Person} style={{marginVertical:5}}/>
                        <Text style={{marginHorizontal:4,fontFamily:'Helvetica-Bold',fontSize:12,color:'#C91130'}}>4 Person</Text>
                        <Image source={Minutes} style={{marginHorizontal:8}}/>
                        <Text style={{marginHorizontal:4,fontFamily:'Helvetica-Bold',fontSize:12,color:'#C91130'}}>07:00</Text>
                    </View>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Image source={Calendar} style={{marginVertical:8}}/>
                        <Text style={{marginHorizontal:4,fontFamily:'Helvetica-Bold',fontSize:12,color:'#C91130'}}>Wed, December 19,2018</Text>
                    </View>
                    <View style={{alignItems:'flex-end',marginTop:20,flexDirection:'row'}}>
                        <View style={{backgroundColor: '#00A713',flexDirection:'row',justifyContent:'center',alignItems:'center',marginRight:6,width:'34%',height:30,borderColor:'#000000',borderWidth:0.2,borderRadius:10}}>
                            <Text style={{fontFamily:'Helvetica-Bold',fontSize:12,color:'white'}}>
                                Finished
                            </Text>
                        </View>
                        <View style={{backgroundColor: '#00A713',flexDirection:'row',justifyContent:'center',alignItems:'center',width:'34%',height:30,borderColor:'#000000',borderWidth:0.2,borderRadius:10}}>
                            <Text style={{fontFamily:'Helvetica-Bold',fontSize:12,color:'white'}}>
                                Accepted
                            </Text>
                        </View>
                    </View>

                </View>
            </View>
        </View>
    </View>
    <Gap height={30}/>
    <View style={{alignItems:'center'}}>
        <View style={{width:'86%',height:200,backgroundColor:'#FFFFFF'}}>
            <View style={{alignItems:'flex-end'}}>
            <Text style={{alignItems:'flex-end',fontFamily:'Helvetica',fontSize:14,paddingHorizontal:10,paddingVertical:10,color:'#C91130'}}>F-156855991</Text>
            </View>
            <Gap height={1}/>
            <View style={{flexDirection:'row'}}>
                <Image source={ProfPic} style={{width:80,height:80,marginHorizontal:20}}/>
                <View style={{flexDirection:'column'}}>
                    <Text style={{fontFamily:'Helvetica-Bold',fontSize:14}}>Silva</Text>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Image source={Person} style={{marginVertical:5}}/>
                        <Text style={{marginHorizontal:4,fontFamily:'Helvetica-Bold',fontSize:12,color:'#C91130'}}>4 Person</Text>
                        <Image source={Minutes} style={{marginHorizontal:8}}/>
                        <Text style={{marginHorizontal:4,fontFamily:'Helvetica-Bold',fontSize:12,color:'#C91130'}}>07:00</Text>
                    </View>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Image source={Calendar} style={{marginVertical:8}}/>
                        <Text style={{marginHorizontal:4,fontFamily:'Helvetica-Bold',fontSize:12,color:'#C91130'}}>Wed, December 19,2018</Text>
                    </View>
                    <View style={{alignItems:'flex-end',marginTop:20,flexDirection:'row'}}>
                        <View style={{backgroundColor: '#00A713',flexDirection:'row',justifyContent:'center',alignItems:'center',marginRight:6,width:'34%',height:30,borderColor:'#000000',borderWidth:0.2,borderRadius:10}}>
                            <Text style={{fontFamily:'Helvetica-Bold',fontSize:12,color:'white'}}>
                                Finished
                            </Text>
                        </View>
                        <View style={{backgroundColor: '#C9113D',flexDirection:'row',justifyContent:'center',alignItems:'center',width:'34%',height:30,borderColor:'#000000',borderWidth:0.2,borderRadius:10}}>
                            <Text style={{fontFamily:'Helvetica-Bold',fontSize:12,color:'white'}}>
                                Declined
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    </View>
    <Gap height={30}/>
    </ScrollView>
  );

  const initialLayout = { width: Dimensions.get('window').width};


const HomeTabSection = ({content}) => {
    console.log('Cp:',content);
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'New Orders'},
        { key: 'second', title: 'Process' },
        { key: 'third', title: 'History' },
    ]);
    
    const renderScene = SceneMap({
        first: () => <FirstRoute foo={content} />,
        second: SecondRoute,
        third: ThirdRoute
    });
    return (
        <View style={{flex:1}}>
             <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={initialLayout}
                renderTabBar={renderTabBar}
            />      
        </View>
    )
}

export default HomeTabSection

const styles = StyleSheet.create({})
