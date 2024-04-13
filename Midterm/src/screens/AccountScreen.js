import React from 'react';
import { Text, StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Header from "../components/Header"

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const AccountScreen = () => {
    return(
        <SafeAreaProvider>
            <SafeAreaView>
                <Header/>
                <MaterialCommunityIcons
                    name='magnify'
                    size={24}
                    style = {styles.magnify}
                /> 
                <Text style={{ textAlign: "center" }}>this is Account</Text>
            </SafeAreaView>
        </SafeAreaProvider>
    );
};

const styles = StyleSheet.create({
    magnify:{
        marginLeft:20,
        color:'#FFF',
        position:'relative',
        top:-45,
        left:325
    }
})

export default AccountScreen;