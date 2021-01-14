import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SignIn,Order} from '../pages';

const Stack=createStackNavigator();

const Router=()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="SignIn" component={SignIn} options={{headerShown:false}}/>
            <Stack.Screen name="Order" component={Order} options={{headerShown:false}}/>
        </Stack.Navigator>
    )
}

export default Router;