import React, { useState } from "react";
import { NavigationContainer, useTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Divider, VStack, styled } from "@gluestack-ui/themed";

import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Text, StatusBar, Pressable, Image } from "react-native";

import HomeScreen from "../screens/HomeScreen";
import MenuScreen from "../screens/MenuScreen";
import ShoppingCartScreen from "../screens/ShoppingCartScreen";
import AccountScreen from "../screens/AccountScreen";
import { Colors } from "react-native/Libraries/NewAppScreen";

const Tab = createBottomTabNavigator();

const Navigation = () => {
    return(
        <NavigationContainer>
            <MyTab/>
        </NavigationContainer>
    )
}

const MyTab = () => {
    return(
        <Tab.Navigator
            screenOptions={({route}) => ({
                tabBarIcon:({ focused, size, Colors}) => {
                    let iconName;
                    if ( route.name === 'Home'){
                        iconName = focused ? 'home' : 'home-outline';
                    } else if ( route.name === 'Menu'){
                        iconName = focused ? 'dots-horizontal-circle' : 'dots-horizontal-circle-outline';
                    } else if ( route.name === 'Cart'){
                        iconName = focused ? 'cart' : 'cart-outline';
                    } else if ( route.name === 'Account'){
                        iconName = focused ? 'account' : 'account-outline';
                    }
                    return <MaterialCommunityIcons name={iconName} size={size} color='#FFFFFF' />
                },
                tabBarActiveBackgroundColor:'#363636',
                tabBarInactiveBackgroundColor:'#1D1D1D',
                tabBarActiveTintColor:'#FFF',
                tabBarInactiveTintColor:'#FFF',
                tabBarShowLabel:false,
                tabBarStyle:{
                    height:60,
                }
            })}
            >
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Menu" component={MenuScreen}/>
                <Tab.Screen name="Cart" component={ShoppingCartScreen}/>
                <Tab.Screen name="Account" component={AccountScreen}/>
            </Tab.Navigator>
    )
}

export default Navigation;