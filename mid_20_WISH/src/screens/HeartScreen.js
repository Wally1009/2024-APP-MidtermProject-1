import React from 'react';
import { Text, StyleSheet } from "react-native";
import { Box, Center } from '@gluestack-ui/themed';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector } from "react-redux";
import { selectColorMode } from "../Redux/accountSlice";

const HeartScreen = () => {
    const colorMode = useSelector(selectColorMode);
    const backgroundMode = colorMode == 'light' ? 'white' : 'black'
    const textMode = colorMode == 'light' ? 'black' : 'white'
    const iconMode = colorMode == 'light' ? 'black' : 'white'

    return(
        <Box style={styles.container} bg={backgroundMode}> 
            <Text style={styles.heart} color={textMode}>珍藏</Text>
            <Center style={{top:170}}>
                <MaterialCommunityIcons
                name='heart-plus-outline'
                size={24}
                styles={styles.heartplus}
                color={iconMode}
                /> 
                <Box>
                    <Center>
                        <Text style={styles.text} color={textMode}>您尚未將任何商品保存到收藏夾</Text>
                        <Text style={styles.text} color={textMode}>保存您喜歡的商品並與他人分享</Text>
                    </Center>
                </Box>
            </Center>
        </Box> 
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    heart:{
        fontFamily:"Roboto",
        fontSize:32,
        fontWeight:'bold',
        marginLeft:25,
        marginTop:20,
        marginBottom:20,
    },
    heartplus:{
        marginBottom:40,
        position:'relative',
    },  
    text:{
        fontFamily:"Roboto",
        marginTop:25    
    }
})

export default HeartScreen;