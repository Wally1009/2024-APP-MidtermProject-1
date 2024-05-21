import React from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import { Text, Box } from "@gluestack-ui/themed";

const HomeScreen = () => {
    return(
        <Box style={{flex: 1 }}>
            <ImageBackground style={styles.image} source={require('../img/image 1.png')}>
                    <Text style={styles.text}>WISH</Text>
            </ImageBackground>
        </Box>
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
        height:650,
        resizeMode:'cover'
    },
})


export default HomeScreen;