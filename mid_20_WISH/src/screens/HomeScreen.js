import React from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import { Text, Box } from "@gluestack-ui/themed";
import Swiper from 'react-native-swiper';
import { useSelector } from "react-redux";
import { selectColorMode } from "../Redux/accountSlice";

const HomeScreen = () => {
    const colorMode = useSelector(selectColorMode);
    const backgroundMode = colorMode == 'light' ? 'white' : 'black'
    const textMode = colorMode == 'light' ? 'white' : 'gray'
    return(
        <Swiper 
            style={styles.wrapper} 
            autoplay={true}
            autoplayTimeout={4}
            showsButtons={false}
            showsPagination={false}
            loop={true}
        >
            <ImageBackground style={styles.image} source={require('../img/image 1.png')}>
                    <Text style={styles.text} color={textMode}>WISH</Text>
            </ImageBackground>
            <ImageBackground style={styles.image} source={require('../img/Men_Jacket_img/image 29.png')}>
                    <Text style={styles.text} color={textMode}>WISH</Text>
            </ImageBackground>
            <ImageBackground style={styles.image} source={require('../img/Men_Tshirt_img/image 38.png')}>
                    <Text style={styles.text} color={textMode}>WISH</Text>
            </ImageBackground>
            <ImageBackground style={styles.image} source={require('../img/Women_Jacket_img/image 31.png')}>
                    <Text style={styles.text} color={textMode}>WISH</Text>
            </ImageBackground>
            <ImageBackground style={styles.image} source={require('../img/Women_T-shirt_img/image 41.png')}>
                    <Text style={styles.text} color={textMode}>WISH</Text>
            </ImageBackground>
        </Swiper>
    );
};

const styles = StyleSheet.create({
    wrapper:{},
    text:{
        fontFamily:"Roboto",
        fontStyle:'italic',
        fontSize:96,
        letterSpacing:10,
        textAlign: "center",
        top:250
    },
    image:{
        flex:1,
        width:'auto',
        height:650,
        resizeMode:'cover'
    },
})


export default HomeScreen;