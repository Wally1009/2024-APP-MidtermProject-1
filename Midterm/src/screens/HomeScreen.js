import React from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import { Text, Pressable } from "@gluestack-ui/themed";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Header from "../components/Header"



const HomeScreen = () => {
    return(
        <SafeAreaProvider>
            <SafeAreaView style={{flex: 1 }}>
                <Header/>
                <ImageBackground style={styles.image} source={require('../img/image 1.png')}>
                    <Text style={styles.text}>WISH</Text>
                </ImageBackground>
            </SafeAreaView>
        </SafeAreaProvider>
    );
};

const styles = StyleSheet.create({
    text:{
        fontFamily:"Roboto",
        fontStyle:'italic',
        fontSize:96,
        letterSpacing:10,
        color:"#FFF",
        textAlign: "center",
        top:250
    },
    image:{
        flex:1,
        width:'auto',
        height:640,
        resizeMode:'cover'
    },
})


export default HomeScreen;