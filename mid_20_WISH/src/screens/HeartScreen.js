import React from 'react';
import { Text, StyleSheet } from "react-native";
import { Box, Center } from '@gluestack-ui/themed';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const HeartScreen = () =>{
    return(
        <Box>
            <Text style={styles.heart}>珍藏</Text>
                <Center style={{top:170}}>
                    <MaterialCommunityIcons
                    name='heart-plus-outline'
                    size={24}
                    styles={styles.heartplus}
                    /> 
                    <Box>
                        <Center>
                            <Text style={styles.text}>您尚未將任何商品保存到收藏夾</Text>
                            <Text style={styles.text}>保存您喜歡的商品並與他人分享</Text>
                        </Center>
                    </Box>
                </Center>
        </Box> 
    );
};

const styles = StyleSheet.create({
    heart:{
        fontFamily:"Roboto",
        fontSize:32,
        fontWeight:'bold',
        marginLeft:25,
        marginTop:20,
        marginBottom:20,
        color:'#000000'
    },
    magnify:{
        marginLeft:20,
        color:'#FFF',
        position:'relative',
        top:-45,
        left:325
    },
    heartplus:{
        marginBottom:40,
        color:'#000',
        position:'relative',
    },  
    text:{
        fontFamily:"Roboto",
        color:'#909090',
        marginTop:25    
    }
})

export default HeartScreen;