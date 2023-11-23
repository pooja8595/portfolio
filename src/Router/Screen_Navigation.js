import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Screen/Home';
import Work from '../Screen/Work';
import vesta from '../Screen/vesta';
import Akiko from '../Screen/Akiko';
import Maatrika from '../Screen/Maatrika';
import Education from '../Screen/Education';
import Awards from '../Screen/Awards';

const Screen_Navigation = props => {
    const navigation = useNavigation()
    const Stack = createStackNavigator();
    // const { isLoggedIn } = useSelector(state => state?.userReducer)
    return (
        <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }} >
            <Stack.Screen
                options={{ headerShown: false }}
                name={'Home'} component={Home} 
            />
            <Stack.Screen
                options={{ headerShown: false }}
                name={'Work'} component={Work} 
            />
            <Stack.Screen
                options={{ headerShown: false }}
                name={'vesta'} component={vesta} 
            />
            <Stack.Screen
                options={{ headerShown: false }}
                name={'Akiko'} component={Akiko} 
            />
            <Stack.Screen
                options={{ headerShown: false }}
                name={'Maatrika'} component={Maatrika} 
            />
            <Stack.Screen
                options={{ headerShown: false }}
                name={'Education'} component={Education} 
            />
            <Stack.Screen
                options={{ headerShown: false }}
                name={'Awards'} component={Awards} 
            />
          
        </Stack.Navigator >
    )
}

export default Screen_Navigation

const styles = StyleSheet.create({})