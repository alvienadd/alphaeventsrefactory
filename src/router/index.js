import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SignIn,Order,Account,Menu,Promo} from '../pages';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomNavigator} from '../components';

const Stack=createStackNavigator();
const Tab=createBottomTabNavigator();

const MainApp=()=>{
    return(
        <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
            <Tab.Screen name="Schedule" component={Order}/>
            <Tab.Screen name="Menu" component={Menu}/>
            <Tab.Screen name="Promo" component={Promo}/>
            <Tab.Screen name="Account" component={Account}/>
        </Tab.Navigator>
    )
}

const Router=()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="SignIn" component={SignIn} options={{headerShown:false}}/>
            <Stack.Screen name="Order" component={Order} options={{headerShown:false}}/>
            <Stack.Screen name="MainApp" component={MainApp} options={{headerShown:false}}/>
        </Stack.Navigator>
    )
}

export default Router;