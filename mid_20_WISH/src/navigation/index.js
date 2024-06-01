
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Box, KeyboardAvoidingView, Pressable } from "@gluestack-ui/themed";
import { StyleSheet, Platform } from "react-native";

import HomeScreen from "../screens/HomeScreen";
import MenuScreen from "../screens/MenuScreen";
import ShoppingCartScreen from "../screens/ShoppingCartScreen";
import AccountScreen from "../screens/AccountScreen";
import SearchScreen from "../screens/SearchScreen";
import HeartScreen from "../screens/HeartScreen";
import Women_JacketDetailScreen from "../screens/Women_JacketDetailScreen";
import Women_JacketScreen from "../screens/Women_JacketScreen";
import WomenJacketData from "../json/Women_Jacket.json";
import Women_TshirtDetailScreen from "../screens/Women_TshirtDetailScreen";
import Women_TshirtScreen from "../screens/Women_TshirtScreen";
import WomenTshirtData from "../json/Women_Tshirt.json";
import Women_PerfumeDetailScreen from "../screens/Women_PerfumeDetailScreen";
import Women_PerfumeScreen from "../screens/Women_PerfumeScreen";
import WomenPerfumeData from "../json/Women_Perfume.json";
import Women_PantsDetailScreen from "../screens/Women_PantsDetailScreen";
import Women_PantsScreen from "../screens/Women_PantsScreen";
import WomenPantsData from "../json/Women_Pants.json";
import Men_PerfumeDetailScreen from "../screens/Men_PerfumeDetailScreen";
import Men_PerfumeScreen from "../screens/Men_PerfumeScreen";
import MenPerfumeData from "../json/Men_Perfume.json";
import Men_JacketDetailScreen from "../screens/Men_JacketDetailScreen";
import Men_JacketScreen from "../screens/Men_JacketScreen";
import MenJacketData from "../json/Men_Jacket.json";
import Men_PantsDetailScreen from "../screens/Men_PantsDetailScreen";
import Men_PantsScreen from "../screens/Men_PantsScreen";
import MenPantsData from "../json/Men_Pants.json";
import Men_TshirtDetailScreen from "../screens/Men_TshirtDetailScreen";
import Men_TshirtScreen from "../screens/Men_TshirtScreen";
import MenTshirtData from "../json/Men_Tshirt.json";
import FashionDetailScreen from "../screens/Fashion/FashionDetailScreen";
import FashionScreen from "../screens/Fashion/FashionScreen";
import FashionData from "../json/Fashion.json";

