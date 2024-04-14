import React from 'react';
import { Text, StyleSheet } from "react-native";
import { Box, Center } from '@gluestack-ui/themed';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Header from "../components/Header"

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const ShoppingCartScreen = () => {
    return(
        <SafeAreaProvider>
            <SafeAreaView>
                <Header/>
                <Text style={styles.cart}>購物車</Text>
                <Center style={{top:170}}>
                    <MaterialCommunityIcons
                    name='cart-plus'
                    size={24}
                    styles={styles.cartplus}
                    /> 
                    <Box>
                        <Center>
                            <Text style={styles.text}>您的購物車是空的</Text>
                            <Text style={styles.text}>添加商品到購物車吧</Text>
                        </Center>
                    </Box>
                </Center>
            </SafeAreaView>
        </SafeAreaProvider>
    );
};

const styles = StyleSheet.create({
    cart:{
        fontFamily:"Roboto",
        fontSize:32,
        fontWeight:'bold',
        marginLeft:30,
        marginTop:20
    },
    cartplus:{
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

export default ShoppingCartScreen;