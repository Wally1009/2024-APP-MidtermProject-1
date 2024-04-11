import React from 'react';
import { Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Header from "../components/Header"

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeScreen = () => {
    return(
        <SafeAreaProvider>
            <SafeAreaView>
                <Header/>
                <MaterialCommunityIcons
                    name='magnify'
                    size={24}
                    style = {{ color:'#FFFFFF', marginRight: 20, position: 'relative', top: -55, left: 315}}
                /> 
                <Text style={{ textAlign: "center" }}>Wish</Text>
            </SafeAreaView>
        </SafeAreaProvider>
    );
};

export default HomeScreen;