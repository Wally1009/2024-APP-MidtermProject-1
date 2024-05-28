import React, { useState } from "react";
import { NavigationContainer,useIsFocused } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Box, Text, KeyboardAvoidingView, Pressable } from "@gluestack-ui/themed";

import { StyleSheet, Platform } from "react-native";

import HomeScreen from "../screens/HomeScreen";
import MenuScreen from "../screens/MenuScreen";
import ShoppingCartScreen from "../screens/ShoppingCartScreen";
import AccountScreen from "../screens/AccountScreen";
import SearchScreen from "../screens/SearchScreen";
import HeartScreen from "../screens/HeartScreen";
import Men_PerfumeDetailScreen from "../screens/Men_PerfumeDetailScreen";
import Men_PerfumeScreen from "../screens/Men_PerfumeScreen";
import MenPerfumeData from "../json/Men_Perfume.json";

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
                    } else if ( route.name === 'Menustack'){
                        iconName = focused ? 'dots-horizontal-circle' : 'dots-horizontal-circle-outline';
                    } else if ( route.name === 'Cartstack'){
                        iconName = focused ? 'cart' : 'cart-outline';
                    } else if ( route.name === 'Accountstack'){
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
                headerShown:false
            })}
        >
            <Tab.Screen name="Homestack" component={Homestack}/>
            <Tab.Screen name="Menustack" component={MenuStack}/>
            <Tab.Screen name="Cartstack" component={Cartstack}/>
            <Tab.Screen name="Accountstack" component={Accountstack}/>
        </Tab.Navigator>
    )
}

const Homestack = ({ navigation }) => {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="Home"
                component={HomeScreen}
                options={{
                        title:"",
                        headerStyle:{
                            backgroundColor: "#000000",
                            height: 60,
                        },
                        headerRight: () => (
                            <Pressable onPress={() => navigation.navigate('Search')}>
                                <MaterialCommunityIcons
                                    name={'magnify'}
                                    size={24}
                                    style = {styles.icon} 
                                />    
                            </Pressable>
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

const MenuStack = ({ navigation }) => {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="Menu"
                component={MenuScreen}
                options={({ route }) => ({
                    title:"",
                    headerStyle:{
                        backgroundColor: "#000000",
                        height: 60,
                    },
                    headerRight: () => (
                        <Pressable onPress={() => navigation.navigate('Search')}>
                            <MaterialCommunityIcons
                                name={'magnify'}
                                size={24}
                                style = {styles.icon} 
                            />    
                        </Pressable>
                    ),
                   
                })}
            />
            <Stack.Screen
              name="Men_PerfumeScreen"
              component={Men_PerfumeScreen}
              options={{
                title: MenPerfumeData.title,
                headerTitleStyle: {
                    fontWeight: '400',
                    fontSize: 20,
                },
              
              }}
            />
            <Stack.Screen
              name="Men_PerfumeDetailScreen"
              component={Men_PerfumeDetailScreen}
              options={({ route }) => ({
                title: route.params.title,
                headerTintColor: '#000',
                headerTitleStyle: {
                    fontWeight: '400',
                    fontSize: 20
                },
            })}
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
        <Stack.Navigator>
            <Stack.Screen  
                name="Cart"
                component={ShoppingCartScreen}
                options={{
                    title:"",
                    headerStyle:{
                        backgroundColor: "#000000",
                        height: 60,
                    },
                    headerLeft: () => (
                        <Pressable onPress={() => navigation.navigate('Heart')}>
                            <MaterialCommunityIcons
                                name={'heart-outline'}
                                size={24}
                                style={styles.icon}
                            />
                        </Pressable>
                    ),
                    headerRight: () => (
                        <Pressable onPress={() => navigation.navigate('Search')}>
                            <MaterialCommunityIcons
                                name={'magnify'}
                                size={24}
                                style={styles.icon}
                            />
                        </Pressable>
                    ),
                }}
            />
            <Stack.Screen
                name="Men_PerfumeDetailScreen"
                component={Men_PerfumeDetailScreen}
                options={({ route }) => ({
                    title: route.params.title,
                    headerTintColor: '#000',
                    headerTitleStyle: {
                        fontWeight: '400',
                        fontSize: 20
                    },
                })}
            />
            <Stack.Screen
                name="Heart"
                component={HeartScreen}
                options={{
                    title:"",
                    headerStyle:{
                        backgroundColor: "#000000",
                        height: 60,
                    },
                    headerLeft: () => (
                        <Pressable onPress={() => navigation.navigate('Cart')}>
                            <MaterialCommunityIcons
                                name={'cart-outline'}
                                size={24}
                                style={styles.icon}
                            />
                        </Pressable>
                    ),
                    headerRight: () => (
                        <Pressable onPress={() => navigation.navigate('Search')}>
                            <MaterialCommunityIcons
                                name={'magnify'}
                                size={24}
                                style={styles.icon}
                            />
                        </Pressable>
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

const Accountstack = ({ navigation }) => {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="Account"
                component={AccountScreen}
                options={{
                        title:"",
                        headerStyle:{
                            backgroundColor: "#000000",
                            height: 60,
                        },
                        headerRight: () => (
                            <Pressable onPress={() => navigation.navigate('Search')}>
                                <MaterialCommunityIcons
                                    name={'magnify'}
                                    size={24}
                                    style = {styles.icon} 
                                />    
                            </Pressable>
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
    icon:{
        marginRight:10,
        marginBottom:20,
        color:'#FFFFFF',
    },
})

export default Navigation;