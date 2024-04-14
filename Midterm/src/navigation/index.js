import React, { useState } from "react";
import { NavigationContainer, useTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Box, Text, KeyboardAvoidingView  } from "@gluestack-ui/themed";

import { Pressable, StyleSheet, Platform } from "react-native";

import HomeScreen from "../screens/HomeScreen";
import MenuScreen from "../screens/MenuScreen";
import ShoppingCartScreen from "../screens/ShoppingCartScreen";
import AccountScreen from "../screens/AccountScreen";
import SearchScreen from "../screens/SearchScreen";
import HeartScreen from "../screens/HeartScreen";
import Men_PerfumeDetailScreen from "../screens/Men_PerfumeDetailScreen";
import Men_PerfumeScreen from "../screens/Men_PerfumeScreen";

import { Colors } from "react-native/Libraries/NewAppScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const Navigation = () => {
    return(
        <KeyboardAvoidingView
            keyboardVerticalOffset={Platform.select({ ios: 0, android: -500 })}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            flex={1}
        >
            <NavigationContainer>
                <MyTab/>
            </NavigationContainer>
        </KeyboardAvoidingView>
    )
}

const MyTab = () => {
    return(
        <Tab.Navigator
            initialRouteName="Homestack"
            screenOptions={({route}) => ({
                tabBarIcon:({ focused, size }) => {
                    let iconName;
                    if ( route.name === 'Homestack'){
                        iconName = focused ? 'home' : 'home-outline';
                    } else if ( route.name === 'Menu'){
                        iconName = focused ? 'dots-horizontal-circle' : 'dots-horizontal-circle-outline';
                    } else if ( route.name === 'Cartstack'){
                        iconName = focused ? 'cart' : 'cart-outline';
                    } else if ( route.name === 'Account'){
                        iconName = focused ? 'account' : 'account-outline';
                    }
                    return <MaterialCommunityIcons name={iconName} size={size} color='#FFFFFF' />
                },
                tabBarActiveBackgroundColor:'#363636',
                tabBarInactiveBackgroundColor:'#1D1D1D',
                tabBarActiveTintColor:'#FFFFFF',
                tabBarInactiveTintColor:'#FFFFFF',
                tabBarShowLabel:false,
                tabBarStyle:{
                    height:60,
                },
                headerShown:false,
            })}
        >
            <Tab.Screen name="Homestack" component={Homestack}/>
            <Tab.Screen name="Menu" component={MenuScreen}/>
            <Tab.Screen name="Cartstack" component={Cartstack}/>
            <Tab.Screen name="Account" component={AccountScreen}/>
        </Tab.Navigator>
    )
}

const Homestack = ({ navigation }) => {
    return(
        <Stack.Navigator
            screenOptions={{
                headerShown:false,
            }}
        >
            <Stack.Screen 
                name="Home"
                component={HomeScreen}
                options={{
                        title:"",
                        headerRight: () => (
                            <MaterialCommunityIcons
                                name={'magnify'}
                                size={24}
                                style = {styles.magnify} 
                                onPress={() => navigation.navigate('Search')}
                            />    
                        ),
                    }}
            />
            <Stack.Screen
                name="Search"
                component={SearchScreen}
                options={{title:'Search'}}
            />
        </Stack.Navigator>
    ); 
}

const Cartstack =({ navigation }) => {
    return(
        <Stack.Navigator
            screenOptions={{
                headerShown:false,
            }}
        >
            <Stack.Screen  
                name="Cart"
                component={ShoppingCartScreen}
                options={{
                    title:"",
                    headerLeft: () => (
                        <MaterialCommunityIcons
                            name={'heart-outline'}
                            size={24}
                            onPress={() => navigation.navigate('Heart')}
                            style={{ marginLeft:20, color:'#FFFFFF', position:'relative' }}
                        />
                    ),
                    headerRight: () => (
                        <MaterialCommunityIcons
                            name={'magnify'}
                            size={24}
                            onPress={() => navigation.navigate('Search')}
                            style={styles.magnify}
                        />
                    ),
                }}
            />
            <Stack.Screen
                name="Heart"
                component={HeartScreen}
                options={{
                    title:"",
                    headerLeft: () => (
                        <Pressable onPress={() => navigation.goBack()}>
                            <MaterialCommunityIcons
                                name={'cart-outline'}
                                size={24}
                                style={{ marginLeft:20, color:'#FFFFFF', position:'relative' }}
                            />
                        </Pressable>
                    ),
                    headerRight: () => (
                        <MaterialCommunityIcons
                            name={'magnify'}
                            size={24}
                            onPress={() => navigation.navigate('Search')}
                            style={styles.magnify}
                        />
                    ),
                }}
            />
            <Stack.Screen
                name="Search"
                component={SearchScreen}
                options={{title:'Search'}}
            />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    magnify:{
        marginLeft:20,
        color:'#FFFFFF',
        position:'relative',
        top:-45,
        left:325,
        zIndex:1000
    },
})

export default Navigation;