import SearchBar from "../components/SearchBar";

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
                options={{
                    title:"Search",
                }}
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
                options={{
                    title:"",
                    headerStyle:{
                        backgroundColor: "#000000",
                        height: 60,
                    },
                }}
            />
            <Stack.Screen
              name="FashionScreen"
              component={FashionScreen}
              options={{
                title: FashionData.title,
                headerTitleStyle: {
                    fontWeight: '400',
                    fontSize: 20,
                },
              }}
            />
            <Stack.Screen
              name="FashionDetailScreen"
              component={FashionDetailScreen}
              options={({ route }) => ({
                title: route.params.title,
                headerTintColor: '#000',
                headerTitleStyle: {
                    fontWeight: '400',
                    fontSize: 20
                },headerStyle: {
                    backgroundColor: 'black',
                },
                headerLeft: () => (
                    <Pressable onPress={() => navigation.navigate('Menu')}>
                        <MaterialCommunityIcons
                            name={'chevron-left'}
                            size={24}
                            style={{ marginLeft: 10, color: 'white' }}
                        />
                    </Pressable>
                ),
            })}
            />
            <Stack.Screen
              name="Women_JacketScreen"
              component={Women_JacketScreen}
              options={{
                title: WomenJacketData.title,
                headerTitleStyle: {
                    fontWeight: '400',
                    fontSize: 20,
                },headerStyle: {
                    backgroundColor: 'black',
                },
                headerLeft: () => (
                    <Pressable onPress={() => navigation.navigate('Menu')}>
                        <MaterialCommunityIcons
                            name={'chevron-left'}
                            size={24}
                            style={{ marginLeft: 10, color: 'white' }}
                        />
                    </Pressable>
                ),
              }}
            />
            <Stack.Screen
              name="Women_JacketDetailScreen"
              component={Women_JacketDetailScreen}
              options={({ route }) => ({
                title: route.params.title,
                headerTintColor: '#000',
                headerTitleStyle: {
                    fontWeight: '400',
                    fontSize: 20
                },headerStyle: {
                    backgroundColor: 'black',
                },
                headerLeft: () => (
                    <Pressable onPress={() => navigation.navigate('Women_JacketScreen')}>
                        <MaterialCommunityIcons
                            name={'chevron-left'}
                            size={24}
                            style={{ marginLeft: 10, color: 'white' }}
                        />
                    </Pressable>
                ),
            })}
            />
            <Stack.Screen
              name="Women_PerfumeScreen"
              component={Women_PerfumeScreen}
              options={{
                title: WomenPerfumeData.title,
                headerTitleStyle: {
                    fontWeight: '400',
                    fontSize: 20,
                },headerStyle: {
                    backgroundColor: 'black',
                },
                headerLeft: () => (
                    <Pressable onPress={() => navigation.navigate('Menu')}>
                        <MaterialCommunityIcons
                            name={'chevron-left'}
                            size={24}
                            style={{ marginLeft: 10, color: 'white' }}
                        />
                    </Pressable>
                ),
              }}
            />
            <Stack.Screen
              name="Women_PerfumeDetailScreen"
              component={Women_PerfumeDetailScreen}
              options={({ route }) => ({
                title: route.params.title,
                headerTintColor: '#000',
                headerTitleStyle: {
                    fontWeight: '400',
                    fontSize: 20
                },headerStyle: {
                    backgroundColor: 'black',
                },
                headerLeft: () => (
                    <Pressable onPress={() => navigation.navigate('Women_PerfumeScreen')}>
                        <MaterialCommunityIcons
                            name={'chevron-left'}
                            size={24}
                            style={{ marginLeft: 10, color: 'white' }}
                        />
                    </Pressable>
                ),
            })}
            />
            <Stack.Screen
              name="Women_TshirtScreen"
              component={Women_TshirtScreen}
              options={{
                title: WomenTshirtData.title,
                headerTitleStyle: {
                    fontWeight: '400',
                    fontSize: 20,
                },headerStyle: {
                    backgroundColor: 'black',
                },
                headerLeft: () => (
                    <Pressable onPress={() => navigation.navigate('Menu')}>
                        <MaterialCommunityIcons
                            name={'chevron-left'}
                            size={24}
                            style={{ marginLeft: 10, color: 'white' }}
                        />
                    </Pressable>
                ),
              }}
            />
            <Stack.Screen
              name="Women_TshirtDetailScreen"
              component={Women_TshirtDetailScreen}
              options={({ route }) => ({
                title: route.params.title,
                headerTintColor: '#000',
                headerTitleStyle: {
                    fontWeight: '400',
                    fontSize: 20
                },headerStyle: {
                    backgroundColor: 'black',
                },
                headerLeft: () => (
                    <Pressable onPress={() => navigation.navigate('Women_TshirtScreen')}>
                        <MaterialCommunityIcons
                            name={'chevron-left'}
                            size={24}
                            style={{ marginLeft: 10, color: 'white' }}
                        />
                    </Pressable>
                ),
            })}
            />
            <Stack.Screen
              name="Women_PantsScreen"
              component={Women_PantsScreen}
              options={{
                title: WomenPantsData.title,
                headerTitleStyle: {
                    fontWeight: '400',
                    fontSize: 20,
                },headerStyle: {
                    backgroundColor: 'black',
                },
                headerLeft: () => (
                    <Pressable onPress={() => navigation.navigate('Menu')}>
                        <MaterialCommunityIcons
                            name={'chevron-left'}
                            size={24}
                            style={{ marginLeft: 10, color: 'white' }}
                        />
                    </Pressable>
                ),
              }}
            />
            <Stack.Screen
              name="Women_PantsDetailScreen"
              component={Women_PantsDetailScreen}
              options={({ route }) => ({
                title: route.params.title,
                headerTintColor: '#000',
                headerTitleStyle: {
                    fontWeight: '400',
                    fontSize: 20
                },headerStyle: {
                    backgroundColor: 'black',
                },
                headerLeft: () => (
                    <Pressable onPress={() => navigation.navigate('Women_PantsScreen')}>
                        <MaterialCommunityIcons
                            name={'chevron-left'}
                            size={24}
                            style={{ marginLeft: 10, color: 'white' }}
                        />
                    </Pressable>
                ),
            })}
            /><Stack.Screen
              name="Men_TshirtScreen"
              component={Men_TshirtScreen}
              options={{
                title: MenTshirtData.title,
                headerTitleStyle: {
                    fontWeight: '400',
                    fontSize: 20,
                },headerStyle: {
                    backgroundColor: 'black',
                },
                headerLeft: () => (
                    <Pressable onPress={() => navigation.navigate('Menu')}>
                        <MaterialCommunityIcons
                            name={'chevron-left'}
                            size={24}
                            style={{ marginLeft: 10, color: 'white' }}
                        />
                    </Pressable>
                ),
              }}
            />
            <Stack.Screen
              name="Men_TshirtDetailScreen"
              component={Men_TshirtDetailScreen}
              options={({ route }) => ({
                title: route.params.title,
                headerTintColor: '#000',
                headerTitleStyle: {
                    fontWeight: '400',
                    fontSize: 20
                },headerStyle: {
                    backgroundColor: 'black',
                },
                headerLeft: () => (
                    <Pressable onPress={() => navigation.navigate('Men_TshirtScreen')}>
                        <MaterialCommunityIcons
                            name={'chevron-left'}
                            size={24}
                            style={{ marginLeft: 10, color: 'white' }}
                        />
                    </Pressable>
                ),
            })}
            />
            <Stack.Screen
              name="Men_JacketScreen"
              component={Men_JacketScreen}
              options={{
                title: MenJacketData.title,
                headerTitleStyle: {
                    fontWeight: '400',
                    fontSize: 20,
                },headerStyle: {
                    backgroundColor: 'black',
                },
                headerLeft: () => (
                    <Pressable onPress={() => navigation.navigate('Menu')}>
                        <MaterialCommunityIcons
                            name={'chevron-left'}
                            size={24}
                            style={{ marginLeft: 10, color: 'white' }}
                        />
                    </Pressable>
                ),
              }}
            />
            <Stack.Screen
              name="Men_JacketDetailScreen"
              component={Men_JacketDetailScreen}
              options={({ route }) => ({
                title: route.params.title,
                headerTintColor: '#000',
                headerTitleStyle: {
                    fontWeight: '400',
                    fontSize: 20
                },headerStyle: {
                    backgroundColor: 'black',
                },
                headerLeft: () => (
                    <Pressable onPress={() => navigation.navigate('Men_JacketScreen')}>
                        <MaterialCommunityIcons
                            name={'chevron-left'}
                            size={24}
                            style={{ marginLeft: 10, color: 'white' }}
                        />
                    </Pressable>
                ),
            })}
            />
            <Stack.Screen
              name="Men_PantsScreen"
              component={Men_PantsScreen}
              options={{
                title: MenPantsData.title,
                headerTitleStyle: {
                    fontWeight: '400',
                    fontSize: 20,
                },headerStyle: {
                    backgroundColor: 'black',
                },
                headerLeft: () => (
                    <Pressable onPress={() => navigation.navigate('Menu')}>
                        <MaterialCommunityIcons
                            name={'chevron-left'}
                            size={24}
                            style={{ marginLeft: 10, color: 'white' }}
                        />
                    </Pressable>
                ),
              }}
            />
            <Stack.Screen
              name="Men_PantsDetailScreen"
              component={Men_PantsDetailScreen}
              options={({ route }) => ({
                title: route.params.title,
                headerTintColor: '#000',
                headerTitleStyle: {
                    fontWeight: '400',
                    fontSize: 20
                },headerStyle: {
                    backgroundColor: 'black',
                },
                headerLeft: () => (
                    <Pressable onPress={() => navigation.navigate('Men_PantsScreen')}>
                        <MaterialCommunityIcons
                            name={'chevron-left'}
                            size={24}
                            style={{ marginLeft: 10, color: 'white' }}
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
                },headerStyle: {
                    backgroundColor: 'black',
                },
                headerLeft: () => (
                    <Pressable onPress={() => navigation.navigate('Menu')}>
                        <MaterialCommunityIcons
                            name={'chevron-left'}
                            size={24}
                            style={{ marginLeft: 10, color: 'white' }}
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
                },headerStyle: {
                    backgroundColor: 'black',
                },
                headerLeft: () => (
                    <Pressable onPress={() => navigation.navigate('Men_PerfumeScreen')}>
                        <MaterialCommunityIcons
                            name={'chevron-left'}
                            size={24}
                            style={{ marginLeft: 10, color: 'white' }}
                        />
                    </Pressable>
                ),
            })}
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
                    headerRight: () => (
                        <Pressable onPress={() => navigation.navigate('Heart')}>
                            <MaterialCommunityIcons
                                name={'heart-outline'}
                                size={24}
                                style={styles.icon}
                            />
                        </Pressable>
                    ),
                }}
            />
            <Stack.Screen
                name="Women_JacketDetailScreen"
                component={Women_JacketDetailScreen}
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
                name="Women_PerfumeDetailScreen"
                component={Women_PerfumeDetailScreen}
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
                name="Women_TshirtDetailScreen"
                component={Women_TshirtDetailScreen}
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
                name="Women_PantsDetailScreen"
                component={Women_PantsDetailScreen}
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
                name="Men_TshirtDetailScreen"
                component={Men_TshirtDetailScreen}
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
                name="Men_JacketDetailScreen"
                component={Men_JacketDetailScreen}
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
                name="Men_PantsDetailScreen"
                component={Men_PantsDetailScreen}
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
                name="FashionDetailScreen"
                component={FashionDetailScreen}
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
                    headerRight: () => (
                        <Pressable onPress={() => navigation.navigate('Cart')}>
                            <MaterialCommunityIcons
                                name={'cart-outline'}
                                size={24}
                                style={styles.icon}
                            />
                        </Pressable>
                    ),
                }}
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
                    }}
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