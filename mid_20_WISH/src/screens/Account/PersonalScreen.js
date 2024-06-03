import React from "react";
import { Box, Text } from "@gluestack-ui/themed";
import { StyleSheet } from "react-native-web";
import { useSelector } from "react-redux";
import { selectColorMode } from "../../Redux/accountSlice";

const PersonalScreen = () => {
    const colorMode = useSelector(selectColorMode);
    const backgroundMode = colorMode == 'light' ? 'white' : 'black'
    const textMode = colorMode == 'light' ? 'black' : 'white'
    return(
        <Box style={styles.container} bg={backgroundMode}>
            <Text 
                color={textMode}
                style={styles.text}
            >
                It's personal profile.
            </Text>
        </Box>
 )}

 const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:"center",
        justifyContent:"center"
    },
    text:{
        fontSize:30,
        fontWeight:'bold'
    }
 })
 export default PersonalScreen;